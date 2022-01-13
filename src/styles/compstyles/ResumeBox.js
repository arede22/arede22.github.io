// general imports
import styled from 'styled-components';
// styles
import { theme } from '@styles';
const { fontSizes } = theme;

const ResumeDrop = styled.div`
  width: 40%;
  border-radius: 12px;
  margin: 10px auto;
  background-color: ${({ theme }) => theme.roundedBoxColor };
  width: 60%;
  padding: 20px 20px 40px;

  @media (max-width: 600px) {
    width: 50%;
  }
`;
const ResumeButton = styled.a`
  width: 35%;
  border: 1px solid white;
  border-radius: 8px;
  padding: 7.5px;
  color: white;
  background-color: ${ ({ theme }) => theme.resumeButtonColor };
  font-size: ${fontSizes.sm2};
  text-shadow: black .5px .5px;

  &:hover {
    color: ${({ theme }) => theme.resumeHoverFg };
  }
`;
const PStyle = styled.p`
  text-shadow: black 1px 1px;
`;

export default function ResumeBox() {
  return (
    <ResumeDrop>
      <PStyle> Take a quick peek at my resumé! </PStyle>
      <ResumeButton href="resume.pdf" target="_blank"> Resumé </ResumeButton>
    </ResumeDrop>
  )
}
