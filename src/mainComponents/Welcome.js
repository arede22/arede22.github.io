// general imports
import { object } from 'prop-types';
import styled from 'styled-components';
import LazyLoad from 'react-lazy-load';
// components
import { ImageLoader } from '@components';
// styles
import { theme, ResumeBox, WelcomeStyle } from '@styles';
const { fontSizes } = theme;

// styles and wrappers
const StyledWrapper = styled.div`
  margin: 0 auto;
  margin-top: 80px;
  padding: 160px 0;
  text-align: center;
`;
const ImgStyle = styled.img`
  background-color: ${({ theme }) => theme.boxColor};
  border: 1px solid white;
  border-radius: 30px;
`;
const PStyle = styled.p`
  text-shadow: black 1px 1px;
`;
const ImgWrapper = styled(ImageLoader)`
  /* max-width: none; */
  /* width: 60%;
  height: 60%; */
`;

// export main component
export default function Welcome({ theme }) {
  const notProd = process.env.NODE_ENV !== 'production';

  return (
    <StyledWrapper>
      <h1>Hi, I'm Anika Rede.</h1>
      {!!notProd &&
        <PStyle>My website looks a lil jank but I'm always tinkering with new things!</PStyle>
      }
      <LazyLoad
      debounce={false}
      offsetVertical={100}>
        <ImageLoader src={theme.profilePic} alt="This is me!" />
      </LazyLoad>

      <WelcomeStyle>
        <h5>Allow me to introduce myself!</h5>
        <PStyle>
          I started out my CS career a couple years ago and am currently looking for an internship
          <br /> that can give me some experience in software engineering!
        </PStyle>
        {!!notProd &&
          <PStyle>
            <br /> I started out my CS career a couple years ago and almost immediately found my passion in the field: natural language processing.
            <br /> However, I want to acquaint myself with software engineering and AI/ML as a bridge before delving into NLP.
            <br /> Currently, I am looking for an internship that can give me some experience in SWE, NLP, or animation.
          </PStyle>
        }
        <ResumeBox />
      </WelcomeStyle>
    </StyledWrapper>
  )
};

Welcome.propTypes = {
  theme: object.isRequired
}
