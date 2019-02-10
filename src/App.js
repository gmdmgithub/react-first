import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium from "radium";
class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Greg", age: 34 },
      { id: 2, name: "Adam", age: 23 },
      { id: 3, name: "Daniel", age: 40 }
    ],
    label: "Initial label from state",
    togglePerson: true
  };

  switchPersonAndLabel = newLabel => {
    console.log("Was clicked");
    //this.state.persons[1].name = "Alexander";
    this.setState({
      persons: [
        { id: 1, name: "Greg", age: 34 },
        { id: 2, name: "Amelia", age: 23 },
        { id: 3, name: "Kristine", age: 21 }
      ],
      label: newLabel
    });
  };
  labelChangerHandler = event => {
    this.setState({
      label: "New label from event " + event.target.value
    });
  };
  nameChangerHendler = (event, id) => {
    //console.log(event, id);
    const persons = [...this.state.persons];
    persons.map(person => {
      if (person.id === id) {
        person.name = event.target.value;
      }
      return person;
    });
    this.setState({
      persons: persons
    });
  };

  nameChangerIndexHendler = (event, id) => {
    //console.log(event, id);
    const personIndex = this.state.persons.findIndex(
      person => person.id === id
    );

    //standard way to copy object by value
    //const person = Object.assign({},this,state.persons[personIndex])
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  togglePerson = () => {
    this.setState({
      togglePerson: !this.state.togglePerson
    });
  };
  deletePersonHendler = index => {
    console.log("delete person", index);
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({
      persons: persons
    });
  };

  //main method - important method
  render() {
    /*two way of styling 
      - one className = "file" 
      -second below inline style - remember style in js way - means no "-" but camel
      Radium is used for hover(sudo classes)
    */
    const style = {
      backgroundColor: "blue",
      color: "white",
      border: "1px solid gray",
      padding: "5px 20px",
      borderRadius: "10px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "yellow",
        color: "black"
      }
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
    //more elegant if statement
    if (this.state.togglePerson) {
      newPerson = (
        <Person name="New Greg" age="38" changed={this.labelChangerHandler}>
          {this.state.label}
        </Person>
      );
    }

    let persons = null;
    let paragraphStyle = null;
    let styles = ["bold", "color-green"].join(" ");
    if (this.state.togglePerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                delete={this.deletePersonHendler.bind(this, index)}
                key={person.id}
                change={event => {
                  this.nameChangerIndexHendler(event, person.id);
                }}
              />
            );
          })}
        </div>
      );
      bstyle.backgroundColor = "red";
      if (this.state.persons.length > 2) {
        paragraphStyle = "papp";
        style[":hover"] = {
          backgroundColor: "brown",
          color: "white"
        };
      }
    }

    return (
      <div className="App">
        <h1> Hello from react blueprint app</h1>
        <p className={paragraphStyle}>
          Remember one root element per component
        </p>
        <p className={styles}>
          class word is restricted in typescript so className is used
        </p>
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
            {/*what is placed here is 
            passed as props.children*/}I
            like swimming?
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

export default Radium(App);
