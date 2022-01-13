// general imports
import styled from 'styled-components';
// styles
import { theme, Box } from '@styles';
const { fontSizes } = theme;

// export main component
export default function Courses() {
  return (
    <Box>
      <h3> Major Coursework </h3>
      <ul>
        <li> Intro to Computer Science </li>
        <li> Data Structures & Algorithms </li>
        <li> Discrete Mathematics and Probability Theory </li>
        <li> Probability and Random Processes </li>
        <li> Optimization Models in Engineering </li>
        <li> (Audited) Natural Language Processing </li>
        <li> Computer Architecture </li>
        <li> Designing Information Devices and Systems </li>
      </ul>
      <h3> Minor Coursework </h3>
      <ul>
        <li> Intro to Linguistics </li>
        <li> Intro to Syntax and Semantics </li>
      </ul>
    </Box>
  )
}
