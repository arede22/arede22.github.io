// general imports
import styled from 'styled-components';
// styles
import { theme } from '@styles';
const { fontSizes } = theme;

const WelcomeStyle = styled.div`
  text-align: center;
  font-size: ${fontSizes.sm1};
  line-height: 1.5;
  margin: 5px 20px;

  @media (max-width: 600px) {
    font-size: ${fontSizes.sm0};
  }
`;

export default WelcomeStyle;
