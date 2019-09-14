import React from "react";
import Moment from "react-moment";
import {Basket} from "modules/baskets/basketsTypes";
import {withRouter, RouteComponentProps} from "react-router-dom";
import numeral from "numeral";

interface BasketsRow extends RouteComponentProps<any> {
    basket: Basket;
}

function BasketRow({basket: {items, purchaseDate, total}}: BasketsRow) {
    return (
        <tr>
            <td>
                <Moment format="ddd MM-D-YYYY h:mm a">{purchaseDate}</Moment>
            </td>
            <td> {items}</td>
            <td>
                {" "}
                {numeral((total / 100).toFixed(2)).format("$0.00")}
            </td>
        </tr>
    );
}

export default withRouter(BasketRow);
