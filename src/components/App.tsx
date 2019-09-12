import {connect} from "react-redux";
import React, {useEffect} from "react";
import {selectLoginStatus} from "modules/login/loginSelectors";
import {Alert, Container, Col, Jumbotron} from "react-bootstrap";
import {BrowserRouter, Route, Redirect} from "react-router-dom";
import Baskets from "components/Baskets";
import Login from "components/Login";
import Navigation from "components/Navigation";
import "components/App.css";
import {State} from "modules";
import {selectIsUserAuthenticated} from "modules/user/userSelectors";
import {initializeApp} from "modules/initialization/initializationActions";
import {selectIsInitialized} from "modules/initialization/initializationSelectors";


// alias initializeApp as setupApp to avoid eslint shadow rule violation
const mapDispatchToProps = {
    setupApp: initializeApp
};

function mapStateToProps(state: State) {
    return {
        authenticated: selectIsUserAuthenticated(state),
        loginStatus: selectLoginStatus(state),
        initialized: selectIsInitialized(state)

    };
}

type AppProps = {
    authenticated: boolean;
    loginStatus: string;
    setupApp: any;
    initialized: boolean;
}

function App({initialized, loginStatus, setupApp, authenticated}: AppProps) {
    useEffect(function () {
        setupApp();
    }, [setupApp]);

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

    const authenticatedApp = (
        <BrowserRouter>
            <Navigation />
            {title}
            <Route exact
                path="/baskets"
                component={Baskets} />
            <Redirect to="/baskets" />
        </BrowserRouter>
    );

    const unauthenticatedApp = (
        <BrowserRouter>
            {title}
            {statusBar}
            <Route path="/login"
                component={Login} />
            <Redirect to="login" />
        </BrowserRouter>
    );

    return (
        initialized
            ? (
                <Container>
                    <Col>
                        { authenticated
                            ? authenticatedApp
                            : unauthenticatedApp
                        }
                    </Col>
                </Container>
            ) : null
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
