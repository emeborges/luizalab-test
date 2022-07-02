import { Box } from './style';

const LoadingComponent = () => {
  return (
    <Box>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Box>
  );
};

export default LoadingComponent;
