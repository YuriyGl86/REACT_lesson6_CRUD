

export  function Card({ card, onDel }) {

    const handleDel =({target}) => {
        onDel(target.id)
    }

    return (
        <div className="card">
            <p>{card.content}</p>
            <div className="del" id={card.id} onClick={handleDel}>X</div>
        </div>
    )
}
