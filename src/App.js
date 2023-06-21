import React, {useState} from 'react';
import TodoList from './TodoList';

const App=()=>{

  const [inputList,setInputList]=useState("");
  const [items,addItems]=useState([]);

  const InputEvent=(event)=>{
    setInputList(event.target.value);
  };

  const AddEvent=()=>{
    if(inputList ==null || inputList =="")return;
    addItems((prevValue)=>{
      return [...prevValue,inputList];
    });
    setInputList("");
  };

  const deleteItems=(id)=>{
    console.log("Deleted");

    addItems((prevValue)=>{
      return prevValue.filter((arrElem,index)=>{
        return index!==id;
      })
    })
  };

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br/>
          <h1>ToDo List</h1>
          <br/>
          <input type='text' placeholder='Add items' value={inputList} onChange={InputEvent}/>
          <button onClick={AddEvent}>+</button>
          <ol>
            {/* <li>{items}</li> */}
            {items.map((itemAdd,index)=>{
              return <TodoList key={index} id={index} text={itemAdd} onClick={deleteItems}/>
            })}
          </ol>
        </div>
      </div>
    </>
  )
};

export default App
