// general imports
import { createGlobalStyle } from 'styled-components';
import { theme } from '@styles';
// styles
const { fonts, fontSizes } = theme;

const ErrorGlobal = createGlobalStyle`
  html, body {
    font-size: ${fontSizes.sm3};
    font-family: ${fonts.Lucida};
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.textColor};
    position: relative;
    margin: 0;
    height: 100%;
    width: 100%;
  }
  h1, p {
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  h1 {
   font-family: ${fonts.Oswald};
   text-transform: uppercase;
   text-shadow: black 2px 2px;
   font-size: ${fontSizes.lg};
   top: 40%;

    @media (max-width: 600px) {
      font-size: ${fontSizes.med2};
    }
  }
  p {
    font-size: ${fontSizes.sm1};
    text-shadow: black .5px .5px;
    top: 50%;

    @media (max-width: 600px) {
      font-size: ${fontSizes.sm0};
    }
  }
`;

// export
export default ErrorGlobal;
