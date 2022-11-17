import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

export const isLoggedInVar = makeVar(false);

const client = new ApolloClient({
  uri: "https://ef65-1-228-98-162.jp.ngrok.io/graphql",
  cache: new InMemoryCache(),
});

export default client;
