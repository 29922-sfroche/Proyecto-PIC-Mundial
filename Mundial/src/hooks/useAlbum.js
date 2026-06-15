import { useContext } from 'react'
import AlbumContext from '../context/AlbumContext.jsx'

const useAlbum = () => {
  const context = useContext(AlbumContext)
  if (!context) {
    throw new Error('useAlbum must be used within an AlbumProvider')
  }
  return context
}

export default useAlbum
