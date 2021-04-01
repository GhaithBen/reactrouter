import React from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import "./MyNavBar.css";
function MyNavBar({ getRatesearch, getTitlesearch }) {
    const ratingChanged = (newRating) => {
        getRatesearch(newRating);
    };
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Movie App</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to="/">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    color2={"#ffd700"}
                    half={false}
                    className="reactstars"
                />
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    onChange={(e) => getTitlesearch(e.target.value)}
                />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
}

export default MyNavBar;
