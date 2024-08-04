import React from "react";
import "./Albums.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Albums() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        console.log(data);
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error("Fetch error: ", error));
  }, []);
  return (
    <>
      <div className="albumscontainer">
        <div className="albums">
          {data.albums &&
            data.albums.map((album, index) => (
              <div key={index}>
                <Link to={`/${album.title}`}>
                  <img src={album.image} alt={album.title} className="cover" />
                </Link>
              </div>
            ))}
          {/* <div className="singles">
            {data.singles &&
              data.singles.map((single, index) => (
                <div key={index}>
                  <Link to={`/sigles`}>
                    <img
                      src={single.image}
                      alt={single.title}
                      className="cover"
                    />
                  </Link>
                </div>
              ))}
          </div> */}
        </div>
      </div>
    </>
  );
}
