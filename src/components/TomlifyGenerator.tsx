import React, { useState, useMemo } from 'react';
import { LIBRARIES, PLUGINS, type Library, type Plugin } from '../data/libraries';

const TomlifyGenerator: React.FC = () => {
  const [selectedLibIds, setSelectedLibIds] = useState<Set<string>>(new Set());
  const [selectedPluginIds, setSelectedPluginIds] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState('');
  const [onlyKmp, setOnlyKmp] = useState(false);

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
    const selectedPlugins = PLUGINS.filter(p => selectedPluginIds.has(p.id));

    if (selectedLibs.length === 0 && selectedPlugins.length === 0) {
      return '# Select dependencies or plugins to generate libs.versions.toml';
    }

    let toml = '[versions]\n';
    const versionsAdded = new Set<string>();

    const addVersion = (id: string, version: string) => {
      const vKey = id.replace(/-/g, '_');
      if (version && !versionsAdded.has(vKey)) {
        toml += `${vKey} = "${version}"\n`;
        versionsAdded.add(vKey);
      }
    };

    selectedLibs.forEach(lib => addVersion(lib.id, lib.version));
    selectedPlugins.forEach(p => addVersion(p.id, p.version));

    if (selectedLibs.length > 0) {
      toml += '\n[libraries]\n';
      selectedLibs.forEach(lib => {
        const libKey = lib.id.replace(/-/g, '_');
        const vKey = lib.id.replace(/-/g, '_');
        if (lib.version) {
          toml += `${libKey} = { group = "${lib.group}", name = "${lib.artifact}", version.ref = "${vKey}" }\n`;
        } else {
          toml += `${libKey} = { group = "${lib.group}", name = "${lib.artifact}" }\n`;
        }
      });
    }

    if (selectedPlugins.length > 0) {
      toml += '\n[plugins]\n';
      selectedPlugins.forEach(p => {
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
          <label className="kmp-toggle">
            <input 
              type="checkbox" 
              checked={onlyKmp} 
              onChange={(e) => setOnlyKmp(e.target.checked)} 
            />
            <span>Show KMP only</span>
          </label>
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
                      {lib.kmpPlatforms && (
                        <span className="kmp-badge">KMP</span>
                      )}
                    </div>
                    <span className="library-desc">{lib.description}</span>
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
                    </div>
                    <span className="library-desc">{plugin.description}</span>
                  </div>
                </label>
              ))}
            </div>
          ))}
        </div>

        <div className="sidebar-footer">
          <a 
            href="https://github.com/bwever/tomlify/issues/new?title=Library+Request"
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
          grid-template-columns: 380px 1fr;
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
        }
        .filter-controls {
          margin-bottom: 1.5rem;
        }
        .search-input {
          width: 100%;
          padding: 0.75rem;
          margin-bottom: 0.75rem;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-size: 1rem;
        }
        .kmp-toggle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          cursor: pointer;
          color: #495057;
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
          gap: 0.25rem;
          flex-grow: 1;
        }
        .library-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.5rem;
        }
        .library-name {
          font-weight: 600;
          font-size: 0.95rem;
        }
        .kmp-badge {
          background: #3ddc84;
          color: #073042;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 1px 4px;
          border-radius: 3px;
        }
        .library-desc {
          font-size: 0.8rem;
          color: #6c757d;
          line-height: 1.3;
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
          max-height: 85vh;
        }
        .preview-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
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
          overflow-x: auto;
          flex-grow: 1;
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
          }
        }
      `}</style>
    </div>
  );
};

export default TomlifyGenerator;
