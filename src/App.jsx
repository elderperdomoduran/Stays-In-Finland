import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import "./App.css";


export default function App() {
  const [stays, setStays] = useState([]);
  const [filteredStays, setFilteredStays] = useState([]);

  const getData = async () => {
    const rs = await fetch("/stays.json");
    const jsonRs = await rs.json();
    setStays(jsonRs);
    setFilteredStays(jsonRs);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = stays.filter(stay =>
      stay.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStays(filtered);
  };

  return (
    <div className="container">
      <Nav onSearch={handleSearch} />
      <div className="header">
        <h1>Stays in Finland</h1>
        <p className="stays-count">{filteredStays.length} stays</p>
      </div>
      <ul className="main-box">
        {filteredStays &&
          filteredStays.map((stay, index) => (
            <Card key={index} stay={stay} />
          ))}
      </ul>
    </div>
  );
}
