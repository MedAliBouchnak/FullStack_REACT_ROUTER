import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Nav, Navbar, Form, Button } from "react-bootstrap";
import { Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const Description = ({ movies }) => {
  const params = useParams();
  const movie = movies.find((el) => el.id == params.id);
  return (
    <div>
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
              <Link style={{ textDecoration: "none" }} to="/">
                Home
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="descForme">
        <img className="img-Desc" src={movie.second_img} alt="" />
        <div style={{ marginTop: 50 }}>
          <h1>Description</h1>
          <p style={{ textAlign: "justify", paddingRight: 50 }}>
            {movie.description}
          </p>
          <iframe
            style={{ width: 560, height: 315, marginLeft: 100 }}
            src={movie.trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Description;
