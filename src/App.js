import './App.css';
import Header from './Components/Header.js'
import { Todos } from "./Components/Todos"
import Footer from './Components/Footer'
import AddToList from './Components/AddToList';
import About from './Components/About';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  var listFromLocalStorage;
  if (localStorage.getItem("todolist") == null) {
    listFromLocalStorage = [];
  }
  else {
    listFromLocalStorage = JSON.parse(localStorage.getItem("todolist"));
  }

  const [itemList, setList] = useState(listFromLocalStorage);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const deleteFunc = (item) => {
    setList(itemList =>
      itemList.filter(obj => {
        return obj !== item;
      }),
    );
  }
  function updateFunc(item) {
    setTitle(item.title);
    setDescription(item.description);
    deleteFunc(item);
  }
  function addFunc() {
    if (title !== "" && description !== "") {
      var item;
      if (itemList.length === 0) {
        item = {
          Sno: 0,
          title: title,
          description: description
        }
      }
      else {
        item = {
          Sno: itemList[itemList.length - 1].Sno + 1,
          title: title,
          description: description
        }
      }
      setTitle("");
      setDescription("");
      setList((current) => [...current, item]);
    }
    else {
      alert("Title or Description cannot be empty");
    }
  }

  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(itemList));
  }, [itemList]);

  return (
    <div>
      <Router>

        <Header title="To Do List" />

        <Routes>

          <Route path='/' element={
              <>
                <AddToList addFunc={addFunc} title={title} setTitle={setTitle} description={description} setDescription={setDescription}></AddToList>
                <Todos list={itemList} Delete={deleteFunc} Update={updateFunc}></Todos>
              </>
          }/>
          <Route path="/about" element={<About/>}/>

        </Routes>

        <Footer></Footer>

      </Router>

    </div>
  );
}

export default App;
