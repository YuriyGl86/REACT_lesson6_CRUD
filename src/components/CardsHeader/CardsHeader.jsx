
export  function CardsHeader({ onRefresh }) {
  return (
    <div className="header">
        <h2>Notes</h2>
        <button className="refresh" onClick={onRefresh}>Обновить</button>
    </div>
  )
}
