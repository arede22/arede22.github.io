// general imports
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// components
import { WorkExperience } from '@components';
// styles
import { theme, Anchor, Box } from '@styles';
const { colors, fontSizes } = theme;
// College info, courses, languages (progress bars), softwares
// Skills acquired, desired
// WorkExperience -- timeline w/ work and class extension projects
  // clubs, work --> next is portfolio tree

// styles and wrappers
const StyledWrapper = styled.div`
  margin: 10px 0;

  @media (max-width: 600px) {
    display: inline-block;
  }
`;
const H2Style = styled.h2`
  text-align: center;
  justify-content: center;
  margin: 75px 0px;
`;
const Rows = styled.ul`
  display: flex;
`;
const Cols = styled(StyledWrapper)`
  flex: 50%;
`;
const ULWrapper = styled.ul`
  color: white;
  padding: 0 40px;
`;
const LIWrapper = styled.li`
  color: white;
  line-height: 1.5;
  font-size: ${fontSizes.sm1};
`;
const PStyle = styled.p`
  text-align: left;
`;

// export main component
export default function Intro({ theme }) {
  return (
    <React.Fragment>
      <StyledWrapper>
      <Anchor name="Intro" id="intro-anchor"></Anchor>
        <H2Style>Intro & About Me ❤</H2Style>
        <StyledWrapper>
          <Box>
            <h4> Current Coursework </h4>
            <ULWrapper>
              <LIWrapper> Intro to ML (Python, Jupyter Notebook) </LIWrapper>
              <LIWrapper> Deep Learning (Jupyter Notebook) </LIWrapper>
              <LIWrapper> (Auditing) Natural Language Processing </LIWrapper>
              <LIWrapper> (Auditing) Computer Architecture (C) </LIWrapper>
            </ULWrapper>
            <h4> Electrical Engineering and Computer Science Major </h4>
            <ULWrapper>
              <LIWrapper> Intro to CS (Python, Scheme, SQL) </LIWrapper>
              <LIWrapper> Data Structures & Algorithms (Java) </LIWrapper>
              <LIWrapper> Discrete Math and Probability Theory </LIWrapper>
              <LIWrapper> Probability and Random Processes (Jupyter Notebook) </LIWrapper>
              <LIWrapper> Optimization Models in Engineering (Jupyter Notebook) </LIWrapper>
              <LIWrapper> Designing Information Devices and Systems (Python) </LIWrapper>
            </ULWrapper>
            <h4> Linguistics Minor </h4>
            <ULWrapper>
              <LIWrapper> Intro to Linguistics </LIWrapper>
              <LIWrapper> Intro to Syntax </LIWrapper>
            </ULWrapper>
          </Box>
          <Box>
            <h4> Languages/Software Skills </h4>
            <Rows>
              <Cols>
              <h4> Languages </h4>
                <LIWrapper> JavaScript </LIWrapper>
                <LIWrapper> Python </LIWrapper>
                <LIWrapper> Java </LIWrapper>
                <LIWrapper> HTML/CSS </LIWrapper>
                <LIWrapper> Kotlin </LIWrapper>
                <LIWrapper> Swift </LIWrapper>
                <LIWrapper> C/C++ </LIWrapper>
              </Cols>
              <Cols>
              <h4> Other </h4>
                <LIWrapper> PyTorch </LIWrapper>
                <LIWrapper> COMSOL </LIWrapper>
                <LIWrapper> AutoCAD </LIWrapper>
                <LIWrapper> Tensorflow </LIWrapper>
                <LIWrapper> React </LIWrapper>
                <LIWrapper> Jupyter Notebook </LIWrapper>
                <LIWrapper> MATLAB </LIWrapper>
                <LIWrapper> SolidWorks </LIWrapper>
                <LIWrapper> Photoshop, Illustrator </LIWrapper>
              </Cols>
            </Rows>
          </Box>
          <Box>
            <h4> Skills </h4>
            <ULWrapper>
              <LIWrapper> Data visualization and simulation softwares for research </LIWrapper>
              <LIWrapper> Building software tools for use around offices and within academia </LIWrapper>
              <LIWrapper> Designing engineering systems for real-world use in Engineers Without Borders </LIWrapper>
              <LIWrapper> EE and CS hands-on experience and extending course projects beyond the classroom </LIWrapper>
              <LIWrapper> Mathematical skills to understand in-depth background on Machine Learning processes </LIWrapper>
            </ULWrapper>
          </Box>
          <Box>
            <h4> Clubs </h4>
            <ULWrapper>
              <LIWrapper> Engineers Without Borders
                <PStyle>
                  Panama Team for two semesters where we just finished building a water distribution system for a poorly-funded Panamanian community, <br />
                  Starting new project next semester: hoping for a local project toward helping provide for the homeless in Berkeley/SF areas <br />
                  Committee member: events coordinator and media outreach
                </PStyle>
              </LIWrapper>
              <LIWrapper> Association of Women in EE&CS
                <PStyle>
                  Networking events with industry professionals and professors coming in to talk woman-to-woman how to succeed in the tech world <br />
                  Committee Member
                </PStyle>
              </LIWrapper>
              <LIWrapper> Computer Science Kickstart
                <PStyle>
                  Intro to computer science week for female pre-freshmen, <br />
                  Participated in the program myself when I entered Berkeley and gave back as a committee member on Industrial Relations
                </PStyle>
              </LIWrapper>
            </ULWrapper>
          </Box>
          <Box>
            <WorkExperience />
          </Box>
          <Box>
            <h4> Passions </h4>
            <ULWrapper>
              <LIWrapper> Creating worlds </LIWrapper>
              <LIWrapper> Reading </LIWrapper>
              <LIWrapper> Drinking coffee </LIWrapper>
              <LIWrapper> Music </LIWrapper>
              <LIWrapper> Languages </LIWrapper>
              <LIWrapper> Learning </LIWrapper>
              <LIWrapper> Animations/cartoons/games </LIWrapper>
              <LIWrapper> Abstract math (linear algebra) </LIWrapper>
            </ULWrapper>
          </Box>
        </StyledWrapper>
      </StyledWrapper>
    </React.Fragment>
  )
};
