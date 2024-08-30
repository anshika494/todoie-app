import React from "react";

import Header from "./components/header";
import ToDoItem from "./components/toDoItem";
import Button from "./components/button";
import './App.css'

const App = () => {
  return(
    <div className="todo-container">
      <Header />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <Button />
    </div>
  );
}

export default App;
