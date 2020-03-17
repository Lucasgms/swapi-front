import React, {useEffect} from 'react';

import {
  FieldStyled,
  ModalOverlay,
  ModalDialog,
  ModalCloseStyled,
  TitleStyled,
} from './styles';
import useCharacterDetails  from '../../hooks/CharacterDetails';

const CharacterModal = ({ id, onClose }) => {
  const [character] = useCharacterDetails(id);

  useEffect(() => {
    document.body.classList.add('no-scroll');

    return function cleanup() {
      document.body.classList.remove('no-scroll');
    }
  }, []);

  return (
    <ModalOverlay>
      <ModalDialog>
        <div className="row">
          <ModalCloseStyled onClick={e => onClose()} />
        </div>
        <TitleStyled>{character.name}</TitleStyled>
        <div className="row">
          <FieldStyled>
            <p>
              <span>Height: </span>
              {character.height}
            </p>
          </FieldStyled>
          <FieldStyled>
            <p>
              <span>Mass: </span>
              {character.mass}
            </p>
          </FieldStyled>
        </div>

        <div className="row">
          <FieldStyled>
            <p>
              <span className="label">Birth Year: </span>
              {character.birthYear}
            </p>
          </FieldStyled>
          <FieldStyled>
            <p>
              <span>Homeworld: </span>
              {character.homeworld?.name}
            </p>
          </FieldStyled>
          <FieldStyled>
            <p>
              <span>Gender: </span>
              {character.gender}
            </p>
          </FieldStyled>
        </div>
        
        <div className="row">
          <FieldStyled>
            <p>
              <span>Eye color: </span>
              {character.eyeColor}
            </p>
          </FieldStyled>
          <FieldStyled>
            <p>
              <span>Skin color: </span>
              {character.skinColor}
            </p>
          </FieldStyled>
          <FieldStyled>
            <p>
              <span className="label">Hair color: </span>
              {character.hairColor}
            </p>
          </FieldStyled>
        </div>

        <div className="row">
          <FieldStyled>
            <p>
              <span>Films: </span>
              {character.films?.map((film, index) => (
                <React.Fragment key={film.id}>
                  {film.title}
                  {index === character.films.length -1 ? '.' : ','}
                  &nbsp;
                </React.Fragment>
              ))}
            </p>
          </FieldStyled>
        </div>
        
        {character.starships?.length > 0 && 
          <div className="row">
            <FieldStyled>
              <p>
                <span>Starships: </span>
                {character.starships?.map((starship, index) => (
                  <React.Fragment key={starship.id}>
                    {starship.name}
                    {index === character.starships.length -1 ? '.' : ','}
                    &nbsp;
                  </React.Fragment>
                ))}
              </p>
            </FieldStyled>
          </div>
        }
       
        {character.vehicles?.length > 0 &&
          <div className="row">
            <FieldStyled>
              <p>
                <span>Vehicles: </span>
                {character.vehicles?.map((vehicle, index) => (
                  <React.Fragment key={vehicle.id}>
                    {vehicle.name}
                    {index === character.vehicles.length -1 ? '.' : ','}
                    &nbsp;
                  </React.Fragment>
                ))}
              </p>
            </FieldStyled>
          </div>
        }
       
      </ModalDialog>
    </ModalOverlay>
  );
};

export default CharacterModal;