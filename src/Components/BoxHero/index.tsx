import { CharacterProps } from '../../utils/types';
import { Box } from './style';
import Image from 'next/image';
import { useState } from 'react';

import Link from 'next/link';

interface Props {
  heroe: CharacterProps;
  favoriteStatus?: boolean;
}

const BoxHero = ({ heroe, favoriteStatus }: Props) => {
  const [statusFavoriteHero, setStatusFavoriteHero] = useState(favoriteStatus);

  const linkImage = `${heroe.thumbnail.path}.${heroe.thumbnail.extension}`;

  function favoriteHeroeVerification() {
    const heroesStorage: number[] =
      localStorage.getItem('HEROE_FAV') == null
        ? ''
        : JSON.parse(localStorage.getItem('HEROE_FAV')!);

    if (!statusFavoriteHero == true) {
      const addHeroeStorage = [...heroesStorage, heroe.id];
      if (addHeroeStorage.length > 5) {
        return alert('Permitido favoritar no máximo 5 personagens');
      } else {
        localStorage.setItem('HEROE_FAV', JSON.stringify(addHeroeStorage));
        setStatusFavoriteHero(!statusFavoriteHero);
      }
    } else {
      const removeHeroeStorage = heroesStorage.filter(id => id !== heroe.id);
      localStorage.setItem('HEROE_FAV', JSON.stringify(removeHeroeStorage));
      setStatusFavoriteHero(!statusFavoriteHero);
    }
  }

  function heroeSelectStore() {
    localStorage.setItem('HEROE_SELECTED', `${heroe.id}`);
  }

  return (
    <Box>
      <Link href={`/details/${heroe.id}`}>
        <div className="imageBox" onClick={() => heroeSelectStore()}>
          <Image
            src={linkImage}
            width={300}
            height={260}
            style={{ borderBottom: '5px solid red' }}
          />
        </div>
      </Link>

      <div className="heroDetails">
        <Link href={`/details/${heroe.id}`}>
          <p onClick={() => heroeSelectStore()}>{heroe.name}</p>
        </Link>
        <div
          className="icons"
          onClick={() => {
            favoriteHeroeVerification();
          }}
        >
          {statusFavoriteHero == true ? (
            <Image src={'/img/favorito_03.svg'} height="15px" width={'15px'} />
          ) : (
            <Image src={'/img/favorito_02.svg'} height="15px" width={'15px'} />
          )}
        </div>
      </div>
    </Box>
  );
};

export default BoxHero;
