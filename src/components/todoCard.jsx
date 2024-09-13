import React from "react";

function TodoCard(props) {
  const { children, handleDeleteTodo ,index ,handleEditTodo}  = props;
  return (
    <li className="m-6  flex justify-between p-6 rounded-xl  text-white font-bold text-lg bg-slate-600">
      {children}
      <div className="">
        <button onClick={()=>{
            handleEditTodo(index)
        }}>
          <i class="fa-solid fa-pen-to-square mx-2"></i>
        </button>
        <button onClick={()=>{
            handleDeleteTodo(index)
        }}>
          <i class="fa-solid fa-trash-can mx-2"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoCard;
