import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AnimationStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';
import 'react-awesome-slider/dist/styles.css';
import Cover from '../assets/img/Cover1.jpg';
import Cover1 from '../assets/img/yut-cov2.png';
import Cover2 from '../assets/img/ScaryFamilyBanner.jpg';



const AutoplaySlider = withAutoplay(AwesomeSlider);

function Slider(){
  return(
    <div className="container mt-1 sliderDiv" >
    <AutoplaySlider 
    animation="foldOutAnimation"
    cssModule={[CoreStyles, AnimationStyles]}
    mobileTouch={true}
    fillParent={false}
    className="sizeChange"
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={3000}
  >
    <div>
    <img className="img-fluid sizeChange slider-img" src={Cover} alt="PuniPuni Studio Blender Cover" ></img>
    </div>
    <div ><img className="img-fluid slider-img" src={Cover1} alt="Punipuni Code Channel"></img></div>
    <div ><img className="img-fluid slider-img" src={Cover2} alt="Mushroom Img"></img></div>
    
  </AutoplaySlider>
  </div>
  );
}

export default Slider;