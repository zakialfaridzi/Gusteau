import React from "react";
import "./App.css";
import Business from "./../Business/Business";
import BusinessList from "./../BusinessList/BusinessList";
import SearchBar from "./../SearchBar/SearchBar";

const business = {
  imageSrc:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

const businesses = [business, business, business, business, business, business];

class App extends React.Component {
  searchYelp(term, location, sortBy) {
    console.log(`you're searching for ${term}, ${location} and ${sortBy}`);
  }
  render() {
    return (
      <div className="App">
        <h1>Gusteau</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;
