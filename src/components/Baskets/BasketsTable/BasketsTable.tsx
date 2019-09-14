import React from "react";
import {Table} from "react-bootstrap";
import BasketsRow from "./BasketsRow";
import {BasketsMetadata} from "modules/baskets/basketsTypes";

type BasketsTablePropsArgs = {
    basketIds: string[];
    metadata: BasketsMetadata;
    sortBaskets: (value: string) => void;
};

function BasketsTable({basketIds, sortBaskets}: BasketsTablePropsArgs) {
    const tableContent = basketIds.map(function (id: string) {
        return <BasketsRow key={id}
            basketId={id} />;
    });

    return (
        <div className="my-table">
            <Table size="lg">
                <thead>
                    <tr>
                        <th onClick={() => sortBaskets("date")}>
                            <span className="table-heading">
                                Date
                            </span>
                        </th>
                        <th onClick={() => sortBaskets("items")}>
                            <span className="table-heading">
                                Items
                            </span>
                        </th>
                        <th onClick={() => sortBaskets("total")}>
                            <span className="table-heading">
                                Total
                            </span>
                        </th>
                    </tr>
                </thead>
                <tbody>{tableContent}</tbody>
            </Table>
        </div>
    );
}

export default BasketsTable;


