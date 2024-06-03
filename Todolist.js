import React, { useState } from "react";
import Todolist2 from "./Todolist2";
import "./Todolist.css";
// import AddCircleIcon from "@mui/icons-material/AddCircle";

function Todolist() {
  const [fruits, setfruits] = useState("");

  const [fullvalue, setfullvalue] = useState([]);
  function itemsevent(event) {
    const value = event.target.value;
    setfruits(value);
  }

  function handledata(e) {
    e.preventDefault();

    const value = e.target.value;

    const name = e.target.name;

    // const arr1 = [...fullvalue, fruits];

    setfullvalue((olditem) => {
      return [...fullvalue, fruits];
    });

    setfruits("");
  }

  // For delete an item

  function deleteitem(id) {
    console.log("Deleted");
    setfullvalue((olditem) => {
      return fullvalue.filter((newarr, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="maindiv">
      <div className="centerdiv">
        <h1
          style={{
            backgroundColor: "#77777E",
            marginTop: "10px",
            color: "white",
          }}
        >
          ToDo List
        </h1>
        <br />
        <input
          type="text"
          placeholder="Add a Items"
          className="Additem"
          onChange={itemsevent}
          value={fruits}
        />

        <button className="btns" onClick={handledata} name="fruits">
          {/* <AddCircleIcon /> */}
        </button>

        <ol>
          {/* <li>{fullvalue}</li> */}

          {fullvalue.map((itemvalue, index) => {
            return (
              <>
                <Todolist2
                  key={index}
                  id={index}
                  text={itemvalue}
                  onselect={deleteitem}
                />
              </>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Todolist;
