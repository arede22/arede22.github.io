import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import media from './media';
const { colors, fonts, imgSrcs, fontSizes } = theme;

// theming of globalstyle?
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-size: ${fontSizes.sm3};
    font-family: ${fonts.Lucida};
    color: white;
    background: ${colors.darkGray} url(${imgSrcs.backgroundDark}) repeat-y center;
    background-size: 100%;
    background-position-y: top;

    @media (max-width: 600px) {
      background: ${colors.darkGray} url(${imgSrcs.backgroundDarkSm}) repeat-y center;
    }

    @media ${media.tablet} {
      max-width: 800px;
    }

    @media ${media.laptop} {
      max-width: 1000px;
    }

    @media ${media.laptopL} {
      max-width: 1200px;
    }

    @media ${media.desktop} {
      max-width: 1400px;
    }

  }
  h1, h2, h3 {
   font-family: ${fonts.Oswald};
   text-transform: uppercase;
   text-shadow: black 2px 2px;
  }
  h1 {
    font-size: ${fontSizes.lg};

    @media (max-width: 600px) {
      font-size: ${fontSizes.med2};
    }
  }
  h2 {
    font-size: ${fontSizes.med2};

    @media (max-width: 600px) {
      font-size: ${fontSizes.med1};
    }
  }
  h3 {
    font-size: ${fontSizes.med1};

    @media (max-width: 600px) {
      font-size: ${fontSizes.sm3};
      text-shadow: black 1px 1px;
    }
  }
  h4 {
    font-size: ${fontSizes.sm3};
    text-shadow: black 1px 1px;

    @media (max-width: 600px) {
      font-size: ${fontSizes.sm2};
    }
  }
  h5 {
    font-size: ${fontSizes.sm2};
    text-shadow: black 1px 1px;

    @media (max-width: 600px) {
      font-size: ${fontSizes.sm1};
    }
  }
  p {
    font-size: ${fontSizes.sm1};
    text-shadow: black .5px .5px;

    @media (max-width: 600px) {
      font-size: ${fontSizes.sm0};
    }
  }
  li {
    text-shadow: black .5px .5px;
  }
`;

// export
export default GlobalStyle;
