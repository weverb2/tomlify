import React, { useState, useMemo } from 'react';
import { LIBRARIES, PLUGINS, type Library, type Plugin } from '../data/libraries';

const TomlifyGenerator: React.FC = () => {
  const [selectedLibIds, setSelectedLibIds] = useState<Set<string>>(new Set());
  const [selectedPluginIds, setSelectedPluginIds] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState('');
  const [onlyKmp, setOnlyKmp] = useState(false);
  const [versionType, setVersionType] = useState<'stable' | 'latest'>('stable');

  const toggleLibrary = (id: string) => {
    const next = new Set(selectedLibIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedLibIds(next);
  };

  const togglePlugin = (id: string) => {
    const next = new Set(selectedPluginIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedPluginIds(next);
  };

  const filteredLibraries = useMemo(() => {
    return LIBRARIES.filter(lib => {
      const matchesSearch = lib.name.toLowerCase().includes(search.toLowerCase()) ||
                          lib.description.toLowerCase().includes(search.toLowerCase());
      const matchesKmp = !onlyKmp || (lib.kmpPlatforms && lib.kmpPlatforms.length > 0);
      return matchesSearch && matchesKmp;
    });
  }, [search, onlyKmp]);

  const filteredPlugins = useMemo(() => {
    return PLUGINS.filter(plugin => 
      plugin.name.toLowerCase().includes(search.toLowerCase()) ||
      plugin.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const generateToml = () => {
    const selectedLibs = LIBRARIES.filter(lib => selectedLibIds.has(lib.id));
    const selectedPluginIds_ = PLUGINS.filter(p => selectedPluginIds.has(p.id));

    if (selectedLibs.length === 0 && selectedPluginIds_.length === 0) {
      return '# Select dependencies or plugins to generate libs.versions.toml';
    }

    let toml = '[versions]\n';
    const versionsAdded = new Set<string>();

    const getVersion = (item: Library | Plugin) => {
      return versionType === 'stable' ? item.stableVersion : item.latestVersion;
    };

    const addVersion = (id: string, version: string) => {
      const vKey = id.replace(/-/g, '_');
      if (version && !versionsAdded.has(vKey)) {
        toml += `${vKey} = "${version}"\n`;
        versionsAdded.add(vKey);
      }
    };

    // Only add versions for libraries NOT managed by a selected BOM
    selectedLibs.forEach(lib => {
      const isManagedBySelectedBom = lib.managedBy && selectedLibIds.has(lib.managedBy);
      if (!isManagedBySelectedBom) {
        addVersion(lib.id, getVersion(lib));
      }
    });
    
    selectedPluginIds_.forEach(p => addVersion(p.id, getVersion(p)));

    if (selectedLibs.length > 0) {
      toml += '\n[libraries]\n';
      selectedLibs.forEach(lib => {
        const libKey = lib.id.replace(/-/g, '_');
        const vKey = lib.id.replace(/-/g, '_');
        const isManagedBySelectedBom = lib.managedBy && selectedLibIds.has(lib.managedBy);

        if (isManagedBySelectedBom) {
          toml += `${libKey} = { group = "${lib.group}", name = "${lib.artifact}" }\n`;
        } else if (getVersion(lib)) {
          toml += `${libKey} = { group = "${lib.group}", name = "${lib.artifact}", version.ref = "${vKey}" }\n`;
        } else {
          toml += `${libKey} = { group = "${lib.group}", name = "${lib.artifact}" }\n`;
        }
      });
    }

    if (selectedPluginIds_.length > 0) {
      toml += '\n[plugins]\n';
      selectedPluginIds_.forEach(p => {
        const pKey = p.id.replace(/-/g, '_');
        const vKey = p.id.replace(/-/g, '_');
        toml += `${pKey} = { id = "${p.pluginId}", version.ref = "${vKey}" }\n`;
      });
    }

    return toml;
  };

  const libCategories = Array.from(new Set(filteredLibraries.map(l => l.category)));
  const pluginCategories = Array.from(new Set(filteredPlugins.map(p => p.category)));

  return (
    <div className="generator-container">
      <div className="sidebar">
        <div className="filter-controls">
          <input 
            type="text" 
            placeholder="Search everything..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          
          <div className="toggle-group">
            <label className="filter-toggle">
              <input 
                type="checkbox" 
                checked={onlyKmp} 
                onChange={(e) => setOnlyKmp(e.target.checked)} 
              />
              <span>Show KMP only</span>
            </label>

            <div className="version-selector">
              <button 
                className={versionType === 'stable' ? 'active' : ''} 
                onClick={() => setVersionType('stable')}
              >
                Stable
              </button>
              <button 
                className={versionType === 'latest' ? 'active' : ''} 
                onClick={() => setVersionType('latest')}
              >
                Latest
              </button>
            </div>
          </div>
        </div>
        
        <div className="library-list">
          {libCategories.map(category => (
            <div key={category} className="category-section">
              <h3>{category}</h3>
              {filteredLibraries.filter(l => l.category === category).map(lib => (
                <label key={lib.id} className="library-item">
                  <input 
                    type="checkbox" 
                    checked={selectedLibIds.has(lib.id)}
                    onChange={() => toggleLibrary(lib.id)}
                  />
                  <div className="library-info">
                    <div className="library-header">
                      <span className="library-name">{lib.name}</span>
                      <div className="badge-row">
                        {lib.kmpPlatforms && <span className="kmp-badge">KMP</span>}
                        {lib.latestVersion !== lib.stableVersion && versionType === 'latest' && (
                          <span className="preview-badge">Preview</span>
                        )}
                      </div>
                    </div>
                    <span className="library-desc">{lib.description}</span>
                    <span className="version-info">
                      {versionType === 'stable' ? lib.stableVersion : lib.latestVersion}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          ))}

          {pluginCategories.length > 0 && (
            <div className="category-divider">Plugins & Processors</div>
          )}

          {pluginCategories.map(category => (
            <div key={category} className="category-section">
              <h3 className="plugin-cat">{category}</h3>
              {filteredPlugins.filter(p => p.category === category).map(plugin => (
                <label key={plugin.id} className="library-item plugin-item">
                  <input 
                    type="checkbox" 
                    checked={selectedPluginIds.has(plugin.id)}
                    onChange={() => togglePlugin(plugin.id)}
                  />
                  <div className="library-info">
                    <div className="library-header">
                      <span className="library-name">{plugin.name}</span>
                      {plugin.latestVersion !== plugin.stableVersion && versionType === 'latest' && (
                        <span className="preview-badge">Preview</span>
                      )}
                    </div>
                    <span className="library-desc">{plugin.description}</span>
                    <span className="version-info">
                      {versionType === 'stable' ? plugin.stableVersion : plugin.latestVersion}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          ))}
        </div>

        <div className="sidebar-footer">
          <a 
            href="https://github.com/weverb2/tomlify/issues/new?title=Library+Request"
            target="_blank"
            rel="noopener noreferrer"
            className="request-link"
          >
            + Request more
          </a>
        </div>
      </div>

      <div className="preview-panel">
        <div className="preview-header">
          <h2>libs.versions.toml</h2>
          <button 
            onClick={() => navigator.clipboard.writeText(generateToml())}
            className="copy-button"
          >
            Copy
          </button>
        </div>
        <pre className="toml-preview">
          <code>{generateToml()}</code>
        </pre>
      </div>

      <style jsx>{`
        .generator-container {
          display: grid;
          grid-template-columns: 380px minmax(0, 1fr);
          gap: 2rem;
          min-height: 80vh;
          padding: 1rem;
        }
        .sidebar {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid #dee2e6;
          display: flex;
          flex-direction: column;
          max-height: 85vh;
          min-width: 0;
        }
        .filter-controls {
          margin-bottom: 1.5rem;
        }
        .search-input {
          width: 100%;
          padding: 0.75rem;
          margin-bottom: 1rem;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-size: 1rem;
        }
        .toggle-group {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .filter-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          cursor: pointer;
          color: #495057;
        }
        .version-selector {
          display: flex;
          background: #e9ecef;
          padding: 2px;
          border-radius: 6px;
        }
        .version-selector button {
          border: none;
          background: transparent;
          padding: 4px 12px;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          border-radius: 4px;
          color: #6c757d;
        }
        .version-selector button.active {
          background: white;
          color: #212529;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .library-list {
          overflow-y: auto;
          flex-grow: 1;
          padding-right: 0.5rem;
        }
        .category-divider {
          margin: 2rem 0 1rem;
          padding: 0.5rem;
          background: #e9ecef;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          text-align: center;
          color: #495057;
        }
        .category-section h3 {
          margin: 1.5rem 0 0.75rem;
          font-size: 0.85rem;
          text-transform: uppercase;
          color: #6c757d;
          letter-spacing: 0.05em;
        }
        .plugin-cat {
          color: #0d6efd !important;
        }
        .library-item {
          display: flex;
          gap: 0.75rem;
          padding: 0.75rem;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s;
          margin-bottom: 0.25rem;
        }
        .library-item:hover {
          background: #e9ecef;
        }
        .library-info {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          flex-grow: 1;
        }
        .library-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }
        .badge-row {
          display: flex;
          gap: 4px;
        }
        .library-name {
          font-weight: 600;
          font-size: 0.95rem;
        }
        .kmp-badge {
          background: #3ddc84;
          color: #073042;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 1px 4px;
          border-radius: 3px;
        }
        .preview-badge {
          background: #ffc107;
          color: #000;
          font-size: 0.65rem;
          font-weight: 800;
          padding: 1px 4px;
          border-radius: 3px;
        }
        .library-desc {
          font-size: 0.75rem;
          color: #6c757d;
          line-height: 1.3;
        }
        .version-info {
          font-size: 0.7rem;
          font-family: monospace;
          color: #0d6efd;
          font-weight: 600;
        }
        .sidebar-footer {
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid #dee2e6;
        }
        .request-link {
          color: #3ddc84;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
        }
        .preview-panel {
          background: #212529;
          color: #f8f9fa;
          padding: 1.5rem;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          height: 85vh;
          position: sticky;
          top: 1rem;
          min-width: 0;
        }
        .preview-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          flex-shrink: 0;
        }
        .preview-header h2 {
          margin: 0;
          font-size: 1.25rem;
          color: #adb5bd;
        }
        .copy-button {
          background: #343a40;
          color: #fff;
          border: 1px solid #495057;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .copy-button:hover {
          background: #495057;
        }
        .toml-preview {
          margin: 0;
          font-family: 'Fira Code', 'Roboto Mono', monospace;
          font-size: 0.9rem;
          line-height: 1.5;
          overflow: auto;
          flex-grow: 1;
          background: rgba(0,0,0,0.2);
          padding: 1rem;
          border-radius: 4px;
          white-space: pre;
        }
        .toml-preview code {
          display: block;
          width: fit-content;
          min-width: 100%;
        }
        @media (max-width: 900px) {
          .generator-container {
            grid-template-columns: 1fr;
          }
          .sidebar {
            max-height: none;
          }
          .preview-panel {
            max-height: none;
            position: relative;
            top: 0;
            height: auto;
            min-height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default TomlifyGenerator;
