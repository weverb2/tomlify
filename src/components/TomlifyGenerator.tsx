import React, { useState, useMemo } from 'react';
import { LIBRARIES, type Library } from '../data/libraries';

const TomlifyGenerator: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState('');
  const [onlyKmp, setOnlyKmp] = useState(false);

  const toggleLibrary = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setSelectedIds(next);
  };

  const filteredLibraries = useMemo(() => {
    return LIBRARIES.filter(lib => {
      const matchesSearch = lib.name.toLowerCase().includes(search.toLowerCase()) ||
                          lib.description.toLowerCase().includes(search.toLowerCase());
      const matchesKmp = !onlyKmp || (lib.kmpPlatforms && lib.kmpPlatforms.length > 0);
      return matchesSearch && matchesKmp;
    });
  }, [search, onlyKmp]);

  const generateToml = () => {
    const selected = LIBRARIES.filter(lib => selectedIds.has(lib.id));
    if (selected.length === 0) return '# Select dependencies to generate libs.versions.toml';

    let toml = '[versions]\n';
    selected.forEach(lib => {
      if (lib.version) {
        const vKey = lib.id.replace(/-/g, '_');
        toml += `${vKey} = "${lib.version}"\n`;
      }
    });

    toml += '\n[libraries]\n';
    selected.forEach(lib => {
      const libKey = lib.id.replace(/-/g, '_');
      const vKey = lib.id.replace(/-/g, '_');
      
      if (lib.version) {
        toml += `${libKey} = { group = "${lib.group}", name = "${lib.artifact}", version.ref = "${vKey}" }\n`;
      } else {
        toml += `${libKey} = { group = "${lib.group}", name = "${lib.artifact}" }\n`;
      }
    });

    return toml;
  };

  const categories = Array.from(new Set(filteredLibraries.map(l => l.category)));

  return (
    <div className="generator-container">
      <div className="sidebar">
        <div className="filter-controls">
          <input 
            type="text" 
            placeholder="Search dependencies..." 
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
          {categories.map(category => (
            <div key={category} className="category-section">
              <h3>{category}</h3>
              {filteredLibraries.filter(l => l.category === category).map(lib => (
                <label key={lib.id} className="library-item">
                  <input 
                    type="checkbox" 
                    checked={selectedIds.has(lib.id)}
                    onChange={() => toggleLibrary(lib.id)}
                  />
                  <div className="library-info">
                    <div className="library-header">
                      <span className="library-name">{lib.name}</span>
                      {lib.kmpPlatforms && (
                        <span className="kmp-badge" title={lib.kmpPlatforms.join(', ')}>KMP</span>
                      )}
                    </div>
                    <span className="library-desc">{lib.description}</span>
                    {lib.kmpPlatforms && (
                      <div className="platform-tags">
                        {lib.kmpPlatforms.slice(0, 4).map(p => (
                          <span key={p} className="platform-tag">{p}</span>
                        ))}
                        {lib.kmpPlatforms.length > 4 && <span className="platform-tag">...</span>}
                      </div>
                    )}
                  </div>
                </label>
              ))}
            </div>
          ))}
        </div>

        <div className="sidebar-footer">
          <a 
            href="https://github.com/bwever/tomlify/issues/new?title=Library+Request&body=Please+add+this+library:%0A%0A- Name:%0A- Group:%0A- Artifact:%0A- Category:"
            target="_blank"
            rel="noopener noreferrer"
            className="request-link"
          >
            + Request a library
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
            Copy to Clipboard
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
        .category-section h3 {
          margin: 1.5rem 0 0.75rem;
          font-size: 0.85rem;
          text-transform: uppercase;
          color: #6c757d;
          letter-spacing: 0.05em;
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
        .platform-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: 4px;
        }
        .platform-tag {
          font-size: 0.65rem;
          background: #e9ecef;
          color: #495057;
          padding: 1px 6px;
          border-radius: 10px;
          border: 1px solid #dee2e6;
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
