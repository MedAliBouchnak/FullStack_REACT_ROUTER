import "./App.css";
import react, { useState } from "react";
import MoviesList from "./MoviesList";
import Search from "./Search";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Link } from "react-router-dom";
function Home({ movies, setMovies }) {
  const [keyword, setKeyword] = useState("");
  const [rateIt, setrateIt] = useState(1);

  const search = (text) => {
    setKeyword(text);
  };
  const setRate = (rate) => {
    setrateIt(rate);
  };
  const addMovie = (movie) => {
    setMovies(movies.concat(movie));
  };
  return (
    <div className="App">
      <Navbar bg="white" expand="lg">
        <Container fluid style={{ width: "" }}>
          <Navbar.Brand>MovieCard</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                Home
              </Link>
            </Nav>
            <Form className="d-flex">
              <Search search={search} setRate={setRate} rateIt={rateIt} />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <MoviesList
        addMovie={addMovie}
        movies={movies.filter(
          (el) =>
            el.rate >= rateIt &&
            el.title.toLowerCase().includes(keyword.toLowerCase().trim())
        )}
      />
    </div>
  );
}

export default Home;
