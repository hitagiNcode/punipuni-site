import React from 'react';
import AwesomeCards from '../components/AwesomeCards';
import Slider from '../components/Slider';
import Logo from '../assets/img/punipuni-studio-pc.png'

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
            <div className="col-xl-3 offset-xl-1 text-center mt-3">
					<img className="img-fluid rounded homeLogo" src={Logo} alt="Punipuni Logo laptop" />
			</div>
            <div className="col">
            <h1 className="mt-3 text-center home-text">Welcome to PuniPuni Studio!</h1>
            <p className="home-p"> - PuniPuni Studio is a game studio based in Antalya, Turkey.<br/>
                    - We were founded in 2019 and since then it’s been a great journey to create 
                 a studio recalled by its’ games. We created several games while we continue this journey.</p>
            </div>
            </div>
        </div>
        <AwesomeCards />
        </div>
        
    );

}




export default HomePage;