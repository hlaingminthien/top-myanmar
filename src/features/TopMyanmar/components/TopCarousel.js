import React, { Component }  from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fold-out-animation';
import bg1 from '../../../assets/image/carosel/topmyanmar.jpg'
// import bg2 from '../../../assets/image/carosel/topmyanmar1.jpg'
// import bg3 from '../../../assets/image/carosel/3.jpg'
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import {withMedia} from "react-media-query-hoc";

 
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Carousel = props => {
  const {media} = props;
  return(
    <AutoplaySlider style={{height: media.desktop ? 600 : media.tablet ? 500 : "100%"}} play={true} bullets={false} transitionDelay={20}
    interval={6000} cssModule={AwesomeSliderStyles}>
        <div data-src={bg1} />
        {/* <div data-src={bg2} /> */}
        {/* <div data-src={bg3} /> */}
      </AutoplaySlider>
      )
}

export default withMedia(Carousel);
  