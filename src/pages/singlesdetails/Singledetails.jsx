import React from 'react'
import { useState, useEffect } from 'react'
import './Singledetails.css'



export default function Singledetails() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data.singles[0].songs)) // Accéder directement aux chansons des singles
      .catch((error) => console.error("Fetch error: ", error));
  }, []);

  return (
    <div className="singles-container">
      
      <div className="singles-list">
        {data.map((single, index) => (
          <div key={index} className="single-item">
            <img src={single.image} alt={single.title} className="cover" />
            <h2>{single.title}</h2>
            <p>{single.production}</p>
            <p>{single.info}</p>
            <audio controls>
              <source src={single.music} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <a href={single.link} target="_blank" rel="noopener noreferrer">Listen</a>
          </div>
        ))}
      </div>
    </div>
  );
}
