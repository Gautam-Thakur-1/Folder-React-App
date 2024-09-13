import { useState, useEffect } from "react";
import "./App.css";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";
import FirstBody from "./components/FirstBody";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newlist) {
    localStorage.setItem("todos", JSON.stringify({ todos: newlist }));
  }

  function handleResetTodos() {
    const newTodos = [];
    persistData(newTodos); 
    setTodos(newTodos);
  }

  function handleAddTodos(newTodo) {
    if(newTodo ==="" )return
    const newTodos = [...todos, newTodo];
    persistData(newTodos);
    setTodos(newTodos);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return index !== todoIndex;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }
  function handleEditTodo(index) {
    const valueEdited = todos[index];

    setTodoValue(valueEdited);
    handleDeleteTodo(index);
  }
  useEffect(() => {
    if (!localStorage) return;
    let localTodos = localStorage.getItem("todos");
    if (!localTodos) return;
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);
  return (
    <>
      <TodoInput
        todoValue={todoValue}
        handleResetTodos={handleResetTodos}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      {todos.length > 0? (
        <TodoList
          handleEditTodo={handleEditTodo}
          handleDeleteTodo={handleDeleteTodo}
          todos={todos}
        />
      ) : (
        <FirstBody />
      )}
    </>
  );
}

export default App;
