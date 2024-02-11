import {memo} from 'react';
import {ThemeProvider as ScThemeProvider} from 'styled-components';

import {StyledEngineProvider} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';

import {darkThemeColors, lightThemeColors} from './default_variables';

const Theme = ({children}: {children: React.ReactNode}) => {
  const theme = createTheme();
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ScThemeProvider theme={darkThemeColors}>{children}</ScThemeProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
export default memo(Theme);
