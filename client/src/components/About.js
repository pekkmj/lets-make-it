import React from "react";

const About = () =>{
  return (
    <div className="about-body">
      <h1 className="about-title">About the Developer</h1>
      <h3 className="plain-header">Michael Pekkarinen</h3>
      <img className="headshot" src="https://imgur.com/WGlXdn9.png" />
      <p className="grid-container plain-header">I built this application because I want to share how easy and accessible cooking can be!<br />The internet already has a lot of great websites to a lot of great recipes but navigating to find the right recipe can be tough. <br />This application helps with that by giving you an easy visual depiction of what recipes you can make! <br />You can make a lot of delicious things with just a couple of ingredients and it can be fun to improvise if you don't have an exact ingredient!<br />Start your cooking journey now by making an account and start filling your pantry!</p>
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <img className="about-food cell small-12 medium-4" src="https://imgur.com/8YqfbpG.png" />
          <img className="about-food cell small-12 medium-4" src="https://imgur.com/U6eoVTZ.png" />
          <img className="about-food cell small-12 medium-4" src="https://imgur.com/KwCWYIR.png" />
        </div>
      </div>
      <h4 className="plain-header">Connect With Me!</h4>
      <div className="grid-container">
        <p> <a href="https://www.github.com/pekkmj" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" className="social-icon" /></a> <a href="https://www.linkedin.com/in/michaelpekkarinen/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" className="social-icon" /></a> <a href="http://www.instagram.com/impekkable_" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/instagram.svg" className="social-icon" /></a></p>
      </div>
    </div>
  )
}

export default About