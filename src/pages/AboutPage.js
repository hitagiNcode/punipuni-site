import React from 'react';
import Content from '../components/Content';


function AboutPage (props){
    return (
        <div className="b-background container">   
            <h1 className="display-6 text-center text-warning p-4">About PuniPuni Studios</h1>

            <Content >
                <p>Hello, my name is <b>BARIS</b>. I'm the founder of <b>PuniPuni Studios</b>. In 2012, I started writing code with <b>JAVA </b> 
                for my Minecraft server. I created a bunch of custom plugins for the server.
                We really had fun at that time!</p>
                <p>I also learned <b>MERN</b> stack. Because creating websites with React, Express Js, 
                Node Js, MongoDb is a great way to learn web development.</p>
                <p>After web development, I started to learn <b>Unity</b> and <b>Blender</b>.
                First of all, <b>Unity</b> is a great game engine that you can find a lot of tutorials online and it uses <b>C#</b>.
                If you are good at <b>JAVA</b>, you will understand <b>C#</b> with in a few days.
                And after that, I needed to create my own game assets with <b>Blender</b>. It has a lot of
                tutorials online and a lot of features that you can only find in paid engines but for free.</p>
                <p>So now, I can almost create everything I need. My dream is to make PuniPuni Studios a big game company. 
                I know this is not a easy task. Because, for now I'm the only developer.</p>
                <p>In my free time, I teach people what I know by creating <b>Youtube</b> videos on this channel 
                <a href="https://www.youtube.com/channel/UC6zKctA1g46P2Hed1cBzhzQ" target="_blank" rel="noopener noreferrer"> PuniPuni Code</a>.
                You should definitely check out my channel.</p>
                <h4 className="text-center">You can also find us at</h4>
                <div className="text-center"> 
                <h4> <a className="a p-2" href="https://www.facebook.com/punipunistudios" 
                target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-square"></i></a>
                <a className="a p-2" href="https://www.instagram.com/punipunistudios_/" 
                target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a>
                <a className="a p-2" href="https://www.linkedin.com/in/bar%C4%B1%C5%9F-g%C3%BCnen%C3%A7-45591618b/" 
                target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                </h4>
                 </div>
            </Content>
        </div>
    );

}


export default AboutPage;