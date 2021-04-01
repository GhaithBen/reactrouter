import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MovieCard.css";
function MovieCard({ movie }) {
    return (
        <Card style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={movie.posterUrl} height="60%" />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <h2>{"⭐".repeat(movie.rate)}</h2>
            </Card.Body>
            <Card.Footer>
                <Link to={`/about/${movie.id}`}>
                    <Button variant="success">About</Button>
                </Link>
                <Button variant="primary">Download</Button>
            </Card.Footer>
        </Card>
    );
}

export default MovieCard;
