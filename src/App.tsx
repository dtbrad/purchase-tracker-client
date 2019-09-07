import React from "react";
import {Container, Col, Jumbotron} from "react-bootstrap";
import "./App.css";

const App: React.FC = () => (
    <Container>
        <Col md={{span: 10, offset: 1}}>
            <Jumbotron>
                <h1 className="text-center">My Demo App</h1>
            </Jumbotron>
        </Col>
    </Container>
);

export default App;
