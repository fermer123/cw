import {FC} from 'react';

import {Spinner, SpinnerContainer} from './LoadingSpinner_style';

const LoadingSpinner: FC = () => {
  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
