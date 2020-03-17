import ApolloClient from 'apollo-boost';

console.log();

const graphQLClient = new ApolloClient({
  uri: process.env.NODE_ENV === 'development' ?
    'http://localhost:64421' :
    'https://graphql-swapi-server.herokuapp.com/'
});

export default graphQLClient;