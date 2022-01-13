// general imports
import styled from 'styled-components';
// styles
import { theme } from '@styles';
const { fontSizes } = theme;

// styles and wrappers
const BannerWrapper = styled.div`
  background-color: ${({ theme }) => theme.bannerBg};
  margin: 0 auto;
  width: 100%;
  display: inline-block;
`;
const Name = styled.ul`
  display: flex;
  text-align: center;
  justify-content: space-around;
  margin: 0 auto;
  width: 80%;
  padding: 0 40px;

  @media (max-width: 600px) {
    padding: 0 10px;
  }
`;
const Phonology = styled(Name)`
  padding: 0 60px;
  width: 70%;

  @media (max-width: 330px) {
    display: none;
  }
`;
const NameLi = styled.li`
  display: flex;
  padding: 4px 8px;
  color: ${({ theme }) => theme.bannerFg };
  text-shadow: black 1px 1px;

  @media (max-width: 600px) {
    font-size: ${fontSizes.sm1};
  }
`;
const PhonLi = styled(NameLi)`
  font-size: ${fontSizes.sm0};
  font-style: italic;
  padding: 0 8px 8px;

  @media (max-width: 600px) {
    font-size: ${fontSizes.sm00};
  }
`;

// export main component
export default function Banner() {
  return (
    <BannerWrapper>
      <Name>
        <NameLi> A </NameLi>
        <NameLi> N </NameLi>
        <NameLi> I </NameLi>
        <NameLi> K </NameLi>
        <NameLi> A </NameLi>
      </Name>
      <Phonology>
        <PhonLi> [ uh  </PhonLi>
        <PhonLi> - nee </PhonLi>
        <PhonLi> - kah ] </PhonLi>
      </Phonology>
    </BannerWrapper>
  )
};
