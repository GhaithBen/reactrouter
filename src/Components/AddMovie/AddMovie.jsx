import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "./AddMovie.css";
function AddMovie({ getNewMovie }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newMovie, setNewMovie] = useState({});
    const handleSubmit = () => {
        getNewMovie(newMovie);
        handleClose();
    };
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Your Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body className="inputnewMovie">
                    <Form.Control
                        type="email"
                        placeholder="Enter Title..."
                        name="title"
                        onChange={(e) =>
                            setNewMovie({ ...newMovie, title: e.target.value })
                        }
                    />
                    <Form.Control
                        type="email"
                        placeholder="Enter Description..."
                        name="description"
                        onChange={(e) =>
                            setNewMovie({
                                ...newMovie,
                                description: e.target.value,
                            })
                        }
                    />
                    <Form.Control
                        type="email"
                        placeholder="Enter PosterUrl..."
                        name="posterUrl"
                        onChange={(e) =>
                            setNewMovie({
                                ...newMovie,
                                posterUrl: e.target.value,
                            })
                        }
                    />
                    <Form.Control
                        type="email"
                        placeholder="Enter Rate ..."
                        name="rate"
                        onChange={(e) =>
                            setNewMovie({ ...newMovie, rate: e.target.value })
                        }
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddMovie;
