
import { useState } from 'react';
import './App.css';


function App() {

 const [inputText,setInputText]=useState('');

 const[inputItem , setInputItem]=useState([]);

 const handleInput =(e)=>{
  setInputText(e.target.value); //user jo bhi likhega wo setinput pe update ho jayega
 };

const addItem =() =>{
  setInputItem((olditem)=>{
    return [...olditem , inputText];
  })
  setInputText('');
}

  return (
    <div className="App">
      <h1>TODO List</h1>
      <input 
      type='text'
       placeholder='Enter your text'
       onChange={handleInput}
       value={inputText}

       />
      <button onClick={addItem}>+</button>
      <div>

       { inputItem.map((item) =>{
          return {item}
        })}
      </div>
    </div>
  );
}

export default App;
