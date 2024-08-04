import React, { useEffect, useState, useRef } from "react";

import { useParams } from "react-router-dom";
import "./Albumdetails.css";
import Header from "../../components/header/Header";

export default function Albumdetails() {
  const { title } = useParams();
  const [album, setAlbum] = useState(null);
  const [isPlaying, setIsPlaying] = useState({});
  const audioRefs = useRef([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundAlbum = data.albums.find((album) => album.title === title);
        if (foundAlbum) {
          setAlbum(foundAlbum);
        } else {
          const foundSingle = data.singles.find((single) => single.title === title);
          if (foundSingle) {
            setAlbum(foundSingle);
          }
        }
      })
      .catch((error) => console.error("Fetch error: ", error));
  }, [title]);

  if (!album) {
    return <div>Loading...</div>;
  }

  const togglePlayPause = (index) => {
    const currentAudio = audioRefs.current[index];
    if (currentAudio.paused) {
      currentAudio.play();
      setIsPlaying((prev) => ({ ...prev, [index]: true }));
    } else {
      currentAudio.pause();
      setIsPlaying((prev) => ({ ...prev, [index]: false }));
    }
  };

  return (
    <div className="albumdetails">
      <div className="detailspart1">
        <div className="dp1">
          <img src={album.image} alt={album.title} />
        </div>
        <div className="dp2">
          <h1>{album.title}</h1>
          <p>{album.production}</p>
          <p>{album.feats}</p>
          <p>{album.info}</p>
          <a href={album.link}>Découvrir ici</a>
        </div>
      </div>
      <div className="detailspart2">
        {album.songs &&
          album.songs.map((song, index) => (
            <div key={index} className="caca">
              <div className="dpl2">
                <h3>{song.title}</h3>
              </div>
              <div className="dpr2">
                <p>{song.duration}</p>
                <button onClick={() => togglePlayPause(index)} className="play-pause-btn">
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 6.741c0-1.544 1.674-2.505 3.008-1.728l9.015 5.26c1.323.771 1.323 2.683 0 3.455l-9.015 5.258C7.674 19.764 6 18.803 6 17.26V6.741zM17.015 12L8 6.741V17.26L17.015 12z"
                      fill="#0D0D0D"
                    />
                  </svg>
                </button>
                <audio ref={(el) => (audioRefs.current[index] = el)} src={song.music} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
