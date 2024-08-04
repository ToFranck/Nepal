import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('/data.json') 
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(data => setData(data))
  //     .catch(error => console.error('Fetch error: ', error));
  // }, []);

  return (
    <div className="App">
      {/* {data.albums && data.albums.map((album, index) => (
        <div key={index}>
          <h2>{album.title}</h2>
          <p>{album.production}</p>
          <p>{album.feats}</p>
          <p>{album.info}</p> 
        {album.songs && album.songs.map((song, index) => (
          <div key={index}>
            <h3>{song.title}</h3>
            <p>{song.duration}</p>
            <audio controls>
              <source src={song.music} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}

        </div>
      ))} */}
      
      
    </div>
  );
}

export default App;
