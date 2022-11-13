import "./App.css";
import react, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Description from "./Description";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import Search from "./Search";
function App({ setRate, rateIt, search }) {
  const [movies, setMovies] = useState([
    {
      id: 1,
      main_img:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
      second_img:
        "https://cdn.vox-cdn.com/thumbor/TAzotU1RnNkUJ7RwFtu7Rn1Ntcw=/0x0:1688x2500/1200x0/filters:focal(0x0:1688x2500):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11614195/InfinityWar5aabd55fed5fa.jpg",
      title: "Avengers ENDGAME",
      duration: "3h 2m",
      date: "26/04/2019",
      rate: 5,
      trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
      genre: "Action,Super Hero,Adventure",
      description:
        "After half of all life is snapped away by Thanos, the Avengers are left scattered and divided. Now with a way to reverse the damage, the Avengers and their allies must assemble once more and learn to put differences aside in order to work together and set things right.",
    },
    {
      id: 2,
      main_img: "https://flxt.tmsimg.com/assets/p8028628_v_v8_aa.jpg",
      second_img:
        "https://m.media-amazon.com/images/M/MV5BMDY1MGE5YmEtNDlmNy00NTcyLTkzZGMtMzhhMTAwZTFjOGIzXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_.jpg",
      title: "Birdemic: Shock and Terror",
      duration: "1h 30m",
      date: "27/02/2010",
      rate: 1,
      trailer: "https://www.youtube.com/embed/jE5dJDgZ644",
      genre: "Horror,Action,Romance",
      description:
        "A horde of mutated birds descends upon the quiet town of Half Moon Bay, California. As the death toll rises, two citizens manage to fight back, but will they survive Birdemic? A horde of mutated birds descends upon the quiet town of Half Moon Bay, California.",
    },
    {
      id: 3,
      main_img:
        "http://static3.businessinsider.com/image/509977c969beddec46000011-658-960/the-hobbit.jpg",
      second_img:
        "https://m.media-amazon.com/images/M/MV5BMzU0NDY0NDEzNV5BMl5BanBnXkFtZTgwOTIxNDU1MDE@._V1_.jpg",
      title: "The Hobbit",
      duration: "2h 49m",
      date: "28/11/2012",
      trailer: "https://www.youtube.com/embed/SDnYMbYB-nU ",
      rate: 4,
      genre: "Novel,Fantasy Fiction,Epic",
      description:
        "Hobbits, a race of small humanlike creatures, characteristically value peace, simplicity, and cozy homes yet are capable of incredible feats of courage and resourcefulness.",
    },
  ]);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home movies={movies} setMovies={setMovies} />}
        />
        <Route
          path="/description/:id"
          element={<Description movies={movies} />}
        />
      </Routes>
    </div>
  );
}

export default App;
