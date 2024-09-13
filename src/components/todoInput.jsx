import React, { useState } from "react";
function TodoInput(props) {
  const { handleAddTodos ,todoValue , setTodoValue , handleResetTodos } = props;
  
  return (
    <div className="flex justify-center m-4">
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        className="w-full font-protest h-full box-border rounded-xl text-[20px] text-white border-red-800 bg-slate-700 p-4"
        type="text"
        placeholder="Enter Task Here..."
      />
      <button
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue('');
        }}
        className="font-protest w-auto rounded-lg bg-gray-600 text-white p-4 mx-2"
      >
        Add
      </button>

      <button onClick={()=>{
        handleResetTodos();
      }} className="font-protest w-auto rounded-lg bg-gray-600 text-white p-4 mx-2">Reset</button>
    </div>
  );
}

export default TodoInput;
