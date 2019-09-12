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

const BASKETS_METADATA_QUERY = gql`
    query basketsMetadataQuery(
        $userId: String
    ) {
        basketsMetadata(data: {userId: $userId}) {
            totalPages,
            startDate,
            endDate
        }
    }
`;

export default async function fetchBaskets(data: {userId: string}, jwt: string) {
    let response;
    try {
        response = await client.query({
            errorPolicy: "all",
            query: BASKETS_METADATA_QUERY,
            context: {
                headers: {
                    jwt: jwt
                }
            },
            variables: data

        });
        console.log({response: response.data.basketsMetadata});
        return response.data.basketsMetadata;
    } catch (e) {
        return undefined;
    }
}
