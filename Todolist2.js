import React from "react";

function Todolist2(props) {
  return (
    <>
      <div className="todo_style">
        <button className="Deleteme" onClick={() => props.onselect(props.id)}>
          Delete
        </button>
        <li>{props.text}</li>
      </div>
    </>
  );
}

export default Todolist2;
