import {connect} from "react-redux";
import {logOut} from "modules/logout/logoutActions";
import Navigation from "./Navigation";
import {selectIsUserAuthenticated} from "modules/user/userSelectors";
import {State} from "modules";

function mapStateToProps(state: State) {
    return {
        authenticated: selectIsUserAuthenticated(state)
    };
}
const mapDispatchToProps = {
    logOut
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);
