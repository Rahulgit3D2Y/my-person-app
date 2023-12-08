import React from 'react'
 import './Card.css';
const Card = ({ id,img, name, age, occupation }) => {
    return (
      <div className="card">
        <div className="heading">
            <h2>{name}</h2>
            <img src={img} alt="" />
        </div>
        
        <p>ID: {id}</p>
        <p>Age: {age}</p>
        <p>Occupation: {occupation}</p>
      </div>
    );
  };

export default Card