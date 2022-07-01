import { ReactNode } from 'react';
import { Box } from './style';

interface ConteinerProps {
  children: ReactNode;
}

const ContainerCentralizer = ({ children }: ConteinerProps) => {
  return <Box>{children}</Box>;
};

export default ContainerCentralizer;
