import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_LIST_PEOPLE = gql`
  query listPeople($length: Int!, $endCursor: String!){
    allPeople(first: $length, after: $endCursor) {
      totalCount,
      pageInfo {
        hasNextPage,
        endCursor
      },
      edges {
        node {
          id,
          name,
          gender,
          filmConnection {
            edges {
              node {
                title
              }
            }
          }
        }
      }
    }
  }`
;

const handleCharactersList = (characters) => {
  const list = characters.map(char => {
    let character = char.node;
    let movies = character.filmConnection
      .edges.map(movie => movie.node.title);

    return {
      id: character.id,
      name: character.name,
      gender: character.gender,
      movies
    };
  });
  
  return list;
};

const CharactersList = (length = 10, endCursor = "") => {
  const [charactersList, setCharactersList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [pageInfo, setPageInfo] = useState({
    hasNextPage: false,
    endCursor: '',
  });
  
  const { data, fetchMore } = useQuery(GET_LIST_PEOPLE, {
    variables: { length, endCursor }
  });

  const updateList = (length, endCursor) => {
    fetchMore({
      variables: { length, endCursor },
      updateQuery: (prev, { fetchMoreResult }) => {
        const {
          pageInfo,
          edges: newCharacters
        } = fetchMoreResult.allPeople;

        setPageInfo(pageInfo);
        setCharactersList(
          charactersList.concat(handleCharactersList(newCharacters))
        );
      },
    });
  };

  useEffect(() => {
    if (data) {
      const { totalCount, pageInfo, edges: characters } = data.allPeople;

      setTotalCount(totalCount);
      setPageInfo(pageInfo);
      setCharactersList(handleCharactersList(characters));
    }
  }, [data]);

  return [ charactersList, totalCount, pageInfo, updateList];
};

export default CharactersList;