import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { name: "Greg", age: 34 },
      { name: "Adam", age: 23 },
      { name: "Daniel", age: 40 }
    ],
    label: "some label",
    toggle: false
  };

  switchNamehendler = newLabel => {
    console.log("Was clicked");
    //this.state.persons[1].name = "Alexander";
    this.setState({
      persons: [{ name: "Greg", age: 34 }, { name: "Amelia", age: 23 }],
      label: newLabel
    });
  };
  nameChangerHandler = event => {
    this.setState({
      label: "New label from event " + event.target.value
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      border: "1px solid gray",
      padding: "5px 20px",
      borderRadius: "10px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1> Hello from react blueprint app</h1>
        <p>Remember one root element per component</p>
        <p>class word is restricted in typescript so className is used</p>
        <button
          style={style}
          onClick={this.switchNamehendler.bind(this, "New label more fancy")}
        >
          Switch the name
        </button>

        <Person name="Alex" age="32">
          I like swimming
        </Person>
        <Person name="Helen" age="29" />
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() =>
            this.switchNamehendler("Different way - not with binding!")
          }
          changed={this.nameChangerHandler}
          label={this.state.labelgit}
        >
          {this.state.label}
        </Person>
      </div>
    );

    // return React.createElement('div', {
    //   className: 'App'
    // }, React.createElement('h1', null, 'Hello from React another way - equivalent'));
  }
}

export default App;
