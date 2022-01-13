// general imports
import { ThemeProvider } from 'styled-components';
// components
import { Header } from '@mainComponents';
import { theme, useDarkMode, ProjectsGlobal } from '@styles';
const { lightTheme, darkTheme, imgSrcs } = theme;

export default function Projects() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <ProjectsGlobal />
      <Header title="Details on Projects" />

      <h1> Projects </h1>

      <img height='60' width='60' src={imgSrcs.rainbow} alt="spongebob rainbow" />

      <p> OG </p>

    </ThemeProvider>
  )
};
