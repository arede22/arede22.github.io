// general imports
import { createGlobalStyle } from 'styled-components';
import { theme } from '@styles';
// styles
const { fonts, fontSizes, imgSrcs } = theme;

const BlogGlobal = createGlobalStyle`
  html, body {
    margin: 0;
    font-size: ${fontSizes.sm3};
    font-family: ${fonts.Lucida};
    background: ${({ theme }) => theme.body} url(${imgSrcs.berk});
    color: ${({ theme }) => theme.textColor};
    height: 100%;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width: 1366px) {
      background-attachment: scroll;
    }
  }
  h1, p {
    text-align: center;
  }
  h1 {
   font-family: ${fonts.Oswald};
   text-transform: uppercase;
   text-shadow: black 2px 2px;
   font-size: ${fontSizes.lg};

    @media (max-width: 600px) {
      font-size: ${fontSizes.med2};
    }
  }
  p {
    font-size: ${fontSizes.sm1};
    text-shadow: black .5px .5px;

    @media (max-width: 600px) {
      font-size: ${fontSizes.sm0};
    }
  }
`;

// export
export default BlogGlobal;
