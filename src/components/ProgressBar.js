// general imports
import styled from 'styled-components';

// styles and wrappers
const MainBar = styled.div`
  width: 50%;
  margin: 0 auto;
  border-radius: 30px;
`;

// export main component
export default function ProgressBar({ className, value }) {
  const valPercent = value + "%";

  return (
    <MainBar className="progress">
      <div className={className} role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{width: valPercent, borderRadius: '30px'}}>
        {valPercent}
      </div>
    </MainBar>
  )
}
