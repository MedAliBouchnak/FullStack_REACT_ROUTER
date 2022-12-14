import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./Add";
const MoviesList = ({ movies, addMovie }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button
        variant="outline-success"
        onClick={handleShow}
        style={{
          marginTop: "20px",
          backgroundColor: "white",
          marginLeft: "50%",
        }}
      >
        Add
      </Button>

      <div className="flexing">
        <Add addMovie={addMovie} show={show} handleClose={handleClose} />
        {movies.map((el) => (
          <MovieCard movie={el} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
