import React from "react";
import "./Person.css";
import Radium from "radium";

const person = props => {
  //using Radium for @media query
  const style = {
    "@media (min-width: 450px)": {
      color: "blue"
    }
  };

  return (
    <div className="Person">
      <p onClick={props.click} style={style}>
        Hi my name is {props.name} I like {Math.floor(Math.random() * 100)}{" "}
        number, I'm {props.age}
      </p>
      {props.delete ? <p onClick={props.delete}>I delete this person</p> : null}
      {/*props.children is a special keyword reserved*/}
      <p> {props.children} </p>
      <input type="text" onChange={props.changed} value={props.label} />
      <br />
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  );
};

export default Radium(person);
