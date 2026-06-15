import { useState } from 'react'

const Navbar = ({ currentPage, onNavigate, onLogout, username }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="navbar-logo">⚽</span>
          <span className="navbar-title">Álbum Mundial 2026</span>
        </div>

        <button 
          className="navbar-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          ☰
        </button>

        <div className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
          <button 
            className={`navbar-link ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => { onNavigate('home'); setMenuOpen(false); }}
          >
            Inicio
          </button>
          <button 
            className={`navbar-link ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => { onNavigate('about'); setMenuOpen(false); }}
          >
            Acerca de
          </button>
          <div className="navbar-user">
            <span className="navbar-username">👤 {username}</span>
            <button className="navbar-logout" onClick={onLogout}>
              Salir
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar