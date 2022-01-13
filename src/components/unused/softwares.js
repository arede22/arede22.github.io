// general imports
import styled from 'styled-components';
// styles
import { colors, Box } from '@styles';

// styles and wrappers
const Rows = styled.ul`
  display: flex;
  padding: 0 15px;
`;
const Cols = styled.div`
  flex: 50%;
`;

// export main component
export default function Softwares() {
  return (
    <Box>
      <h3> Languages/Software Skills </h3>
      <Rows>
        <Cols>
          <li> Kotlin </li>
          <li> JavaScript </li>
          <li> Python </li>
          <li> PyTorch </li>
          <li> C/C++ </li>
          <li> AutoCAD </li>
          <li> COMSOL </li>
          <li> Photoshop </li>
        </Cols>
        <Cols>
          <li> Swift </li>
          <li> HTML/CSS </li>
          <li> Java </li>
          <li> Tensorflow </li>
          <li> React </li>
          <li> MATLAB </li>
          <li> SolidWorks </li>
        </Cols>
      </Rows>
    </Box>
  )
}
