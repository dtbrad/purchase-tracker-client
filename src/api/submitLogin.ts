import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";
import {HttpLink} from "apollo-link-http";
import {ApolloLink} from "apollo-link";
import gql from "graphql-tag";
import {LoginCredentials} from "modules/login/loginTypes";

const client = new ApolloClient({
    link: ApolloLink.from([
        new HttpLink({
            uri: "http://localhost:4000/graphql"
        })
    ]),
    cache: new InMemoryCache()
});

const LOGIN_MUTATION = gql`
    mutation login($email: String!, $password: String!) {
        login(data: {email: $email, password: $password}) {
            token
            message
        }
    }
`;

export default async function submitLogin({email, password}: LoginCredentials): Promise<any> {
    try {
        return await client.mutate({
            errorPolicy: "all",
            mutation: LOGIN_MUTATION,
            variables: {
                email,
                password
            }
        });

    } catch (e) {
        console.log("err", e);
    }
}
