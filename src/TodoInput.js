import React, { useState } from 'react'


function TodoInput(props) {

const [inputText,setInputText]=useState('');

const handleInput = (e) =>{
    setInputText(e.target.value);
    console.log(setInputText)
}
   


  return (
    <div className='input-container'>
        <input
          type='text'
          className="input-box-todo"
          placeholder='Enter your todo'
          value={inputText}
          onChange={handleInput}
        />
        <button className='add-btn' onClick={()=>{
          props.addList(inputText);
          setInputText("");
        }}>+</button>
        
  
    </div>
  )
}

export default TodoInput
