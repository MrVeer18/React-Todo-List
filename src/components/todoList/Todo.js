import React, { useState,useEffect } from "react";
import "./style.css";

//get the localStorage data back
const getLocalData = ()=>{
  const lists = localStorage.getItem('myTodoList');
  if(lists){
    return JSON.parse(lists)
  }
 
  else{
    return [];
  }
}

const Todo = () => {
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState(getLocalData())
  const [isEditItem, setIsEditItem] = useState('');
  const [toggleBtn, setToggleBtn] = useState(false)


  // add the Items to Array
  const addItem = () => {
    if (!inputdata) {
      alert("plz fill the data");
    }
    else if(inputdata && toggleBtn){
      setItems(items.map((curItem)=>{
        if(curItem.id === isEditItem){
          return {...curItem, name:inputdata}
        }
        return curItem
      }))

      setInputData([])
      setIsEditItem(null)
      setToggleBtn(false)
  }
    else {
      const newItemData ={
        id:new Date().getTime().toString(),
        name:inputdata,
      }
      setItems([...items, newItemData]);
      setInputData('')
    }
  };


  // Edit Item and Update
  const editItem = (id)=>{
    const itemTodoEdited = items.find((curItem)=>{
      return curItem.id === id;
    })
    setInputData(itemTodoEdited.name);
    setIsEditItem(id)
    setToggleBtn(true)
  }

  // Delete Item from array
  const deleteItem = (id)=>{
    const updatedItem = items.filter((curItem)=>{
      return curItem.id !== id
    })
    setItems(updatedItem)
  }
 
  // Remove all Items 
  const removeAll = ()=>{
    setItems([])
  }
  //adding localStorage
  useEffect(()=>{
    localStorage.setItem("myTodoList",JSON.stringify(items))
  }, [items])

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/logo.png" alt="..." />
            <figcaption>Add Your List Here ✌️</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️ Add Item"
              className="fomr-control"
              value={inputdata}
              onChange={(event) => {
                setInputData(event.target.value);
              }}
            />{
              toggleBtn ? 
            <i className="fa fa-edit add-btn" onClick={addItem}></i>
              :
            <i className="fa fa-plus add-btn" onClick={addItem}></i>

            }
          </div>
          {/* show our Items */}

          <div className="showItems">
            {items.map((curItem) => {
              return (
                <div className="eachItem" key={curItem.id}>
                  <h3>{curItem.name}</h3>
                  <div className="todo-btn">
                    <i className="far fa-edit add-btn" onClick={()=> editItem(curItem.id)}></i>
                    <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(curItem.id)}></i>
                  </div>
                </div>
              );
            })}
          </div>

          {/* remove all button */}
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
