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
    togglePerson: true
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
  togglePerson = () => {
    this.setState({
      togglePerson: !this.state.togglePerson
    });
  };

  //main method - important method
  render() {
    /*two way of styling 
      - one className = "file" 
      -second below inline style - remember style in js way - means no "-" but camel
    */
    const style = {
      backgroundColor: "white",
      border: "1px solid gray",
      padding: "5px 20px",
      borderRadius: "10px",
      cursor: "pointer"
    };
    const bstyle = {
      backgroundColor: "green",
      border: "1px solid green",
      padding: "5px 20px",
      borderRadius: "5px",
      cursor: "pointer"
    };
    const dstyle = {
      margin: "10px 0px"
    };

    let newPerson = null;

    if (this.state.togglePerson) {
      newPerson = (
        <Person name="New Greg" age="38">
          I like football!
        </Person>
      );
    }

    return (
      <div className="App">
        <h1> Hello from react blueprint app</h1>
        <p>Remember one root element per component</p>
        <p>class word is restricted in typescript so className is used</p>
        <div style={dstyle}>
          <button
            style={style}
            onClick={this.switchNamehendler.bind(this, "New label more fancy")}
          >
            Switch the name
          </button>
        </div>
        <div style={dstyle}>
          <button style={bstyle} onClick={this.togglePerson.bind(this)}>
            Show/Hide person
          </button>
        </div>
        {/* if statement with question mark and :*/}
        {this.state.togglePerson ? (
          <Person name="Alex" age="32">
            I like swimming
          </Person>
        ) : null}
        {/*end of if with question mark */}

        {/* if if different style */}
        {newPerson}

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
    //below it shows how to return directly with html elements
    // return React.createElement('div', {
    //   className: 'App'
    // }, React.createElement('h1', null, 'Hello from React another way - equivalent'));
  }
}

export default App;
