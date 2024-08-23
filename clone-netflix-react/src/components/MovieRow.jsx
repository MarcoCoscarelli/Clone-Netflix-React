
import React, { Component } from "react";
import { Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

class MovieRow extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  };

  getMovies = async () => {
    const apiKey = 'bc9813ab'; 
    const query = encodeURIComponent(this.props.query); // query codificata

    try {
      let response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`
      );

      if (response.ok) {
        let data = await response.json();
        if (data.Response === "True") {
          this.setState({
            movies: data.Search,
            isLoading: false,
          });
        } else {
          console.log("Errore nella risposta dell'API: ", data.Error);
          this.setState({
            isLoading: false,
            isError: true,
          });
        }
      } else {
        console.log("Errore nella chiamata: ", response.status, await response.text());
        this.setState({
          isLoading: false,
          isError: true,
        });
      }
    } catch (error) {
      console.log("Errore catturato: ", error);
      this.setState({
        isLoading: false,
        isError: true,
      });
    }
  };

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps) {
    // AGGIORNO I FILM SOLO SE LA QUERY CAMBIA
    if (prevProps.query !== this.props.query) {
      this.setState({ isLoading: true, isError: false }, this.getMovies);
    }
  }

  render() {
    return (
      <div className="container mb-5">
        <h3 className="text-light mb-2">{this.props.title}</h3>
        <Row className="d-flex flex-row flex-nowrap scrollX  ">
          {this.state.movies.length > 0 ? (
            this.state.movies.map((movie) => (
              <MovieCard movie={movie} key={movie.imdbID} />
            ))
          ) : (
            <p>No movies found.</p>
          )}
        </Row>
        {this.state.isError && (
          <Alert variant="danger">Something going wrong! :(</Alert>
        )}
        {this.state.isLoading && (
          <div className="text-center">
            <Spinner animation="border" role="status" variant="success">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
      </div>
    );
  }
}

export default MovieRow;