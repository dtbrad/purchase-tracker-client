import {connect} from "react-redux";
import BasketsTable from "./BasketsTable";
import {
    selectBasketIds,
    selectBasketsMetadata
} from "modules/baskets/basketsSelectors";
import {State} from "modules";
import {getBaskets} from "modules/baskets/basketsActions";

function mapStateToProps(state: State) {
    return {
        basketIds: selectBasketIds(state),
        metadata: selectBasketsMetadata(state)
    };
}

const mapDispatchToProps = {
    sortBaskets: getBaskets
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BasketsTable);
