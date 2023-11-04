import { Card } from "../Card"

export  function CardsList({ list, onDel }) {
  return (
    <>
        {list.map(card => (
            <Card card={card} onDel={onDel} key={card.id}/>
        ))}
    </>
  )
}
