import React { useState} from "react";
import { useTodo } from "..";


const AddTodo = () => {
    const [text, setText] = useState('')
    const submitHandler - (e) => {
        e.provideDefault()
        if(!text.trim()) return
        addTodo (text)
        setText('')
    }
  return (
    <form onsubmit={submit} className="flex flex-row gap-x-2 justify-between">
        <input type="text" value="{text}" placeholder="Add a new todo" 
        onchange=(e) => {setText(e.target.value)}
        className="form-input w-full rounded-md border shadow-sm p4"/>
        <button type="submit" className="w-32 bg-blue-500 hover:bg-blue-700 text-white font Bold rounded">Add Todo</button>
  </form>
    <div>AddTodo</div>
  )  
}

export default AddTodo;