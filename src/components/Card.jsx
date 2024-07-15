import React from 'react';
import './Card.css';

const Card = ({ stay }) => {
  return (
    <li className="li">
      <img src={stay.photo} alt={stay.title} className="stay-image" />
      <div className="stay-info">
        {stay.superHost && (
          <button className="button">SUPER HOST</button>
        )}
        <div className="details">
          <p>{stay.type} · {stay.beds} beds</p>
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
  );
};

export default Card;
