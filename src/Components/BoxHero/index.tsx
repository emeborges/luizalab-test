import { CharacterProps } from '../../utils/types';
import { Box } from './style';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';

interface Props {
  heroe: CharacterProps;
  favoriteStatus?: boolean;
}

const BoxHero = ({ heroe, favoriteStatus }: Props) => {
  const [statusFavoriteHero, setStatusFavoriteHero] = useState(favoriteStatus);

  const linkImage = `${heroe.thumbnail.path}.${heroe.thumbnail.extension}`;

  function favoriteHeroeVerification() {
    const heroesStorage: number[] =
      sessionStorage.getItem('HEROE_FAV') == null
        ? ''
        : JSON.parse(sessionStorage.getItem('HEROE_FAV')!);

    if (!statusFavoriteHero == true) {
      const addHeroeStorage = [...heroesStorage, heroe.id];
      if (addHeroeStorage.length > 5) {
        return alert('Algo deu errado');
      } else {
        sessionStorage.setItem('HEROE_FAV', JSON.stringify(addHeroeStorage));
        setStatusFavoriteHero(!statusFavoriteHero);
      }
    } else {
      const removeHeroeStorage = heroesStorage.filter(id => id !== heroe.id);
      sessionStorage.setItem('HEROE_FAV', JSON.stringify(removeHeroeStorage));
      setStatusFavoriteHero(!statusFavoriteHero);
    }
  }

  return (
    <Box>
      <Image
        src={linkImage}
        width={300}
        height={260}
        style={{ borderBottom: '5px solid red' }}
      />

      <div className="heroDetails">
        <p>{heroe.name}</p>
        <div
          className="icons"
          onClick={() => {
            favoriteHeroeVerification();
          }}
        >
          {statusFavoriteHero == true ? <BsHeartFill /> : <BsHeart />}
        </div>
      </div>
    </Box>
  );
};

export default BoxHero;
