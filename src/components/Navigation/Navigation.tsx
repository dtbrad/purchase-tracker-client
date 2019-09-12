import React from "react";
import {NavLink, withRouter, RouteComponentProps} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";

type NavigationProps = RouteComponentProps<any> & {
    authenticated: boolean;
    logOut: () => void;
};

function Navigation(props: NavigationProps) {
    return (
        <Navbar>
            <Nav>
                {!props.authenticated && (
                    <React.Fragment>
                        <Nav.Link as={NavLink}
                            to="/login">
                            Login
                        </Nav.Link>
                    </React.Fragment>
                )}
                {props.authenticated && (
                    <React.Fragment>
                        <Nav.Link
                            as={NavLink}
                            onClick={() => props.logOut()}
                            to="#"
                        >
                            Logout
                        </Nav.Link>
                    </React.Fragment>
                )}
            </Nav>
        </Navbar>
    );
}

export default withRouter(Navigation);
