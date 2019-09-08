import React, {SyntheticEvent, useState} from "react";
import {Button, Card, Form} from "react-bootstrap";
import {LoginCredentials} from "modules/login/loginTypes";

interface LoginProps {
    login: (credentials: LoginCredentials)=> void;
}

function Login(props: LoginProps) {
    const [email, setEmail] = useState("john@mail.com");
    const [password, setPassword] = useState("password");

    async function handleSubmit(event: SyntheticEvent) {
        event.preventDefault();
        props.login({email, password});
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title className="text-center">Log In</Card.Title>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(e: any) => setEmail(e.target.value)}
                            value={email}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e: any) => setPassword(e.target.value)}
                            value={password}
                        />
                    </Form.Group>
                    <Button block
                        type="submit"
                        onClick={handleSubmit}>
                        Login
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default Login;
