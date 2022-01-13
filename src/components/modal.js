// general imports
import { string } from 'prop-types';
import styled from 'styled-components';
import LazyLoad from 'react-lazy-load';
// components
import { ImageLoader } from '@components';

// styles and wrappers
const ImgWrapper = styled.a`
  display: block;
  margin: 0 auto;
  width: 90%;
`;
// W3 Modal
// https://www.w3schools.com/bootstrap/bootstrap_modal.asp
// https://www.w3schools.com/bootstrap/bootstrap_carousel.asp

// export main component
export default function Modal({ trigger, img, alt }) {
  return (
    <ImgWrapper>
      <LazyLoad
        debounce={false}
        offsetVertical={100}>
        <ImageLoader id={trigger} src={img} alt={alt} />
      </LazyLoad>
    </ImgWrapper>
  )
};

Modal.propTypes = {
  trigger: string.isRequired,
  img: string.isRequired,
  alt: string.isRequired,
}
