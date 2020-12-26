import React from 'react';
import Content from '../components/Content';
import PuniGif from '../assets/img/slidergif.gif'

function AboutPage (props){
    return (
        <div className="b-background container">   
            <h1 className="display-6 text-center text-warning p-4">About PuniPuni Studio</h1>
            <div className="text-center"><img className="img-fluid" src={PuniGif}></img></div>

            <Content  >
            
                <p className="mt-3">Hello, my name is <b>BARIS</b>. I'm the founder of <b>PuniPuni Studio</b>. In 2012, I started writing code with <b>JAVA </b> 
                for my Minecraft server. I created a bunch of custom plugins for the server.
                We really had fun at that time!</p>
                <p>I also learned <b>MERN</b> stack. Because creating websites with React, Express Js, 
                Node Js, MongoDb is a great way to learn web development.</p>
                <p>After web development, I started to learn <b>Unity</b> and <b>Blender</b>.
                First of all, <b>Unity</b> is a great game engine that you can find a lot of tutorials online and it uses <b>C#</b>.
                If you are good at <b>JAVA</b>, you will understand <b>C#</b> with in a few days.
                And after that, I needed to create my own game assets with <b>Blender</b>. It has a lot of
                tutorials online and a lot of features that you can only find in paid engines but for free.</p>
                <p>So now, I can almost create everything I need. My dream is to make PuniPuni Studio a big game company. 
                I know this is not a easy task. Because, for now I'm the only developer.</p>
                <p>In my free time, I teach people what I know by creating <b>Youtube</b> videos on this channel 
                <a href="https://www.youtube.com/channel/UC6zKctA1g46P2Hed1cBzhzQ" target="_blank" rel="noopener noreferrer"> PuniPuni Code</a>.
                You should definitely check out my channel.</p>
                <h4 className="text-center">You can also find us at</h4>
                <div className="text-center"> 
                <h4> <a className="a p-2" href="https://www.facebook.com/punipunistudio" 
                target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square"></i></a>
                <a className="a p-2" href="https://www.instagram.com/punipuni.studio/" 
                target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                <a className="a p-2" href="https://www.linkedin.com/in/baris-gunenc/" 
                target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                </h4>
                 </div>
            </Content>
        </div>
    );

}


export default AboutPage;