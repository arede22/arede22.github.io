// general imports
import { useState, useEffect } from 'react';
import styled from 'styled-components';
// styles
import { theme, colors } from '@styles';
const { fontSizes } = theme;
// dropdown fix: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_dropdown_navbar

// styles and wrappers
const NavWrapper = styled.nav`
  text-align: center;
  padding: 10px 0px;
  background-color: ${({ theme }) => theme.navBg };
  width: 100%;
  margin: 0 auto;
`;
const ULWrapper = styled.ul`
  margin: 0;
  display: flex;
  text-align: center;
  justify-content: space-around;
  padding: 4px 16px;

  @media (max-width: 600px) {
    display: inline-block;
    justify-content: center;
  }
`;
const LIWrapper = styled.li`
  display: flex;
  padding: 6px 8px;
`;
const OptLIWrapper = styled(LIWrapper)`
  @media (max-width: 600px) {
    display: none;
  }
`;
const NavLink = styled.a`
  font-size: ${fontSizes.sm3};
  color: ${({ theme }) => theme.navFg };

  &:hover {
    color: ${({ theme }) => theme.navHg };
  }
`;
const HomeNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.navHomeFg };

  @media (max-width: 600px) {
    &:hover::after {
      content: '';
      border: solid ${({ theme }) => theme.navHomeHg };
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }

    &::after {
      content: '';
      border: solid white;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 3px;
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }
  }
`;

// export main component
export default function StyledNav() {
  const [color, setColor] = useState(colors.moreSeaBlue);

  const toggleColor = (e) => {
    var tempColor = e.currentTarget.style.color;
    e.currentTarget.style.color = color;
    setColor(tempColor);
  };

  var prevColor;

  const onHoverIn = (e) => {
    prevColor = e.currentTarget.style.color;
    e.currentTarget.style.color = colors.moreSeaBlue;
  };
  const onHoverOut = (e) => {
    e.currentTarget.style.color = prevColor;
  }

  return (
    <NavWrapper>
      <ULWrapper>
        <LIWrapper>
          <HomeNavLink href='/' id='home' onMouseOver={onHoverIn} onMouseOut={onHoverOut}> Home </HomeNavLink>
        </LIWrapper>
        <OptLIWrapper className="extra">
          <NavLink href="#intro-anchor" id='intro' onMouseOver={onHoverIn} onMouseOut={onHoverOut}> Intro </NavLink>
        </OptLIWrapper>
        <OptLIWrapper className="extra">
          <NavLink href="#portfolio-anchor" id='portfolio' onMouseOver={onHoverIn} onMouseOut={onHoverOut}> Portfolio </NavLink>
        </OptLIWrapper>
        <OptLIWrapper className="extra">
          <NavLink href="#contactme-anchor" id='contact-me' onMouseOver={onHoverIn} onMouseOut={onHoverOut}> Contact Me </NavLink>
        </OptLIWrapper>
        {/*<OptLIWrapper className="extra">
          <NavLink href="/blog" onMouseOver={onHoverIn} onMouseOut={onHoverOut}> Blog </NavLink>
        </OptLIWrapper>*/}
        {/*<OptLIWrapper className="extra">
          <NavLink href="/projects" onMouseOver={onHoverIn} onMouseOut={onHoverOut}> Projects </NavLink>
        </OptLIWrapper>*/}
        <OptLIWrapper className="extra">
          <NavLink href="resume.pdf" target="_blank" rel="nofollow noopener noreferrer" onMouseOver={onHoverIn} onMouseOut={onHoverOut}> Resume </NavLink>
        </OptLIWrapper>
      </ULWrapper>
    </NavWrapper>
  )
};
