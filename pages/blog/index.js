// general imports
import { ThemeProvider } from 'styled-components';
// components
import { Header } from '@mainComponents';
import { theme, useDarkMode, BlogGlobal } from '@styles';
const { lightTheme, darkTheme, imgSrcs } = theme;
// blog https://nextjs.org/learn/basics/navigate-between-pages/pages-in-nextjs

export default function Blog() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <BlogGlobal />
      <Header title="BLOG ❤" />

      <h1> BLOG ❤ </h1>

      <img height='60' width='60' src={imgSrcs.rainbow} alt="spongebob rainbow" />

      <p> OG </p>
    </ThemeProvider>
  )
};
