// general imports
import { ThemeProvider } from 'styled-components';
// components
import { Header, Nav, Welcome, Intro, Portfolio, ContactMe, Footer } from '@mainComponents';
import { Toggle, TopButton } from '@components';
// styles
import { theme, useDarkMode, GlobalStyle } from '@styles';
const { lightTheme, darkTheme } = theme;
// more personal type things: instagram, facebook, profiles and hobbies and spotify -- can add api calls here

// export main component
export default function Home() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const isLight = theme === 'light';

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Header title="Anika Rede: Software Engineer" />

      <Nav />

      <Welcome theme={themeMode} />
      <Intro theme={themeMode} />
      <Portfolio theme={themeMode} />
      <ContactMe theme={themeMode} />

      <Footer theme={themeMode} />

      <TopButton theme={themeMode} isLight={isLight} />
      {/*<Toggle toggleTheme={toggleTheme} isLight={isLight} />*/}

    </ThemeProvider>
  )
};
