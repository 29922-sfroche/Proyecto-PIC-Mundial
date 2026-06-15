import { createContext, useEffect, useReducer } from 'react'
import stickersData from '../data/stickers.js'
import { generatePack } from '../services/stickerGenerator.js'

const STORAGE_KEY = 'album-mundial-2026'

const initialState = {
  collected: {},
  repeated: {},
  progress: 0,
  lastPack: [],
  isModalOpen: false,
}

const albumReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD':
      return {
        ...state,
        ...action.payload,
        isModalOpen: false,
        lastPack: [],
      }
    case 'OPEN_PACK': {
      const collected = { ...state.collected }
      const repeated = { ...state.repeated }
      let progress = state.progress

      action.pack.forEach((sticker) => {
        if (collected[sticker.id]) {
          const existing = repeated[sticker.id]
          repeated[sticker.id] = {
            sticker,
            count: existing ? existing.count + 1 : 1,
          }
        } else {
          collected[sticker.id] = sticker
          progress += 1
        }
      })

      return {
        ...state,
        collected,
        repeated,
        progress,
        lastPack: action.pack,
        isModalOpen: true,
      }
    }
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModalOpen: false,
      }
    default:
      return state
  }
}

const AlbumContext = createContext(null)

export const AlbumProvider = ({ children }) => {
  const [state, dispatch] = useReducer(albumReducer, initialState)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        dispatch({ type: 'LOAD', payload: parsed })
      }
    } catch (error) {
      console.warn('Error leyendo estado del álbum:', error)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        collected: state.collected,
        repeated: state.repeated,
        progress: state.progress,
      }),
    )
  }, [state.collected, state.repeated, state.progress])

  const openNewPack = () => {
    const pack = generatePack(stickersData, 5)
    dispatch({ type: 'OPEN_PACK', pack })
  }

  const closePack = () => dispatch({ type: 'CLOSE_MODAL' })

  return (
    <AlbumContext.Provider
      value={{
        ...state,
        totalStickers: stickersData.length,
        openNewPack,
        closePack,
      }}
    >
      {children}
    </AlbumContext.Provider>
  )
}

export default AlbumContext
