import React, { useState, useEffect } from "react";
// import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "smooth arabian nights till brooklyn", id: 1 },
    { title: "we are the last resort of anna maria", id: 2 },
    { title: "bohemian major Tom killed the radio man", id: 3 }
  ]);
  const [age, setAge] = useState(20);
  const addSong = title => {
    setSongs([...songs, { title, id: 4 }]);
  };
  useEffect(() => {
    console.log("use effect ran", songs);
  }, [songs]);
  useEffect(() => {
    console.log("use effect ran", age);
  }, [age]);
  return (
    <div className="song-list">
      <ul>
        {songs.map((song, index) => {
          return <li key={index}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}> Add 1 to age {age}</button>
    </div>
  );
};

export default SongList;
