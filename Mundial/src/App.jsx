import { useState } from 'react'
import { AlbumProvider } from './context/AlbumContext.jsx'
import WorldCupAlbum from './pages/WorldCupAlbum.jsx'
import About from './pages/About.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Login from './components/Login/Login.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('')
  const [currentPage, setCurrentPage] = useState('home')

  const handleLogin = (user) => {
    setUsername(user)
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUsername('')
    setCurrentPage('home')
  }

  const handleNavigate = (page) => {
    setCurrentPage(page)
  }

  // Si no está logueado, mostrar login
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />
  }

  return (
    <AlbumProvider>
      <div className="app-container">
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onLogout={handleLogout}
          username={username}
        />
        
        {currentPage === 'home' && <WorldCupAlbum />}
        {currentPage === 'about' && <About />}
      </div>
    </AlbumProvider>
  )
}

export default App