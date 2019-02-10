import React from "react";
import "./Person.css"; // Import regular stylesheet
import moduleS from "./Person.module.css"; // Import css modules stylesheet as styles
//import Radium from "radium";

const person = props => {
  //using Radium for @media query
  // const style = {
  //   "@media (min-width: 450px)": {
  //     color: "blue"
  //   }
  // };

  //example for throwing error - and hanling in nice manner
  const condition = Math.random();

  if(condition >0.97){ //small chances for error - just for testing
    throw new Error("Number is too big")
  }

  return (
    <div className="Person">
      <p className={moduleS.module_sample} onClick={props.click}>
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

export default person;
