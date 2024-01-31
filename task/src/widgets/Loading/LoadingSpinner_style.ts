import styled, {keyframes} from 'styled-components';

import colors from '@app/styles/default_variables';
import {Box} from '@mui/system';

const spinner = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;
export const SpinnerContainer = styled(Box)`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Spinner = styled(Box)`
  width: 75px;
  height: 75px;
  border: 10px solid ${colors.default};
  border-top: 10px solid ${colors.blue};
  border-radius: 50%;
  animation: ${spinner} 1.5s linear infinite;
`;
