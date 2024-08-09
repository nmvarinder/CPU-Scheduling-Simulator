const About = () => {
    return ( <div className='about-me'>
        <div className="info">
        <div className="profile-logo"><img src="./src/assets/logoNMV.png" alt="logo" /></div>
        <p><span>Varinder</span>, Student DCSA, PU, Chandigarh.</p>
        <p>Pursuing Master's Degree in the field of Computer Science and Application.</p>
        </div>

        <div className="tech">
        <p><span>Tech-Stack used:</span></p>
        <ul>
            <li>React.js</li>
            <li>JavaScript</li>
            <li>Css</li>
            <li>Html</li>
        </ul>
        </div>

        <div className="connect">
        <p><span>Connect with me:</span></p>
        <a href="https://www.github.com/nmvarinder">Github</a><br/>
        <a href="https://www.linkedin.com/in/nmvarinder">Linkedin</a>
        </div>
        </div> );
}
 
export default About;