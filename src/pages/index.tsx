import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { BiSearch } from 'react-icons/bi';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';

import ContainerCentralizer from '../Components/Centralizer';
import { Box } from '../styles/pages/home';
import BoxHero from '../Components/BoxHero';
import { api } from '../utils/services';
import { CharacterProps } from '../utils/types';

const Home: NextPage = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(true);
    async function getCharacters() {
      const { data } = await api.get(`/characters`);
      setCharacters(data.data.results);
      setLoad(false);
    }

    getCharacters();
  }, []);

  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContainerCentralizer>
        <div className="headingComponent">
          <div className="logoContainer">
            <Image src={'/img/marvel.png'} width={'200px'} height={'80px'} />
            <p className="logoComent">Search heros</p>
          </div>
          <div className="callContainer">
            <h2 className="call">EXPLORE O UNIVERSO</h2>
            <p className="subCall">
              Mergulho no domínio deslumbrante de todos os personagens clássicos
              que você ama - e aqueles que você descobrira em breve!
            </p>
          </div>
          <div className="inputContainer">
            <BiSearch className="icon" />
            <input type={'text'} />
          </div>
        </div>
        <div className="containerHeroes">
          <div className="filtersContainer">
            <div className="amountHeroes">
              <p>Encontrados {20} heróis</p>
            </div>
            <div className="filters">
              <div className="inputClass">
                <p>Ordenar por - A/Z</p>

                <label className="toggle-switch">
                  <input
                    type="checkbox"
                    checked={isToggled}
                    onChange={() => setIsToggled(!isToggled)}
                  />
                  <span className="switch" />
                </label>
              </div>
              <button className="favs" onClick={() => setFavorite(!favorite)}>
                <div className="icons">
                  {favorite == true ? <BsHeartFill /> : <BsHeart />}
                </div>
                <p>Somente favoritos</p>
              </button>
            </div>
          </div>
          <div className="conteinerResults">
            {characters.map(hero => (
              <BoxHero heroe={hero} />
            ))}
          </div>
        </div>
      </ContainerCentralizer>
    </Box>
  );
};

export default Home;
