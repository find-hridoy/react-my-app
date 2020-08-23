import React, { useState, useLayoutEffect, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const studentDetails = [
    { name: "Hasan", roll: 235, department: "Computer" },
    { name: "Shovo", roll: 654, department: "Computer" },
    { name: "Shanto", roll: 324, department: "Computer" },
    { name: "Bappi", roll: 544, department: "Computer" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload. Okay done!</p>
        <p>Start new concepts</p>
        <div>
          {
            // studentDetails.map(studnt => <Student student={studnt}></Student>)
          }
        </div>

        <ToDos></ToDos>

      </header>
    </div>
  );
}

function Student(props) {
  // console.log(props.student);
  const { name, roll, department } = props.student;
  const studentArea = {
    backgroundColor: "gray",
    margin: "10px",
    border: "1px solid black",
    padding: "10px 30px",
    width: " 450px",
  }
  return (
    <div style={studentArea}>
      <h2>Name : {name}</h2>
      <p>Roll : {roll}</p>
      <p>Department : {department}</p>
    </div>
  );
}

// //////////////////////////////////////////////////
function ToDos() {
  const [toDos, setToDos] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => {
        setToDos(data);
        // console.log(data);
        // console.log(toDos.length);

      });
  }, []);
  const listStyle = {
    fontSize: "20px",
    margin: "20px 0",
    textAlign: "left",
    textTransform: "capitalize",
    color: "royalblue"

  }
  return (
    <div>
      <h3>Let's do it : {toDos.length}</h3>
      <ol>
        {
          toDos.map(toDo => <li style={listStyle}>{toDo.title}</li>)
        }
      </ol>
    </div>
  );
}
// //////////////////////////////////////////////////

export default App;