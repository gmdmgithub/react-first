import React from "react";

const person = props => {
  return (
    <div>
      <p>
        Hi my name is {props.name} I like {Math.floor(Math.random() * 100)}{" "}
        number, I'm {props.age}
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
