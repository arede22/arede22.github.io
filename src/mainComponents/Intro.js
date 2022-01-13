// general imports
import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';
// components
import { WorkExperience, ProgressBar } from '@components';
// styles
import { theme, Box } from '@styles';
const { fontSizes } = theme;
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
  padding: 0 40px;
`;
const LIWrapper = styled.li`
  line-height: 1.5;
  font-size: ${fontSizes.sm1};
`;
const PStyle = styled.p`
  text-align: left;
`;
const UsedLanguages = styled.div`
  margin-left: 20px;
  marginTop: 20px;
`;
const Language = styled.p`
  text-align: left;
  margin-left: 40px;
`;
const PieChart = styled.div`
  margin: 20px auto;
  /* display: inline-block; */
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: conic-gradient(
      #5cb85c 270deg,
      #5bc0de 0 330deg,
      #d9534f 0);
`;
const Legend = styled.ul`
  list-style: none;
  font-size: 12px;
  text-align: center;
  text-shadow: none;
`;
const Key = styled.li`
  border: 3px solid lightgray;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  padding-top: 15px;
  margin: 10px;
`;
const Key1 = styled(Key)`
  background-color: #5cb85c;
`;
const Key2 = styled(Key)`
  background-color: #5bc0de;
`;
const Key3 = styled(Key)`
  background-color: #d9534f;
`;

// export main component
export default function Intro({ theme }) {
  return (
    <React.Fragment>
      <StyledWrapper>
      <a name="Intro" id="intro-anchor"></a>
        <H2Style>Intro & About Me ❤</H2Style>
          {/*<PieChart></PieChart>
          <Legend>
            <Key1>Green</Key1>
            <Key2>Blue</Key2>
            <Key3>Red</Key3>
          </Legend>*/}
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
              <LIWrapper> C# </LIWrapper>
              <LIWrapper> Kotlin </LIWrapper>
              <LIWrapper> Swift </LIWrapper>
            </Cols>
            <Cols>
            <h4> Other </h4>
              <LIWrapper> PyTorch </LIWrapper>
              <LIWrapper> AutoCAD </LIWrapper>
              <LIWrapper> Tensorflow </LIWrapper>
              <LIWrapper> React </LIWrapper>
              <LIWrapper> Jupyter Notebook </LIWrapper>
              <LIWrapper> Photoshop, Illustrator </LIWrapper>
            </Cols>
          </Rows>
          {/*<h4>% of repo code in language:</h4>
          <UsedLanguages>
            <ProgressBar className="progress-bar progress-bar-warning" value="99" />
            <p>Jupyter Notebook</p>
          </UsedLanguages>
          <h4>Most recent languages:</h4>
          <UsedLanguages>
            <Language>Javascript</Language>
              <ProgressBar className="progress-bar progress-bar-success" value="75" />
            <Language>Swift/Kotlin</Language>
              <ProgressBar className="progress-bar progress-bar-info" value="15" />
            <Language>Java</Language>
              <ProgressBar className="progress-bar progress-bar-danger" value="10" />
          </UsedLanguages>
          <PieChart className="piechart"></PieChart>*/}
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

        <WorkExperience />

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
    </React.Fragment>
  )
};

Intro.propTypes = {
  theme: object.isRequired
}
