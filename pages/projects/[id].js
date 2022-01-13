// general imports
import { ThemeProvider } from 'styled-components';
import { getAllProjectIds, getProjectData } from 'lib/projects'
// components
import { Header } from '@mainComponents';
// styles
import { theme, useDarkMode, ProjectsGlobal } from '@styles';
const { lightTheme, darkTheme } = theme;

// https://www.w3schools.com/bootstrap/bootstrap_pagination.asp

export default function Project({ projectData }) {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <ProjectsGlobal />
      <Header title={projectData.title} />

      <h1> Projects ❤ </h1>

      <div>
      {projectData.title}
      <br />
      {projectData.id}
      <br />
      {projectData.date}
      </div>

    </ThemeProvider>
  )
};

export async function getStaticPaths() {
  // return list of possible value for id
  const paths = getAllProjectIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // fetch necessary data for blog post using params.id
  const projectData = getProjectData(params.id)
  return {
    props: {
      projectData
    }
  }
}
