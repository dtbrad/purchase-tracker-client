import {connect} from "react-redux";
import {logOut} from "modules/logout/logoutActions";
import Navigation from "./Navigation";
import {selectIsUserAuthorized} from "modules/user/userSelectors";
import {State} from "modules";

function mapStateToProps(state: State) {
    return {
        authorized: selectIsUserAuthorized(state)
    };
}
const mapDispatchToProps = {
    logOut
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);
