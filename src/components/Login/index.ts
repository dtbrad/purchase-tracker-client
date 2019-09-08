import {connect} from "react-redux";
import {login} from "modules/login/loginActions";
import Login from "./Login";

const mapDispatchToProps = {
    login
};

export default connect(
    null,
    mapDispatchToProps
)(Login);
