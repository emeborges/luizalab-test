import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import Link from 'next/link';

import ContainerCentralizer from '../../Components/Centralizer';
import { Box } from '../../styles/pages/details';
import { api } from '../../utils/services';
import { CharacterProps } from '../../utils/types';
import Releases from '../../Components/Realeases';
import LoadingComponent from '../../Components/Loading';

const Details: NextPage = () => {
  const route = useRouter();
  const pid: any = route.query.heroe;
  const [search, setSearch] = useState('');
  const [load, setLoad] = useState(true);
  const [favoritesHeroes, setFavoritesHeroes] = useState<number[]>([]);
  const [heroeDetails, setHeroeDetails] = useState<CharacterProps>();
  const [statusFavoriteHero, setStatusFavoriteHero] = useState(false);
  const [heroes, setHeroes] = useState<CharacterProps[]>([]);

  useEffect(() => {
    const selectedHeroe = localStorage.getItem('HEROE_SELECTED');

    async function getHeroeDetails() {
      const { data } = await api.get(`/characters/${selectedHeroe}`);
      setHeroeDetails(data.data.results[0]);
    }

    async function getCharacters() {
      const { data } = await api.get(`/characters?orderBy=modified&limit=100`);
      const results = data.data.results;
      setHeroes(results);
    }

    function checkFavorite() {
      if (favoritesHeroes != null) {
        const check = favoritesHeroes.includes(Number(selectedHeroe));
        return setStatusFavoriteHero(check);
      }
    }

    const storage: number[] =
      localStorage.getItem('HEROE_FAV') == null
        ? ''
        : JSON.parse(localStorage.getItem('HEROE_FAV')!);

    setFavoritesHeroes(storage);
    getHeroeDetails();
    getCharacters();
    checkFavorite();
    setTimeout(() => setLoad(false), 2000);
  }, [pid]);

  function favoriteHeroeVerificationAndAddorRemove() {
    const heroesStorage: number[] =
      localStorage.getItem('HEROE_FAV') == null
        ? ''
        : JSON.parse(localStorage.getItem('HEROE_FAV')!);

    if (!statusFavoriteHero == true) {
      const addHeroeStorage = [...heroesStorage, heroeDetails?.id];
      if (addHeroeStorage.length > 5) {
        return alert('Algo deu errado');
      } else {
        localStorage.setItem('HEROE_FAV', JSON.stringify(addHeroeStorage));
      }
    } else {
      const removeHeroeStorage = heroesStorage.filter(
        id => id !== heroeDetails?.id
      );
      localStorage.setItem('HEROE_FAV', JSON.stringify(removeHeroeStorage));
    }
  }

  const searchResult = heroes.filter(heroe =>
    heroe.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  function redirectHeroe(heroId: number) {
    setLoad(true);
    localStorage.setItem('HEROE_SELECTED', JSON.stringify(heroId));
    route.push(`/details/${heroId}`);
    setTimeout(() => setLoad(false), 2000);
  }

  return (
    <Box>
      <Head>
        <title>Heroe Detail - LuizaLabs Test FrontEnd</title>
        <meta name="description" content="Test luizalabs frontend" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </Head>
      <ContainerCentralizer>
        <div className="header">
          <Link href={'/'}>
            <div className="logoContainer">
              <Image
                src={'/img/logo_menor.svg'}
                width={'250px'}
                height={'50px'}
              />
            </div>
          </Link>
          <div>
            <div className="inputContainer">
              <div className="icon">
                <Image
                  src={'/img/ic_busca_menor.svg'}
                  width={'16px'}
                  height={'16px'}
                  className="icon"
                />
              </div>
              <input
                type={'text'}
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              {search != '' ? (
                <div className="searchResults">
                  <p>Resultados:</p>

                  <div className="results">
                    {searchResult.map((hero, key) => (
                      <p onClick={() => redirectHeroe(hero.id)}>{hero.name}</p>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        {load == true ? (
          <LoadingComponent />
        ) : (
          <>
            <div className="details">
              <div className="heroDetail">
                <div className="title">
                  <h2>{heroeDetails?.name.toLocaleUpperCase()}</h2>
                  <div
                    className="icons"
                    onClick={() => {
                      favoriteHeroeVerificationAndAddorRemove();
                      setStatusFavoriteHero(!statusFavoriteHero);
                    }}
                  >
                    {statusFavoriteHero == true ? (
                      <Image
                        src={'/img/favorito_01.svg'}
                        height="30px"
                        width={'30px'}
                      />
                    ) : (
                      <Image
                        src={'/img/favorito_02.svg'}
                        height="30px"
                        width={'30px'}
                      />
                    )}
                  </div>
                </div>
                <div className="description">
                  <p>{heroeDetails?.description}</p>
                </div>
                <div className="stats">
                  <div className="type">
                    <h4>Quadrinhos</h4>
                    <div className="numbers">
                      <div className="icon">
                        <Image
                          src={'/img/ic_quadrinhos.svg'}
                          width={'36px'}
                          height={'36px'}
                        />
                      </div>
                      <p> {heroeDetails?.comics?.available}</p>
                    </div>
                  </div>
                  <div className="type">
                    <h4>S??ries</h4>
                    <div className="numbers">
                      <div className="icon">
                        <Image
                          src={'/img/ic_trailer.svg'}
                          width={'36px'}
                          height={'36px'}
                        />
                      </div>
                      <p> {heroeDetails?.series?.available}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="picture">
                {heroeDetails && (
                  <Image
                    src={`${heroeDetails?.thumbnail.path}.${heroeDetails?.thumbnail.extension}`}
                    width={500}
                    height={500}
                    style={{ borderBottom: '5px solid red' }}
                  />
                )}
              </div>
            </div>
            <Releases url={heroeDetails?.comics?.collectionURI} />
          </>
        )}
      </ContainerCentralizer>
    </Box>
  );
};

export default Details;
