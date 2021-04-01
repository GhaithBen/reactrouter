import React from "react";
import { useParams } from "react-router-dom";
import { Container, Jumbotron, Row } from "reactstrap";
import { list } from "../../trailer/trailer";
import ReactPlayer from "react-player";
function About(props) {
    const { userId } = useParams();
    const user = list.find((user) => user.id === Number(userId));
    console.log(user);
    return (
        <>
            <Container>
                <Jumbotron>
                    <Row className="d-flex justify-content-center align-items-center">
                        <p
                            style={{
                                width: "100px",
                                height: "100px",
                                fontSize: "1.5em",
                            }}
                            className="d-flex justify-content-center align-items-center mr-auto border rounded-circle text-light bg-info text-md"
                        >
                            {/* check if the user and the user.name  is truthy  */}
                            {user.name[0]}
                        </p>
                        {/* check if the user and the user.name  is truthy  */}

                        <h1 className="display-3 col">{user.name}</h1>
                        {/* check if the user and the user.name  is truthy  */}

                        <p className="lead text-center col">
                            {/* check if the user and the user.address  is truthy   */}
                            <ReactPlayer controls url={user.trailer} />,
                            {user.description},
                            {/* access to the nested object element  with es11 style user?.address?.street   => value of street */}
                        </p>
                    </Row>
                </Jumbotron>
            </Container>
        </>
    );
}

export default About;
