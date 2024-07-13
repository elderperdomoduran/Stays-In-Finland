import { useEffect, useState } from "react";
import "./index.css";

export default function App() {
  const [stays, setStays] = useState([]);

  const getData = async () => {
    const rs = await fetch("/stays.json");
    const jsonRs = await rs.json();
    setStays(jsonRs);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h1>Stays in Finland</h1>
      <ul className="main-box">
        {stays &&
          stays.map((stay, index) => (
            <li key={index} className="li">
              <img src={stay.photo} alt={stay.title} className="stay-image" />
              <div className="stay-info">
                {stay.superHost && <button className="button">SuperHost</button>}
                <p>{stay.type}</p>
                <p>{stay.rating}</p>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
