import { ReactNode } from 'react';
import { Box } from './style';

interface Props {
  children: ReactNode;
}

const ContainerCentralizer = ({ children }: Props) => {
  return <Box>{children}</Box>;
};

export default ContainerCentralizer;
