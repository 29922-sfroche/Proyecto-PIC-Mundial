import StickerCard from '../Sticker/StickerCard.jsx'

const PackOpener = ({ lastPack, isModalOpen, onClose }) => {
  if (!isModalOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={(event) => event.stopPropagation()}>
        <div className="modal-header">
          <div>
            <p className="eyebrow">Sobre abierto</p>
            <h2>5 cromos generados</h2>
          </div>
          <button type="button" className="modal-close" onClick={onClose}>
            Cerrar
          </button>
        </div>

        <div className="modal-grid">
          {lastPack.map((sticker) => (
            <div key={sticker.id} className="modal-card-item">
              <StickerCard sticker={sticker} obtained />
            </div>
          ))}
        </div>

        <p className="modal-tip">Si el cromo ya existe en el álbum, se sumará a repetidos automáticamente.</p>
      </div>
    </div>
  )
}

export default PackOpener
