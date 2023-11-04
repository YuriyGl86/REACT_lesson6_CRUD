import { useState } from "react"


export  function AddCardForm({addCard}) {
  
    const [form, setForm] = useState({content:''})

    const handleChange=({target}) => {
        const {name, value} = target
        setForm(prev => ({...prev, [name]:value}))
    }


    const handleSubmit =(e) => {
        e.preventDefault()
        const data = new FormData(e.target);

        const value = Object.fromEntries(data.entries())
        addCard(value)
        setForm({content:''})
        
    }

  return (
    <div className="form-container">
        <form onSubmit={handleSubmit}>
            <textarea
                value={form.content} 
                name="content"
                id="text"
                cols="60"
                rows="5"
                onChange={handleChange}>            
            </textarea>
            <button>Add card</button>
        </form>
    </div>
  )
}
