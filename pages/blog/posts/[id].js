// general imports
import { ThemeProvider } from 'styled-components';
import { getAllPostIds, getPostData } from 'lib/posts'
// components
import { Header } from '@mainComponents';
// styles
import { theme, useDarkMode, BlogGlobal } from '@styles';
const { lightTheme, darkTheme } = theme;

export default function Post({ postData }) {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <ThemeProvider theme={themeMode}>
      <BlogGlobal />
      <Header title={postData.title} />

      <h1> BLOG ❤ </h1>

      <div>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      </div>

    </ThemeProvider>
  )
};

export async function getStaticPaths() {
  // return list of possible value for id
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  // fetch necessary data for blog post using params.id
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
