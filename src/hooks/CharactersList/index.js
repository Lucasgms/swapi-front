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
      people {
        id,
        name,
        gender,
        birthYear,
        filmConnection {
          films {
            id,
            title
          }
        }
      }
    }
  }`
;

function filterCharacters(list, filters) {
  let newList = list;

  if (filters.name) newList = list
    .filter(char => (char.name.includes(filters.name)));

  if (filters.gender) newList = newList
    .filter(char => (char.gender.toLowerCase()) === filters.gender.toLowerCase());

  if (filters.birthYear) newList = newList
    .filter(char => (char.birthYear === filters.birthYear));
 
  return newList;
}

const CharactersList = (length = 10, endCursor = "") => {
  const [charactersList, setCharactersList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    name: '',
    gender: '',
    birthYear: ''
  });

  const [pageInfo, setPageInfo] = useState({
    hasNextPage: false,
    endCursor: '',
  });
  
  const { data, fetchMore } = useQuery(GET_LIST_PEOPLE, {
    variables: { length, endCursor }
  });

  const updateListData = (list, subscribe = false) => {
    const {
      totalCount,
      pageInfo,
      people: characters
    } = list.allPeople;

    characters.forEach(char => (
      char.movies = char.filmConnection.films
    ));

    const charList = subscribe ? characters : [...charactersList, ...characters];
    const filteredCharList = filterCharacters(charList, filters);
    
    setTotalCount(totalCount);
    setPageInfo(pageInfo);
    setCharactersList(filteredCharList);

    setIsLoading(false)
  }

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
      updateListData(data, true);
    }
  }, [data, filters]);

  return [
    charactersList,
    totalCount,
    pageInfo,
    isLoading,
    fetchMoreCharacters,
    setFilters,
  ];
};

export default CharactersList;