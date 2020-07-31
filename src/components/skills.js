import React from 'react';
import styled from 'styled-components';
// styles
import { theme } from '@styles';
const { colors, fontSizes } = theme;
// bootstrap and js progress bars

// styles and wrappers
const ULWrapper = styled.ul`
  color: ${colors.transparentSeaBlue};
  padding: 0 40px;
`;
const LIWrapper = styled.li`
  color: ${colors.lightGray};
  line-height: 1.5;
`;
const H3Style = styled.h3`
  font-size: ${fontSizes.lg};
`;
const Box = styled.div`
  background-color: ${colors.halfTransparentGray};
  padding: 7.5px 20px 20px;
`;

// export main component
export default function Skills() {
  return (
    <Box>
      <h3> Skills </h3>
      <ul>
        <li> Data visualization and simulation softwares used practically for research </li>
        <li> Building software tools for use around offices and within academia </li>
        <li> Planning and designing engineering systems for real-world use in Engineers Without Borders </li>
        <li> EE and CS hands-on experience and extending course projects beyond the classroom </li>
        <li> Mathematical skills to understand in-depth background on Machine Learning processes </li>
        <li> People skills, smooth communication, & true personality </li>
      </ul>
    </Box>
  )
}
