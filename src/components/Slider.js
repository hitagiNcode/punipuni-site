import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import 'react-awesome-slider/dist/styles.css';
import Cover1 from '../assets/img/yut-cov2.png';


const AutoplaySlider = withAutoplay(AwesomeSlider);

function Slider(){
  return(
    <AutoplaySlider 
    animation="foldOutAnimation"
    cssModule={[CoreStyles, AnimationStyles]}
    mobileTouch={true}
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={3000}
  >
    <div ><img className="img-fluid" src={Cover1} alt=""></img></div>
    <div >2</div>
    <div >3</div>
  </AutoplaySlider>
  );
}

export default Slider;