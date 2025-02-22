import { useDispatch } from 'react-redux'
import '../css/ToDoCreate.css'
import { useState } from 'react'
// import { TypeToDo } from '../types/type'
function ToDoCreate() {
  const [newToDo,setToDo]=useState<string>('')
  const dispatch=useDispatch()
  const handleToDoCreate=()=>{
   if(newToDo.trim().length===0){
alert('Enter ToDo!')
   }
  }
  return (
    <div>
        <input value={newToDo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setToDo(e.target.value)}} placeholder='Enter ToDo ...' type="text" />
        <button onClick={handleToDoCreate}>Add</button>
    </div>
  )
}

export default ToDoCreate