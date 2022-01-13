// general imports
import React from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';
// styles
import { theme } from '@styles';
const { fontSizes } = theme;

// styles and wrappers
const StyledWrapper = styled.div`
  margin: 30px 15px;
  margin-bottom: 240px;
  display: block;
  text-align: center;
`;
const H2Style = styled.h2`
  padding: 150px 0px 35px;
`;
const ContactBox = styled.div`
  margin: 10px auto;
  background-color: ${({ theme }) => theme.roundedBoxColor };
  width: 60%;
  border-radius: 15px;
  padding: 25px 20px;

  @media (max-width: 600px) {
    width: 50%;
  }
`;
const PStyle = styled.p`
  font-size: ${fontSizes.sm3};
  text-shadow: black 1px 1px;

  @media (max-width: 600px) {
    font-size: ${fontSizes.sm1};
  }
`;

// export main component
export default function ContactMe({ theme }) {
  return (
    <React.Fragment>
      <a name="Contact-Me" id="contactme-anchor"></a>
      <StyledWrapper>
        <H2Style> Contact Me </H2Style>
        <ContactBox>
          <PStyle>
            Thank you for browsing through my website!
            <br /> My contact info is below, e-mail works best for me!
          </PStyle>
        </ContactBox>
      </StyledWrapper>
    </React.Fragment>
  )
};

ContactMe.propTypes = {
  theme: object.isRequired
}
