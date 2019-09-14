import {connect} from "react-redux";
import {selectBasketRow} from "modules/baskets/basketsSelectors";
import BasketRow from "./BasketsRow";
import {State} from "modules";

function mapStateToProps(state: State, ownProps: {basketId: string}) {
    const basket = selectBasketRow(state, ownProps.basketId);
    return {
        basket
    };
}

export default connect(mapStateToProps)(BasketRow);
