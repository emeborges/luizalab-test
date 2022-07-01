import { CharacterProps } from '../../utils/types';
import { Box } from './style';
import Image from 'next/image';

interface Props {
  heroe: CharacterProps;
}

const BoxHero = ({ heroe }: Props) => {
  const linkImage = `${heroe.thumbnail.path}.${heroe.thumbnail.extension}`;
  return (
    <Box>
      <Image src={linkImage} width={300} height={250} />
      <p>{heroe.name}</p>
    </Box>
  );
};

export default BoxHero;
