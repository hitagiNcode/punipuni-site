import React from 'react';
import  Link  from 'react-router-dom/Link';
import evverest from '../assets/img/logoicon.png';
import ScaryLogo from '../assets/img/ScaryFLogo.png';

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

         <div className="row">
             <div className="col-lg-4 col-md-6 col-xs-12 ">
                 <div className="card">
                    <Link className="" to="/fromhell"> 
                     <div className="card-body">
                         <img src={ScaryLogo} alt="" className="img-fluid rounded-circle w-50"></img>
                         <h3 className="text-dark">Scary Family 3D</h3>
                         <h5 className="text-dark">3D Prank Game</h5>
                         <p className="text-dark">Your biggest aim is make jokes and be the biggest pranker ever!</p>
                         <div className="d-flex flex-row justify-content-center">
                             <div className="p-4">
                                 {/*Instead of facebook or instagram symbols use game-platform symbol*/}
                                <i className="fa fa-android"></i> 
                             </div>
                             <div className="p-4">
                                <i className="fa fa-apple"></i>  
                             </div>
                             <div className="p-4">
                             <i className="fa fa-steam"></i>
                            </div>
                         </div>
                     </div>
                     </Link> 
                 </div>
                 
             </div>
             <div className=" col-lg-4 col-md-6 col-xs-12">
             <div className="card">
                <Link className="" to="/puzzyles"> 
                     <div className="card-body">
                         <img src={evverest} alt="" className="img-fluid rounded-circle w-50"></img>
                         <h3 className="text-dark">Puzzyles</h3>
                         <h5 className="text-dark">2D Puzzle Game</h5>
                         <p className="text-dark">Your kids will be learning english while playing this game!</p>
                         <div className="d-flex flex-row justify-content-center">
                         <div className="p-4">
                                 {/*Instead of facebook or instagram symbols use game-platform symbol*/}
                                <i className="fa fa-android"></i> 
                             </div>
                             <div className="p-4">
                                <i className="fa fa-apple"></i>  
                             </div>
                             <div className="p-4">
                             <i className="fa fa-steam"></i>
                            </div>
                         </div>
                     </div>
                   </Link>
                 </div>
             </div>
             <div className=" col-lg-4 col-md-6 col-xs-12">
             <div className="card">
             <Link className="" to="/gunzfate"> 
                     <div className="card-body">
                         <img src={evverest} alt="" className="img-fluid rounded-circle w-50 "></img>
                         <h3 className="text-dark">Gunz Fate</h3>
                         <h5 className="text-dark">3D/2D Gun Game</h5>
                         <p className="text-dark">Kill all your enemies and clear the stages. Without hesitation!</p>
                         <div className="d-flex flex-row justify-content-center">
                         <div className="p-4">
                                 {/*Instead of facebook or instagram symbols use game-platform symbol*/}
                                <i className="fa fa-android"></i> 
                             </div>
                             <div className="p-4">
                                <i className="fa fa-apple"></i>  
                             </div>
                             <div className="p-4">
                             <i className="fa fa-steam"></i>
                            </div>
                         </div>
                     </div>
                </Link>
                 </div>
             </div>
         </div>
         
        </div>
        </section>
    );
}

export default AwesomeCards;