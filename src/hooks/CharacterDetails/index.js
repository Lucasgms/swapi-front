import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_CHARACTER = gql`
  query getPerson($id: ID!) {
    person(id: $id) {
      name,
      birthYear,
      eyeColor,
      gender,
      hairColor,
      height, 
      mass,
      skinColor,
      homeworld {
        name
      },
      filmConnection {
        films {
          id,
          title
        }
      },
      starshipConnection {
        starships {
          id,
          name
        }
      },
      vehicleConnection {
        vehicles {
          id,
          name
        }
      },
    }
  }
`;

const CharacterDetails = (id) => {
  const [person, setPerson] = useState({});

  const { data } = useQuery(GET_CHARACTER, { 
    variables: {id}
  });

  useEffect(() => {
    if (data) {
      const personObj = data.person;

      personObj.films = personObj.filmConnection.films;
      personObj.starships = personObj.starshipConnection.starships;
      personObj.vehicles = personObj.vehicleConnection.vehicles;

      setPerson(personObj);
    }
  }, [data]);

  return [person];
};

export default CharacterDetails;