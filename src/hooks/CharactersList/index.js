import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const LIST_CHARACTERS = gql`
  {
    allPeople(first:10) {
      totalCount,
       pageInfo {
        hasNextPage
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
  }
`;

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

const CharactersList = () => {
  const [charactersList, setCharactersList] = useState([]);
  const { data } = useQuery(LIST_CHARACTERS);

  useEffect(() => {
    if (data) {
      const { edges: characters } = data.allPeople;
      setCharactersList(handleCharactersList(characters));
    }
  }, [data]);

  return [ charactersList, setCharactersList];
};

export default CharactersList;