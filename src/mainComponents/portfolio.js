// general imports
import React from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';
import LazyLoad from 'react-lazy-load';
// components
import { ImageLoader, Modal } from '@components';
// styles
import { theme, media, Box } from '@styles';
const { fontSizes, hrefs, imgSrcs } = theme;
// Currently exploring pet projects

// styles and wrappers
const ImgStyle = styled(ImageLoader)`
  margin: auto;
`;
const H2Style = styled.h2`
  text-align: center;
  justify-content: center;
  margin: 75px 0px;
`;
const H3Style = styled.h3`
  font-size: ${fontSizes.sm3};
`;
const ULWrapper = styled.ul`
  padding: 0 40px;
`;
const LIWrapper = styled.li`
  margin: 5px 0px;
`;
const StyledLink = styled.a`
  text-align: center;
`;
const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;
// https://interactive-img.com/dashboard
// https://intercom.help/geniallysupport/en/articles/3542392-turn-your-static-images-into-incredible-interactive-images-quickly-and-easily

// https://www.w3schools.com/bootstrap/bootstrap_grid_basic.asp

// Projects&Portfolio Interactive Tree -- class extensions, work, club --> see more pages somehow
// next is blogscape

// export main component
export default function Portfolio({ theme }) {
  const altText = (src) => {
    var alt = src.replace('/static/portfolio/', '').replace('.png', '');
    return alt;
  }

  return (
    <React.Fragment>
      <a name="Portfolio" id="portfolio-anchor"></a>
      <div>
        <H2Style> Portfolio </H2Style>
          <Box>
            <H3Style> Extensions of Class Projects </H3Style>
            <ULWrapper>
              <LIWrapper> Ancient Indian Astronomy Machine Learning Model
                <p>
                  <StyledLink href="https://youtu.be/2C_ckxoXi0E" target="_blank" rel="nofollow noopener noreferrer"> Presentation </StyledLink>
                </p>
              </LIWrapper>

              <LIWrapper> Voice-Activated Car -- Designing Information Devices/Systems Trained with PCA
                <Modal trigger="car" img={imgSrcs.car} alt={altText(imgSrcs.car)} />
              </LIWrapper>

              <LIWrapper> Mock GoogleMaps Berkeley-Localized -- Map Rastering, Autocomplete and Search, and Navigation
                <Modal trigger="map" img={imgSrcs.map} alt={altText(imgSrcs.map)} />
              </LIWrapper>

              <LIWrapper> Pixel Art Game -- Randomized Room Generation and Increasing Difficulty to Boss Level:
                <SpaceBetween>
                  <Modal trigger="randRooms" img={imgSrcs.randRooms} alt={altText(imgSrcs.randRooms)} />
                  <Modal trigger="boss" img={imgSrcs.boss} alt={altText(imgSrcs.boss)} />
                </SpaceBetween>
                <p>
                  <StyledLink href={hrefs.gameVid} target="_blank" rel="nofollow noopener noreferrer"> Click here for DEMO </StyledLink>
                </p>
              </LIWrapper>
            </ULWrapper>
          </Box>
          <Box>
            <H3Style> Personal Projects </H3Style>
            <ULWrapper>
              <LIWrapper> Current projects:
                <ULWrapper>
                  <LIWrapper> Personal website built with React and Next.js, allows playing with graphic design </LIWrapper>
                  <LIWrapper> Learning graphic design via Photoshop, Illustrator, and Maya </LIWrapper>
                  <LIWrapper> Original pixel art Gameboy game built from scratch </LIWrapper>
                  <LIWrapper> Image analysis to interpret and translate language with NLP using AI/ML </LIWrapper>
                </ULWrapper>
              </LIWrapper>
              <LIWrapper> Projected projects:
                <ULWrapper>
                  <LIWrapper> Safety app around Berkeley for students built using Swift </LIWrapper>
                  <LIWrapper> Modifying voice-activated car built last semester to be hooked up to bluetooth and Wi-Fi </LIWrapper>
                </ULWrapper>
              </LIWrapper>
            </ULWrapper>
          </Box>
          <Box>
            <H3Style> Exploring pet projects </H3Style>
            <ULWrapper>
              <LIWrapper> Learning graphic design and animation software </LIWrapper>
              <LIWrapper> Exploring beginner projects using NLP analysis with AI/ML </LIWrapper>
              <LIWrapper> Safety app around Berkeley for Cal students </LIWrapper>
              <LIWrapper> Improving on voice-activated car built last semester </LIWrapper>
              <LIWrapper> Contributing to friends' personal projects </LIWrapper>
            </ULWrapper>
          </Box>
      </div>
      {/*<div dangerouslySetInnerHTML={{
        __html: "<applet code='/gamecode/proj3/byow/Core/Main.class' width='300' height='300'> Can't load </applet>" // the whole markup string you want to inject
      }}></div>*/}
    </React.Fragment>
  )
};

Portfolio.propTypes = {
  theme: object.isRequired
}
