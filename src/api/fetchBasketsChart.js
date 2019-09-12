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
    // defaultOptions
});

const BASKETS_CHART_QUERY = gql`
    query basketsChartQuery(
        $startDate: String
        $endDate: String
        $userId: String
        $unit: String
    ) {
        basketsChart(data: {userId: $userId, startDate: $startDate, endDate: $endDate, unit: $unit}) {
            rows {
                unit
                total
            }
        }
    }
`;

export default async function fetchBasketsChart(data, jwt) {
    let response;
    try {
        response = await client.query({
            errorPolicy: "all",
            query: BASKETS_CHART_QUERY,
            context: {
                headers: {
                    jwt: jwt,
                    fruit: "avocados"
                }
            },
            variables: data

        });
        return response.data.basketsChart.rows;
    } catch (e) {
        return undefined;
    }
}
