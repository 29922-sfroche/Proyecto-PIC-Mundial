const RepeatedList = ({ repeated }) => {
  const repeatedItems = Object.values(repeated)

  if (repeatedItems.length === 0) {
    return (
      <section className="repeated-section">
        <h2>Cromos Repetidos</h2>
        <p className="empty-state">Aún no tienes repetidos. Abre un sobre para comenzar a juntar extras.</p>
      </section>
    )
  }

  return (
    <section className="repeated-section">
      <div className="section-header">
        <div>
          <p className="eyebrow">Cromos Repetidos</p>
          <h2>Guardados y listos para intercambio</h2>
        </div>
      </div>
      <div className="repeated-grid">
        {repeatedItems.map((item) => (
          <article className="repeat-card" key={item.sticker.id}>
            <img src={item.sticker.image} alt={item.sticker.player} />
            <div>
              <strong>{item.sticker.player}</strong>
              <p>{item.sticker.country}</p>
            </div>
            <span className="repeat-count">x{item.count}</span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default RepeatedList
