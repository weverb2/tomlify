import React, { useState, useMemo } from 'react';
import { LIBRARIES, type Library } from '../data/libraries';

const TomlifyGenerator: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [search, setSearch] = useState('');

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
    return LIBRARIES.filter(lib => 
      lib.name.toLowerCase().includes(search.toLowerCase()) ||
      lib.description.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const generateToml = () => {
    const selected = LIBRARIES.filter(lib => selectedIds.has(lib.id));
    if (selected.length === 0) return '# Select dependencies to generate libs.versions.toml';

    let toml = '[versions]\n';
    const versions = new Map<string, string>();
    
    selected.forEach(lib => {
      if (lib.version) {
        const vKey = lib.id.replace(/-/g, '_');
        versions.set(vKey, lib.version);
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
        // Special case for Compose BOM managed ones
        toml += `${libKey} = { group = "${lib.group}", name = "${lib.artifact}" }\n`;
      }
    });

    return toml;
  };

  const categories = Array.from(new Set(LIBRARIES.map(l => l.category)));

  return (
    <div className="generator-container">
      <div className="sidebar">
        <input 
          type="text" 
          placeholder="Search dependencies..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        
        {categories.map(category => {
          const catLibs = filteredLibraries.filter(l => l.category === category);
          if (catLibs.length === 0) return null;
          
          return (
            <div key={category} className="category-section">
              <h3>{category}</h3>
              {catLibs.map(lib => (
                <label key={lib.id} className="library-item">
                  <input 
                    type="checkbox" 
                    checked={selectedIds.has(lib.id)}
                    onChange={() => toggleLibrary(lib.id)}
                  />
                  <div className="library-info">
                    <span className="library-name">{lib.name}</span>
                    <span className="library-desc">{lib.description}</span>
                  </div>
                </label>
              ))}
            </div>
          );
        })}
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
          grid-template-columns: 350px 1fr;
          gap: 2rem;
          min-height: 80vh;
          padding: 1rem;
        }
        .sidebar {
          background: #f8f9fa;
          padding: 1.5rem;
          border-radius: 8px;
          border: 1px solid #dee2e6;
          overflow-y: auto;
        }
        .search-input {
          width: 100%;
          padding: 0.75rem;
          margin-bottom: 1.5rem;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-size: 1rem;
        }
        .category-section h3 {
          margin: 1.5rem 0 1rem;
          font-size: 0.9rem;
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
        }
        .library-item:hover {
          background: #e9ecef;
        }
        .library-info {
          display: flex;
          flex-direction: column;
        }
        .library-name {
          font-weight: 600;
          font-size: 0.95rem;
        }
        .library-desc {
          font-size: 0.8rem;
          color: #6c757d;
        }
        .preview-panel {
          background: #212529;
          color: #f8f9fa;
          padding: 1.5rem;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
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
        }
      `}</style>
    </div>
  );
};

export default TomlifyGenerator;
