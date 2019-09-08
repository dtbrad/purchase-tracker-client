import {connect} from "react-redux";
import React from "react";
import {Container, Col, Jumbotron} from "react-bootstrap";
import Baskets from "components/Baskets";
import Login from "components/Login";
import "components/App.css";
import {State} from "modules";
import {selectIsUserAuthorized} from "modules/user/userSelectors";

function mapStateToProps(state: State) {
    return {
        authorized: selectIsUserAuthorized(state)
    };
}

type AppProps = {
    authorized: boolean;
}

function App({authorized}: AppProps) {
    const title = (
        <Jumbotron>
            <h1 className="text-center">Purchase Tracler</h1>
        </Jumbotron>
    );

    const authorizedApp = <Baskets />;
    const unAuthorizedApp = <Login />;

    return (
        <Container>
            <Col>
                {title}
                { authorized
                    ? authorizedApp
                    : unAuthorizedApp
                }
            </Col>
        </Container>
    );
}

export default connect(mapStateToProps)(App);
