import React from 'react';

import Button from '~/components/button';

import {
  CardStyled,
  CardMainText,
  CardText,
  CardLabel,
  MoviesList,
} from './styles';

const CharacterCard = ({ character }) => {
  const buttonType = 'primary';

  return (
    <CardStyled>
      <CardMainText>{character.name}</CardMainText>
      <CardText>
          <CardLabel>Gender: </CardLabel>
          { character.gender }
      </CardText>
      <MoviesList>
        <CardLabel>Movies:</CardLabel>
        {character.movies.map((movie, index) => (
          <span key={movie.id}>&nbsp; 
            {movie.title}{ index !== character.movies.length - 1 ? ',' : '.'}
          </span>
        ))}
      </MoviesList>
      <Button type={buttonType}>
        See more
      </Button>
    </CardStyled>
  );
};

export default CharacterCard;