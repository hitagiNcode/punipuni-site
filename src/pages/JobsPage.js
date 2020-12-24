import React from 'react';
//import JobsTop from '../assets/img/jobs-page/job-top.png'
import Coder from '../assets/img/jobs-page/job-coder.png'
import ARTIST from '../assets/img/jobs-page/job-art.png'
import Appl from '../assets/img/jobs-page/app-process.png'

    function JobsPage (){

        return(
            <div className="container">
				<div className="jobs-top text-center">
				 {/* <img className="img-fluid mt-4 jobs-top text-center" src={JobsTop} alt=""></img>*/}
                 <a href="#jobs-apply">
				 <button type="button" className="btn btn-danger job-btn btn-lg">APPLY NOW!</button></a>
				</div>
                <h1 className="display-4 text-center border-top border-bottom p-3 mt-3">Positions</h1>

                {/* 3D DEV JOB */}
                <div className="job-3d-dev">
                    <div className="img-cont text-center">
                <img className="img-fluid mt-1" src={Coder} alt=""></img>
                 <h1 className="display-5 text-jobs">UNITY 3D DEVELOPER</h1>
                    </div>
                    <div className="mt-0">
                    <h3><b>Job Description</b></h3>
                    <p className="mt-3">As a Unity 3D Developer, you’ll be in PuniPuni Team,
                     directly joining the projects we’re working right now. Trying out lots of new 
                     mechanics and prototyping them in a 
                     fast way is very crucial. So in this role, you’ll be mostly developing mobile games having 
                     a single but well-adapted mechanic. Performance is also one of the main keys here and PuniPuni Team will 
                     be expecting from you to adapt fast but clean coded development environment here but don’t 
                     worry, you’ll find a friendly PuniPuni team willing to share their experience here.</p>
                    </div>
                    <div className="mt-3">
                    <h3><b>Desired Skills &amp; Experiences</b></h3>
                    
                    <li>
						<span>Has experience in game development and a plus to have 
                            released games on mobile markets.</span>
					</li>
                    <li>
						<span>
                        Developing, releasing and maintaining high quality code in C# language.
                        </span>
					</li>
                    <li>
						<span>
                        Pushing the limits of Object Oriented Programming logic.   
                        </span>
					</li>
                    <li>
						<span>
                        Willing to become a Unity master, which has already lots of experience in the 
                        engine and will follow changes and new features.  
                        </span>
					</li>
                    <li>
						<span>
                        Has experience in working with source control systems like GIT. 
                        </span>
					</li>
                    
                    </div>
                    <div className="mt-3">
                    <h3><b>What You'll Be Doing</b></h3>

                    <li>
						<span>
                        Making prototypes in short periods for designed and documented game mechanics.
                        </span>
					</li>
                    <li>
						<span>
                        Adapting your code and structure to lots of changes again in short periods.   
                        </span>
					</li>
                    <li>
						<span>
                        Getting the selected prototypes ready to publish.   
                        </span>
					</li>
                    <li>
						<span>
                        Analyzing the game performance and implementing all the tricks.  
                        </span>
					</li>
                    <li>
						<span>
                        Designing simple tools like level editor, balance editor or custom implementing tools for necessary projects.  
                        </span>
					</li>
                    <li>
						<span>
                        Implementing 3rd party tools like analytic, ad network and push notification SDK’s.   
                        </span>
					</li>
                    <li>
						<span>
                        Working on softwares like Xcode and Android Studio, getting deep into release steps like solving SDK related problems and platform specific changes.  
                        </span>
					</li>
                    <li>
						<span>
                        Testing your close to release products and listing the bugs.   
                        </span>
					</li>
                    </div>
                    <div className="text-center">   
                    <a href="#jobs-apply">
                    <button type="button" className="btn btn-danger mt-4 btn-lg">APPLY NOW!</button>
                    </a>
                    </div>
                </div>

                {/* GENERALIST ARTIST JOB */}
                <div className="job-generalist-artist mt-3">
                    <div className="img-cont text-center">
                <img className="img-fluid mt-1" src={ARTIST} alt=""></img>
                 <h1 className="display-5 text-jobs">GENERALIST ARTIST</h1>
                    </div>
                    <div className="mt-0">
                    <h3><b>Job Description</b></h3>
                    <p className="mt-3">As a full-time Generalist Artist, you’ll be involved in PuniPuni Team,
                     directly joining the projects we’re working right now. Even though we don’t like the 
                     title “Generalist” much, we have to define it this way because you’ll be creating 
                     characters, props and environment for the game most of the time but you’ll be also 
                     generating creative videos, designing icons and store visuals for the marketing part too.</p>
                    </div>
                    <div className="mt-3">
                    <h3><b>Desired Skills &amp; Experiences</b></h3>
                    
                    <li>
						<span>To have a portfolio. This can be a Instagram page, Facebook page, Pinterest or a simple website.</span>
					</li>
                    <li>
						<span>
                        Fundamental art principles including color theory, layout, typography, visual hierarchy, and composition
                        </span>
					</li>
                    <li>
						<span>
                        Digital visualization tools (i.e. Photoshop, Illustrator, After Effects, Autodesk Maya or Blender)   
                        </span>
					</li>
                    <li>
						<span>
                        Willing to learn Unity interface, importing assets to Unity and editing visual stuff
                         like lightning, shadows, fogs, particle effects and indicators by using Unity’s tools. 
                        </span>
					</li>
                    
                    
                    </div>
                    <div className="mt-3">
                    <h3><b>What You'll Be Doing</b></h3>

                    <li>
						<span>
                        Making concepts and implementing creative art solutions for our products.
                        </span>
					</li>
                    <li>
						<span>
                        Collaborating with other illustrators and developers to envision and iterate concepts.   
                        </span>
					</li>
                    <li>
						<span>
                        Growing and fostering a user-oriented design culture.   
                        </span>
					</li>
                    <li>
						<span>
                        Adjusting artworks by incorporating input from data and test.  
                        </span>
					</li>
                    <li>
						<span>
                        Creating materials, prefabs, particle effects, and designing the environment in Unity.  
                        </span>
					</li>
                    <li>
						<span>
                        Delivering high- and low-poly 3D models for mobile platforms.  
                        </span>
					</li>
                    <li>
						<span>
                        Creating clear and attractive interface assets such as buttons, icons, widgets, and other game elements. 
                        </span>
					</li>
                    <li>
						<span>
                        Creating engaging social media visuals including images, animated motion graphics along with appealing captions. 
                        </span>
					</li>
                    </div>
                    <div className="text-center">   
                    <a href="#jobs-apply">
                    <button type="button" className="btn btn-danger mt-4 btn-lg">APPLY NOW!</button>
                    </a>
                    </div>
                </div>

                {/* Application Proc */}
                <div className="application" id="jobs-apply">
                <h1 className=" text-center border-top p-1 mt-5"><b>Application <br/>Process</b></h1>
                <img className="img-fluid mt-5" src={Appl} alt="process img"></img>
                <h5 className="mt-3">
				<b>Please provide the items below to our mail address info@punipuni.studio;</b></h5>
				<div >
					<li>
						<span>Updated CV/resume/Linkedin Profile link</span>
						
					</li>
					<li>
						<span>Portfolio</span>
						
					</li>
					<li>
						<span>Cover letter</span>
						
					</li>
					<li>
						<span>Any other link you want to add</span>
					
					</li>
				</div>
                <span className="ml-4"><small>*Please also specify which position(s) do you want to apply for &amp; 
                    when are you available to start.</small></span>	
                </div>

            </div>
        );
    }


export default JobsPage;