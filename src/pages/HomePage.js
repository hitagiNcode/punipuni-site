import React from 'react';
import AwesomeCards from '../components/AwesomeCards';
import Slider from '../components/Slider';
import Logo from '../assets/img/logo-puni.png'
//<Carousel />  heronun altından cikarttım dandik oldugu için
//<Hero title={props.title} subTitle={props.subTitle} text={props.text} />

function HomePage (props){
    return (
        <div>
        <Slider/>
        
        <div className="container">
            <div className="row blue">
			  <div className="col-xl-12">&nbsp;</div>
			  <div className="col-xl-12">&nbsp;</div>
		  	</div>
            <div className="row">
            <div className="col-xl-3 offset-xl-1 text-center mt-5">
					<img src={Logo} width="150" height="150" alt="" />
			</div>
            <div className="col">
            <h1 className="mt-5 text-center">Welcome to PuniPuni Studios!</h1>
            <p>PuniPuni Studios is a game studio based in Antalya, Turkey.<br/>
                 We were founded in 2019 and since then it’s been a great journey to create 
                 a studio recalled by its’ games. We created several games while we continue this journey.</p>
            </div>
            </div>
        </div>
        <AwesomeCards />
        </div>
        
    );

}




export default HomePage;