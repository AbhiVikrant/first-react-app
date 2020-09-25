import React, { Component } from "react";
import "../styles/app.css";
import Hello from "./Hello";
export default class App extends Component {
  render() {
    const stud = ["Abhishek", "Santosh", "Ganesh", "Ruchi", "Shewta", "Shyam"];
    return (
      <div className="app">
        {stud.map((name, key) => (
          <Hello name={name} key={key} />
        ))}
      </div>
    );
  }
}
