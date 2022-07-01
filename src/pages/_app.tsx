import '../styles/globals.ts';
import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globals';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import FontStyles from '../styles/fontStyle';
import { CharacterProvider } from '../hooks/useCharacter';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CharacterProvider>
      <ThemeProvider theme={theme}>
        <FontStyles />
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </CharacterProvider>
  );
}

export default MyApp;
