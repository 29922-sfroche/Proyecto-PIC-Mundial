const StickerCard = ({ sticker, obtained }) => {
  return (
    <div className={`sticker-card ${obtained ? 'sticker-obtained' : 'sticker-empty'}`}>
      <div className="sticker-preview">
        <img src={sticker.image} alt={sticker.player} />
      </div>
      <div className="sticker-meta">
        <span className="sticker-country">{sticker.country}</span>
        <strong>{sticker.player}</strong>
      </div>
    </div>
  )
}

export default StickerCard
