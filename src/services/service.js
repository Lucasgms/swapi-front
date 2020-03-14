import ApolloClient from 'apollo-boost';

const graphQLClient = new ApolloClient({
  // uri: 'https://graphql.org/swapi-graphql'
  uri: 'http://localhost:64421'
});

export default graphQLClient;