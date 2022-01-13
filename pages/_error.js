// general imports
import { number } from 'prop-types';
import { ThemeProvider } from 'styled-components';
// components
import { Header } from '@mainComponents';
import { theme, useDarkMode, ErrorGlobal } from '@styles';
const { lightTheme, darkTheme } = theme;

export default function Error({ statusCode }) {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <ErrorGlobal />
      <Header title={"Anika Rede: Software Engineer"} />
      <h1>Error!</h1>
      <p>
        {statusCode
          ? `A ${statusCode} error occurred on server. Please try again later!`
          : 'An error occurred on client'}
      </p>
    </ThemeProvider>
  )
}

export async function getStaticProps({ res, err }) {
  // fetch necessary data for blog post using params.id
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return {
    props: {
      statusCode
    }
  }
}

Error.propTypes = {
  statusCode: number.isRequired
}
