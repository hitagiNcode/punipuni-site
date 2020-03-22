import React from 'react';
import evverest from '../assets/img/evverest.png';

function AwesomeCards(){
    return( 
        <section id="team">
        <div className="container my-3 py-5 text-center">   
         <div className="row">
            <div className="col">
                <h2 className="published border-top">Published Games</h2>
                <p className="mt-3 published">On Google Play</p>
                
            </div> 
         </div>
         <div className="row ">
             <div className=" col-lg-4 col-md-6 col-xs-12">
                 <div className="card">
                     <a  href="/fromhell">
                     <div className="card-body">
                         <img src={evverest} alt="" className="img-fluid rounded-circle w-50 mb-3"></img>
                         <h3 className="text-dark">From Hell</h3>
                         <h5 className="text-dark">3D Horror Game</h5>
                         <p className="text-dark">Your biggest aim is to survive with your friends!</p>
                         <div className="d-flex flex-row justify-content-center">
                             <div className="p-4">
                                <a href="https://www.facebook.com/punipunistudios" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-facebook"></i>
                                </a>
                             </div>
                             <div className="p-4">
                             <a href="https://www.instagram.com/punipunistudios_/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-instagram"></i>
                                </a>
                             </div>
                         </div>
                     </div>
                     </a>
                 </div>
                 
             </div>
             <div className=" col-lg-4 col-md-6 col-xs-12">
             <div className="card">
                 <a  href="/puzzyles">
                     <div className="card-body">
                         <img src={evverest} alt="" className="img-fluid rounded-circle w-50 mb-3"></img>
                         <h3 className="text-dark">Puzzyles</h3>
                         <h5 className="text-dark">2D Puzzle Game</h5>
                         <p className="text-dark">Your kids will be learning english while playing this game!</p>
                         <div className="d-flex flex-row justify-content-center">
                             <div className="p-4">
                                <a href="https://www.facebook.com/punipunistudios" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-facebook"></i>
                                </a>
                             </div>
                             <div className="p-4">
                             <a href="https://www.instagram.com/punipunistudios_/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-instagram"></i>
                                </a>
                             </div>
                         </div>
                     </div>
                     </a>
                 </div>
             </div>
             <div className=" col-lg-4 col-md-6 col-xs-12">
             <div className="card">
             <a  href="/fategunz">
                     <div className="card-body">
                         <img src={evverest} alt="" className="img-fluid rounded-circle w-50 mb-3"></img>
                         <h3 className="text-dark">Gunz Fate</h3>
                         <h5 className="text-dark">3D/2D Gun Game</h5>
                         <p className="text-dark">Kill all your enemies and clear the stages. Without hesitation!</p>
                         <div className="d-flex flex-row justify-content-center">
                             <div className="p-4">
                                <a href="https://www.facebook.com/punipunistudios" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-facebook"></i>
                                </a>
                             </div>
                             <div className="p-4">
                             <a href="https://www.instagram.com/punipunistudios_/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-instagram"></i>
                                </a>
                             </div>
                         </div>
                     </div>
                     </a>
                 </div>
             </div>
         </div>
         
        </div>
        </section>
    );
}

export default AwesomeCards;