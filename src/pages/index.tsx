import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import ContainerCentralizer from '../Components/Centralizer';
import { Box } from '../styles/pages/home';
import BoxHero from '../Components/BoxHero';
import { api } from '../utils/services';
import { CharacterProps } from '../utils/types';
import LoadingComponent from '../Components/Loading';

const Home: NextPage = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [favoriteFilter, setFavoriteFilter] = useState(false);
  const [heroes, setHeroes] = useState<CharacterProps[]>([]);
  const [favoritesHeroes, setFavoritesHeroes] = useState<number[]>([]);
  const [load, setLoad] = useState(true);
  const [refresh, setRefresh] = useState(true);
  const [heroesPerPage, setHeroesPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');

  const pages = Math.ceil(heroes.length / heroesPerPage) - 1;
  const startIndex = currentPage * heroesPerPage;
  const endIndex = startIndex + heroesPerPage;
  const currentHeroes = heroes.slice(startIndex, endIndex);

  useEffect(() => {
    async function getCharacters() {
      const { data } = await api.get(`/characters?orderBy=modified&limit=100`);
      const results = data.data.results;
      setHeroes(results);
    }
    const storage: number[] =
      localStorage.getItem('HEROE_FAV') == null
        ? ''
        : JSON.parse(localStorage.getItem('HEROE_FAV')!);

    setFavoritesHeroes(storage);
    getCharacters();
    setLoad(false);
  }, [refresh]);

  function filterAlphabetical() {
    setLoad(true);
    if (isToggled == false) {
      setHeroes(heroes.sort((a, b) => a.name.localeCompare(b.name)));
    } else {
      setRefresh(!refresh);
    }
    setIsToggled(!isToggled);
    setTimeout(() => setLoad(false), 1000);
  }

  function checkFavorite(id: number) {
    if (favoritesHeroes != null) {
      const check = favoritesHeroes.includes(id);
      if (check == true) {
        return true;
      } else {
        return false;
      }
    }
  }

  function filterFavorite() {
    const storage: number[] =
      localStorage.getItem('HEROE_FAV') == null
        ? ''
        : JSON.parse(localStorage.getItem('HEROE_FAV')!);

    setFavoritesHeroes(storage);
    setFavoriteFilter(!favoriteFilter);
    setLoad(true);
    if (favoriteFilter === false) {
      setHeroes(heroes.filter(heroe => storage.includes(heroe.id)));
      setTimeout(() => setLoad(false), 3000);
    } else {
      setRefresh(!refresh);
    }
  }

  const searchResult = heroes.filter(heroe =>
    heroe.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <Box>
      <Head>
        <title>Heroes - LuizaLabs Test FrontEnd</title>
        <meta name="description" content="Test luizalabs frontend" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </Head>
      <ContainerCentralizer>
        <div className="headingComponent">
          <div className="logoContainer">
            <Image src={'/img/logo.svg'} width={'400px'} height={'100px'} />
          </div>
          <div className="callContainer">
            <h2 className="call">EXPLORE O UNIVERSO</h2>
            <p className="subCall">
              Mergulho no dom??nio deslumbrante de todos os personagens cl??ssicos
              que voc?? ama - e aqueles que voc?? descobrira em breve!
            </p>
          </div>
          <div className="inputContainer">
            <div className="icon">
              <Image
                src={'/img/ic_busca.svg'}
                width={'24px'}
                height={'24px'}
                className="icon"
              />
            </div>
            <input
              type={'text'}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="containerHeroes">
          <div className="filtersContainer">
            <div className="amountHeroes">
              <p>Encontramos {heroes.length} her??is</p>
            </div>
            <div className="filters">
              <div className="inputClass">
                <p>Ordenar por - A/Z</p>

                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={isToggled}
                    onChange={() => filterAlphabetical()}
                  />
                  <span className="switch" />
                </label>
              </div>
              <button className="favs" onClick={() => filterFavorite()}>
                <div className="icons">
                  {favoriteFilter == true ? (
                    <Image
                      src={'/img/favorito_01.svg'}
                      height="15px"
                      width={'15px'}
                    />
                  ) : (
                    <Image
                      src={'/img/favorito_02.svg'}
                      height="15px"
                      width={'15px'}
                    />
                  )}
                </div>
                <p>Somente favoritos</p>
              </button>
            </div>
          </div>
          {load == true ? (
            <LoadingComponent />
          ) : (
            <>
              <div className="conteinerResults">
                {search == ''
                  ? currentHeroes.map((hero, key) => (
                      <BoxHero
                        heroe={hero}
                        favoriteStatus={checkFavorite(hero.id)}
                      />
                    ))
                  : searchResult.map((hero, key) => (
                      <BoxHero
                        heroe={hero}
                        favoriteStatus={checkFavorite(hero.id)}
                      />
                    ))}
              </div>

              <div className="controllerPage">
                <button
                  onClick={() =>
                    setCurrentPage(currentPage == 0 ? 0 : currentPage - 1)
                  }
                >
                  -
                </button>
                <p>{currentPage + 1}</p>
                <button
                  onClick={() =>
                    setCurrentPage(
                      currentPage == pages ? pages : currentPage + 1
                    )
                  }
                >
                  +
                </button>
                <p id="maxPag">de {pages + 1} p??ginas.</p>
              </div>
            </>
          )}
        </div>
      </ContainerCentralizer>
      <div className="footer" />
    </Box>
  );
};

export default Home;
