import { ComicProps } from '../../utils/types';
import { Box } from './style';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import Link from 'next/link';

interface Props {
  details: ComicProps;
}

const BoxComics = ({ details }: Props) => {
  const [favorite, setFavorite] = useState<boolean>(false);
  const [heroe, setHeroe] = useState<string>();

  useEffect(() => {
    const heroeSelected: string = localStorage.getItem('HEROE_SELECTED')!;
    setHeroe(heroeSelected);
    const favoritesComics: number[] =
      localStorage.getItem(`COMICS_${heroeSelected}`) == null
        ? null
        : JSON.parse(localStorage.getItem(`COMICS_${heroeSelected}`)!);

    if (favoritesComics == null) {
      console.log('deu certooooo');
    } else {
      favoritesComics.includes(details.id)
        ? setFavorite(true)
        : setFavorite(false);
    }
  }, []);

  function setFavoriteComic() {
    const favoritesComics: number[] =
      localStorage.getItem(`COMICS_${heroe}`) == null
        ? ''
        : JSON.parse(localStorage.getItem(`COMICS_${heroe}`)!);

    if (!favorite == true) {
      const addComics =
        favoritesComics == null
          ? [details.id]
          : [...favoritesComics, details.id];
      if (addComics.length > 5) {
        return alert('Permitido favoritar no máximo 5 quadrinhos');
      } else {
        localStorage.setItem(`COMICS_${heroe}`, JSON.stringify(addComics));
        setFavorite(!favorite);
      }
    } else {
      const removeComics = favoritesComics.filter(id => id !== details.id);
      localStorage.setItem(`COMICS_${heroe}`, JSON.stringify(removeComics));
      setFavorite(!favorite);
    }
  }

  return (
    <Box onClick={() => setFavoriteComic()}>
      <Image
        src={`${details.thumbnail.path}.${details.thumbnail.extension}`}
        width={120}
        height={150}
        style={{ borderBottom: '5px solid red' }}
      />
      <p>{details.title}</p>
      <div className="favoriteBox">
        {favorite == true ? (
          <Image src={'/img/favorito_01.svg'} height="15px" width={'15px'} />
        ) : (
          <Image src={'/img/favorito_02.svg'} height="15px" width={'15px'} />
        )}
      </div>
    </Box>
  );
};

export default BoxComics;
