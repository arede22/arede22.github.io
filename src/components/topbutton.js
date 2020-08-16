// general imports
import { string } from 'prop-types';
import styled from 'styled-components';
// styles
import { theme } from '@styles';
const { fontSizes } = theme;

// styles and wrappers
const Button = styled.button`
  display: none;
  right: 30px;
  background-color: ${({ theme }) => theme.buttonBg };
  position: fixed;
  bottom: 20px;
  z-index: 99;
  border: none;
  outline: none;
  padding: 15px;
  border-radius: 30px;
  font-size: ${fontSizes.sm1};
  color: ${({ theme }) => theme.textColor};

  &:hover {
    background-color: ${({ theme }) => theme.buttonHoverBg };
  }

  @media (max-width: 600px) {
    font-size: ${fontSizes.sm0};
  }

`;
const ImgStyle = styled.img`
  height: 14px;
  width: 16px;
`;

export default function TopButton({ theme }) {

  return (
    <Button id="scrolltop">Top <ImgStyle src={theme.up} /></Button>
  )
};

TopButton.propTypes = {
  theme: string.isRequired
}
