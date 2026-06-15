import StickerCard from '../Sticker/StickerCard.jsx'

const AlbumSection = ({ country, collected }) => {
  const obtainedCount = country.stickers.filter((sticker) => collected[sticker.id]).length

  return (
    <article className="country-card">
      <div className="country-header">
        <div className="country-label">
          <span className="country-flag">{country.flag}</span>
          <div>
            <h3>{country.name}</h3>
            <p>{obtainedCount} / {country.stickers.length} cromos</p>
          </div>
        </div>
        <div className="country-progress">
          <span>{Math.round((obtainedCount / country.stickers.length) * 100)}%</span>
        </div>
      </div>

      <div className="stickers-grid">
        {country.stickers.map((sticker) => (
          <StickerCard
            key={sticker.id}
            sticker={sticker}
            obtained={Boolean(collected[sticker.id])}
          />
        ))}
      </div>
    </article>
  )
}

export default AlbumSection
