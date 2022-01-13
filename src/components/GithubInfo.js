// general imports
import { number } from 'prop-types';
import styled from 'styled-components';
// styles
import { theme } from '@styles';
const { hrefs, fontSizes, iconSrcs } = theme;

const GithubWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;
const GithubLink = styled.a`
  font-size: ${fontSizes.sm1};
`;
const StyledGitHubInfo = styled.div`
  text-align: center;
  margin: auto;
`;
const Icon = styled.img`
  height: 24px;
  width: auto;
`;

// export main component
export default function GithubInfo({ stars, forks }) {
  return (
    <GithubWrapper>
      <GithubLink href={hrefs.webRepo} target="_blank" rel="nofollow noopener noreferrer">
        <div> Bye! </div>
        <StyledGitHubInfo>
          <span>
            <Icon src={iconSrcs.star} alt="Stars: "/>
            <span>{stars.toLocaleString()}</span>
          </span>
          <span>
            <Icon src={iconSrcs.fork} alt="Forks: " />
            <span>{forks.toLocaleString()}</span>
          </span>
        </StyledGitHubInfo>
      </GithubLink>
    </GithubWrapper>
  )
}

GithubInfo.propTypes = {
  stars: number.isRequired,
  forks: number.isRequired,
}
