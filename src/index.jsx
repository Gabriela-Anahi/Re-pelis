// src/App.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Typography, Card as MuiCard, CardMedia, CardContent } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { fetchPopularMovies } from './api/tmdb';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPopularMovies()
      .then(res => {
        setMovies(res.data.results);
      })
      .catch(err => {
        Swal.fire('Error', 'No se pudieron cargar las películas', 'error');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container className="my-4">
      <header className="mb-4 text-center">
        <Typography variant="h3" component="h1">
          <FontAwesomeIcon icon={faFilm} /> Películas Populares
        </Typography>
      </header>

      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
          {movies.map(movie => (
            <Col key={movie.id}>
              <MuiCard variant="outlined">
                <CardMedia
                  component="img"
                  height="300"
                  image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <CardContent>
                  <Typography variant="h6">{movie.title}</Typography>
                  <Typography variant="body2" color="text.secondary" noWrap>
                    {movie.overview}
                  </Typography>
                </CardContent>
              </MuiCard>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default App;