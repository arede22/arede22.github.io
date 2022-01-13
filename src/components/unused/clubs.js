// general imports
import styled from 'styled-components';
// styles
import { theme, Box } from '@styles';
const { fontSizes } = theme;

// export main component
export default function Clubs() {
  return (
    <Box>
      <h3> Clubs </h3>
      <ul>
        <li> Engineers Without Borders
          <ul>
            <li> Panama Team for two semesters where we just finished building a water distribution system for a poorly-funded Panamanian community </li>
            <li> Starting new project next semester: hoping for a local project toward helping provide for the homeless in Berkeley/SF areas </li>
          </ul>
        </li>
        <li> Computer Science Kickstart
          <ul>
            <li> Intro to computer science week for female pre-freshmen </li>
            <li> Participated in the program myself when I entered Berkeley and gave back as a committee member on Industrial Relations </li>
          </ul>
        </li>
        <li> Association of Women in EECS
          <ul>
            <li> Networking events with industry professionals and professors coming in to talk woman-to-woman how to succeed in the tech world </li>
          </ul>
        </li>
      </ul>
    </Box>
  )
}
