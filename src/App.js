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
    label: "Initial label from state",
    togglePerson: true
  };

  switchPersonAndLabel = newLabel => {
    console.log("Was clicked");
    //this.state.persons[1].name = "Alexander";
    this.setState({
      persons: [
        { name: "Greg", age: 34 },
        { name: "Amelia", age: 23 },
        { name: "Kristine", age: 21 }
      ],
      label: newLabel
    });
  };
  labelChangerHandler = event => {
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
        <Person name="New Greg" age="38" changed={this.labelChangerHandler}>
          {this.state.label}
        </Person>
      );
    }

    let persons = null;
    if (this.state.togglePerson) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person name={person.name} age={person.age} />;
          })}
        </div>
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
            onClick={this.switchPersonAndLabel.bind(
              this,
              "New label more fancy from button"
            )}
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
          <Person
            name="Alex"
            age="32"
            click={() =>
              this.switchPersonAndLabel(
                "Different way - not with binding from person!"
              )
            }
          >
            I like swimming
          </Person>
        ) : null}
        {/*end of if with question mark */}

        {/* if if different style */}
        {newPerson}
        {persons}
      </div>
    );
    //below it shows how to return directly with html elements
    // return React.createElement('div', {
    //   className: 'App'
    // }, React.createElement('h1', null, 'Hello from React another way - equivalent'));
  }
}

export default App;
