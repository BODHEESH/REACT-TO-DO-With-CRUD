import React, { useState,useEffect,useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value:'');
  const inputref=useRef(null)
  useEffect(()=>{
    inputref.current.focus()
  })
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
        id:Math.floor(Math.random()*10000),
        text:input
    })
    setInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit} autoComplete="off">
      {props.edit?(<>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Update Task"
        value={input}
        name="text"
        className="todo-input edit"
        ref={inputref}
      />
      <button className="todo-button edit">Update</button>
      </>
      ):<>
      (<input
        onChange={handleChange}
        type="text"
        placeholder="Add a Task"
        value={input}
        name="text"
        className="todo-input"
        ref={inputref}
      />
      <button className="todo-button">Add</button>)
      </>}
      
    </form>
  );
}

export default TodoForm;
