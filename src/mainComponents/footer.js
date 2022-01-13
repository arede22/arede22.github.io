// general imports
import { useState, useEffect } from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';
// styles
import { theme } from '@styles';
const { hrefs, fontSizes, iconSrcs } = theme;
// stackoverflow, hackerrank, spotify
// CALHACKS
// dailycal

// constants
const ref = [
  { href: hrefs.mail, src: iconSrcs.mail },
  { href: hrefs.github, src: iconSrcs.github },
  { href: hrefs.ig, src: iconSrcs.ig },
  { href: hrefs.linkedin, src: iconSrcs.linkedin }
];
const links = ref.map(link => {
  link.key = `nav-link-${link.href}-${link.src}`.replace(/[^a-zA-Z0-9]/g, '')
  return link
});

// styles and wrappers
const StyledWrapper = styled.div`
  margin: auto;
  align: center;
  display: flex;
  justify-content: center;
`;
const FooterStyle = styled.footer`
  width: 80%;
  align: center;
  padding-top: 40px;
  margin: 25px auto;
`;
const ULWrapper = styled.ul`
  background-color: ${({ theme }) => theme.footerBg };
  display: flex;
  justify-content: space-around;
  border-top: 3px solid ${({ theme }) => theme.footerBorder };
  padding: 10px 25px;
  margin: 10px 15px;
  margin-top: 0;
`;
const LIWrapper = styled.li`
  display: flex;
  padding: 10px 15px;
`;
const ImgStyle = styled.img`
  margin: 0 auto;

  @media (max-width: 600px) {
    height: 16px;
    width: 16px;
  }
`;

// export main component
export default function Footer({ theme }) {
  // taken from bchiang7/v4
  var [githubInfo, setGithubInfo] = useState({
    stars: 0,
    forks: 0
  });

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }
    fetch('https://api.github.com/users/arede22/repos/theanikarede')
    .then(response => response.json())
    .then(json => {
      const { stargazers_count, forks_count } = json;
      setGithubInfo({stargazers_count, forks_count});
    })
    .catch(e => console.error(e));
  }, []);

  return (
    <StyledWrapper>
      <FooterStyle>
        <ULWrapper>
          {links.map(({ key, href, src }) => (
            <LIWrapper key={key}>
              <a href={href} target="_blank" rel="nofollow noopener noreferrer">
                <ImgStyle src={src + '.png'} alt={src.replace('/static/footer/', "Anika's ")} onMouseOver={e => {e.currentTarget.src = src + '-hover.png'}} onMouseOut={e => {e.currentTarget.src = src + '.png'}} />
              </a>
            </LIWrapper>
          ))}
        </ULWrapper>
        { !!0 &&
          !!githubInfo.stars &&
          !!githubInfo.forks &&
          <GithubInfo stars={githubInfo.stars} forks={githubInfo.forks} />
        }
        <StyledWrapper>
          <p>
            Made by Anika Rede | <a target="_blank" href={hrefs.webRepo} rel="nofollow noopener noreferrer"> GitHub </a>
          </p>
        </StyledWrapper>
      </FooterStyle>
    </StyledWrapper>
  )
};

Footer.propTypes = {
  theme: object.isRequired
}
