import countries from '../data/countries.js'
import stickers from '../data/stickers.js'
import useAlbum from '../hooks/useAlbum.js'
import AlbumSection from '../components/Album/AlbumSection.jsx'
import PackOpener from '../components/Pack/PackOpener.jsx'
import RepeatedList from '../components/Repeated/RepeatedList.jsx'
import '../styles/album.css'

const WorldCupAlbum = () => {
  const { collected, repeated, progress, totalStickers, openNewPack, closePack, lastPack, isModalOpen } = useAlbum()

  const sections = countries.map((country) => ({
    ...country,
    stickers: stickers.filter((sticker) => sticker.country === country.name),
  }))

  return (
    <main className="album-page">
      <section className="album-hero">
        <div>
          <p className="eyebrow">Álbum Mundialista 2026</p>
          <h1>Tu colección oficial de cromos</h1>
          <p className="subtitle">Abre sobres, completa países y acumula cromos repetidos en tu álbum.</p>
        </div>
        <div className="hero-card">
          <div className="progress-chip">Progreso global</div>
          <strong>{progress} / {totalStickers} cromos obtenidos</strong>
          <p>Guarda automáticamente en tu navegador para mantener el crédito al recargar.</p>
        </div>
      </section>

      <section className="pack-controls">
        <div>
          <h2>Sobre disponible</h2>
          <p>Genera 5 cromos aleatorios con cada apertura.</p>
        </div>
        <button className="open-pack-button" type="button" onClick={openNewPack}>
          Abrir Sobre
        </button>
      </section>

      <section className="album-grid">
        {sections.map((country) => (
          <AlbumSection
            key={country.name}
            country={country}
            collected={collected}
          />
        ))}
      </section>

      <RepeatedList repeated={repeated} />

      <PackOpener
        lastPack={lastPack}
        isModalOpen={isModalOpen}
        onClose={closePack}
      />
    </main>
  )
}

export default WorldCupAlbum
