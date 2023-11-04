import './App.css';
import { CardsList } from './components/CardsList';
import { useEffect, useState } from 'react';
import { AddCardForm } from './components/AddCardForm';
import { CardsHeader } from './components/CardsHeader';

// const cardsList = [{id:1, content: 'fwefwef wfwefwefwef wfewfew efef efefwfwe wefewfewf wfewfe wfwefewf wfwefewf wfwef'}]

function App() {
  const [cardsList, setCardsList] = useState([])

  const getCards = ()=>{
    fetch(process.env.REACT_APP_NOTE_URL)
    .then(res=>res.json())
    .then(data=>{
      setCardsList(data)
    })
  }


  const onDel = (id)=> {
    fetch(process.env.REACT_APP_NOTE_URL + '/' + id, {
      method:'DELETE',
    })
    .then(response => {				
        if (response.status === 204){ 
          getCards()
        }     				
    })	
  }


  useEffect(()=>{
    getCards()
  },[])


  const addCard = (card)=> {
    fetch(process.env.REACT_APP_NOTE_URL, {
      method:'POST',
      body:JSON.stringify(card),
      'Content-Type': 'application/json', 
    })
    .then(response => {				
        if (response.status === 204){ 
          getCards()
        }     				
    })				
      
    

  }



  return (
    <>
      <CardsHeader onRefresh={getCards}/>
      <div className="cards-container">
        <CardsList list={cardsList} onDel={onDel}/>
      </div>
        <AddCardForm addCard={addCard}/>
    </>
  );
}

export default App;
