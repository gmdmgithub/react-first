import React from "react";
import "./Person.css";

const person = props => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        Hi my name is {props.name} I like {Math.floor(Math.random() * 100)}{" "}
        number, I'm {props.age}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.label} />
    </div>
  );
};

export default person;
