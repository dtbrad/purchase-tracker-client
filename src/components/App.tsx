import React from "react";
import {Container, Col, Jumbotron} from "react-bootstrap";
import "./App.css";

const App: React.FC = () => (
    <Container>
        <Col>
            <Jumbotron>
                <h1 className="text-center">Purchase Tracker</h1>
            </Jumbotron>
        </Col>
    </Container>
);

export default App;
