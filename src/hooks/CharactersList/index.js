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
                id,
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
      .edges.map(movie => movie.node);

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
  const [isLoading, setIsLoading] = useState(false);
  const [pageInfo, setPageInfo] = useState({
    hasNextPage: false,
    endCursor: '',
  });
  
  const { data, fetchMore } = useQuery(GET_LIST_PEOPLE, {
    variables: { length, endCursor }
  });

  const updateListData = (list) => {
    const {
      totalCount,
      pageInfo,
      edges: characters
    } = list.allPeople;

    const newCharsList = handleCharactersList(characters);
    setTotalCount(totalCount);
    setPageInfo(pageInfo);
    setCharactersList([...charactersList, ...newCharsList]);

    setIsLoading(false)
  };

  const fetchMoreCharacters = (length, endCursor) => {
    setIsLoading(true);
    fetchMore({
      variables: { length, endCursor },
      updateQuery: (prev, { fetchMoreResult }) => {
        updateListData(fetchMoreResult);
      },
    });
  };

  useEffect(() => {
    if (data) {
      updateListData(data);
    }
  }, [data]);

  return [ charactersList, totalCount, pageInfo, isLoading, fetchMoreCharacters];
};

export default CharactersList;