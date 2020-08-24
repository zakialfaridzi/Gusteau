import React from "react";
import logo from "../../logo.svg";
import "./App.css";
import Business from "./../Business/Business";
import BusinessList from "./../BusinessList/BusinessList";
import SearchBar from "./../SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <h1>Gusteau</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
