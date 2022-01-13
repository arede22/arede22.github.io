// general imports
import styled from 'styled-components';
// components
import { Banner, StyledNav } from '@components';
// dropdown fix: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_dropdown_navbar
// https://www.w3schools.com/bootstrap/bootstrap_dropdowns.asp

// styles and wrappers
const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  transition: top 0.2s ease-in-out;
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

// export main component
export default function Nav() {
  return (
    <HeaderWrap id="navbar">
      <Banner />
      <StyledNav />
    </HeaderWrap>
  )
};
