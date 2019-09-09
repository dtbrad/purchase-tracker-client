import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";
import {HttpLink} from "apollo-link-http";
import {ApolloLink} from "apollo-link";
import gql from "graphql-tag";

const client = new ApolloClient({
    link: ApolloLink.from([
        new HttpLink({
            uri: "http://localhost:4000/graphql"})
    ]),
    cache: new InMemoryCache()
});

const BASKETS_QUERY = gql`
    query basketsRowsQuery(
        $order: String
        $orderBy: String
        $page: Int
        $startDate: String
        $endDate: String
        $userId: String
    ) {
        basketRows(data: {
            order: $order,
            orderBy: $orderBy,
            page: $page,
            userId: $userId,
            startDate: $startDate,
            endDate: $endDate
        }) {
            message
            rows {
                id
                purchaseDate
                items
                total
            }
            metadata {
                page
                order
                orderBy
                totalPages,
                startDate,
                endDate
            }
        }
    }
`;

type BasketsFetchArgs = {
    order?: string;
    orderBy?: string;
    page?: number;
    startDate?: Date;
    endDate?: Date;
    userId?: string;
};

export default async function fetchBaskets(data: BasketsFetchArgs, jwt: string) {
    let response;
    try {
        response = await client.query({
            errorPolicy: "all",
            query: BASKETS_QUERY,
            context: {
                headers: {
                    jwt: jwt,
                    fruit: "avocados"
                }
            },
            variables: data

        });
        return response.data.basketRows;
    } catch (e) {
        return undefined;
    }
}
