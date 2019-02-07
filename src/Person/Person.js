import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        Hi my name is {props.name} I like {Math.floor(Math.random() * 100)}{" "}
        number, I'm {props.age}
      </p>
      {props.delete ? <p onClick={props.delete}>I delete this person</p> : null}
      {/*props.children is a special keyword reserved*/}
      <p> {props.children} </p>
      <input type="text" onChange={props.changed} value={props.label} />
    </div>
  );
};

export default person;
