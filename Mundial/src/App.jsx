import { AlbumProvider } from './context/AlbumContext.jsx'
import WorldCupAlbum from './pages/WorldCupAlbum.jsx'

function App() {
  return (
    <AlbumProvider>
      <WorldCupAlbum />
    </AlbumProvider>
  )
}

export default App
