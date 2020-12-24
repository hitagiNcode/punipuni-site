import React from 'react';
import Info from '../assets/img/info.png';
import Jobs from '../assets/img/jobs.png';
import Support from '../assets/img/support.png';
import Location from '../assets/img/location.png';


function ContactPage (props){
    return (
        <div className="b-background container text-center">   
            <h1 className="display-6 text-center text-warning p-4">Contact With PuniPuni Studio</h1>
            <h2 className="display-6 text-center mt-3 header-logo">PuniPuni Studio</h2>
            <h5 className="display-6 text-center ">If you need any help with any of our games,</h5>
            <div className="row mt-5">
            <div class="col-md-4 mail-card">
                <img src={Info} alt=""></img>
                <h5>Business and General</h5>
                <a className="text-light" href="mailto: info@punipuni.studio" 
                target="_blank" rel="noopener noreferrer"><b>info@punipuni.studio</b></a>
            </div>
            <div class="col-md-4">
                <img src={Jobs} alt=""></img>
                <h5>Job Applications</h5>
                <a className="text-light" href="mailto: jobs@punipuni.studio" 
                target="_blank" rel="noopener noreferrer"><b>jobs@punipuni.studio</b></a>
            </div>
            <div class="col-md-4">
                <img src={Support} alt=""></img>
                <h5>Support</h5>
                <a className="text-light" href="mailto: support@punipuni.studio" 
                target="_blank" rel="noopener noreferrer"><b>support@punipuni.studio</b></a>
            </div>
            </div>

            <div className="location-card text-center mt-5">   
                <img src={Location} alt=""></img>
                <h5 className="mt-2">PuniPuni Studio is located in Antalya, Turkey</h5>
                <h5 className="mt-2">Firm doesn't show exact adress for now.</h5>
                <h5 className="mt-2"><b>Antalya, Turkey 07100</b></h5>
            </div>
            
            
        </div>
    );

}


export default ContactPage;