import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";
const MovieCard = ({ movie }) => {
  return (
    <div>
      <Link to={`Description/${movie.id}`}>
        <div class="container">
          <div class="cellphone-container">
            <div class="movie">
              <div class="menu">
                <i class="material-icons"></i>
              </div>
              <div class="movie-img">
                <img
                  src={movie.main_img}
                  style={{ height: "380px", width: "100%" }}
                  alt="404"
                />
              </div>
              <div class="text-movie-cont">
                <div class="mr-grid">
                  <div class="col1">
                    <h1>{movie.title}</h1>

                    <ul class="movie-gen">
                      <li>{movie.duration}</li>
                      <li>{movie.genre}</li>
                    </ul>
                    <br />
                    <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={movie.rate}
                    />
                  </div>
                </div>
                <div class="mr-grid summary-row">
                  <div class="col2">
                    <h5>SUMMARY</h5>
                  </div>
                </div>
                <div class="mr-grid">
                  <div class="col1">
                    <p class="movie-description">{movie.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </Link>
    </div>
  );
};

export default MovieCard;
