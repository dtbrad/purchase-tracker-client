import {connect} from "react-redux";
import React from "react";
import {selectLoginStatus} from "modules/login/loginSelectors";
import {Alert, Container, Col, Jumbotron} from "react-bootstrap";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import Baskets from "components/Baskets";
import Login from "components/Login";
import Navigation from "components/Navigation";
import "components/App.css";
import {State} from "modules";
import {selectIsUserAuthorized} from "modules/user/userSelectors";

function mapStateToProps(state: State) {
    return {
        authorized: selectIsUserAuthorized(state),
        loginStatus: selectLoginStatus(state)
    };
}

type AppProps = {
    authorized: boolean;
    loginStatus: string;
}

function App({authorized, loginStatus}: AppProps) {
    const title = (
        <Jumbotron>
            <h1 className="text-center">Purchase Tracker</h1>
        </Jumbotron>
    );

    const statusBar = (
        loginStatus === "FAILED" && (
            <Alert variant="danger">
                Failed to log in. Please try again or come back later.
            </Alert>
        )
    );

    const authorizedApp = (
        <BrowserRouter>
            <Navigation />
            {title}
            <Route exact
                path="/baskets"
                component={Baskets} />
            <Redirect to="/baskets" />
        </BrowserRouter>
    );

    const unauthorizedApp = (
        <BrowserRouter>
            {title}
            {statusBar}
            <Route path="/login"
                component={Login} />
            <Redirect to="login" />
        </BrowserRouter>
    );

    return (
        <Container>
            <Col>
                { authorized
                    ? authorizedApp
                    : unauthorizedApp
                }
            </Col>
        </Container>
    );
}

export default connect(mapStateToProps)(App);
