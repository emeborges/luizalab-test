import { ComicProps } from '../../utils/types';
import { Box } from './style';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import Link from 'next/link';
import { api } from '../../utils/services';
import BoxComics from '../BoxComics';

interface Props {
  url: string | undefined;
}

const Releases = ({ url }: Props) => {
  const [comics, setComics] = useState<ComicProps[]>();

  useEffect(() => {
    async function getRealeases() {
      const { data } = await api.get(`${url}?orderBy=-onsaleDate&limit=10`);
      setComics(data.data.results);
    }

    getRealeases();
  }, [url]);

  return (
    <Box>
      <h2>Últimos lançamentos</h2>
      <div className="containerReleases">
        {comics?.map(comic => (
          <BoxComics details={comic} />
        ))}
      </div>
    </Box>
  );
};

export default Releases;
