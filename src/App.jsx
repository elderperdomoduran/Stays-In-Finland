import { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  const [stays, setStays] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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

  const handleSearch = () => {
    const filtered = stays.filter((stay) =>
      stay.city.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStays(filtered);
  };

  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <img src="triangleLogo.png" alt="" />
          windbnb
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Helsinki, Finland"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>
            <img
              src="https://img.icons8.com/?size=100&id=59878&format=png&color=EB5757"
              alt="Search Icon"
              className="loop"
            />
          </button>
        </div>
      </div>
      <div className="header">
        <h1>Stays in Finland</h1>
        <p className="stays-count">{filteredStays.length} stays</p>
      </div>
      <ul className="main-box">
        {filteredStays &&
          filteredStays.map((stay, index) => (
            <li key={index} className="li">
              <img src={stay.photo} alt={stay.title} className="stay-image" />
              <div className="stay-info">
                {stay.superHost && (
                  <button className="button">SUPER HOST</button>
                )}
                <div className="details">
                  <p>
                    {stay.type} · {stay.beds} beds
                  </p>
                  <p className="rating">
                    <img
                      src="https://img.icons8.com/?size=100&id=AsxZvu7XNv6y&format=png&color=EB5757"
                      alt="Star Icon"
                      className="star"
                    />
                    {stay.rating}
                  </p>
                </div>
                <h3>{stay.title}</h3>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
