import React from 'react';
import './Intro.css';
// import { Link } from 'react-scroll';
import profile from '../../assets/profile.jpg';
import CV from '../../assets/Resume.pdf';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='intro-content'>
            <span className='hello'>Hello,</span>
            <span className='intro-text'>I'm <span className='intro-name'>Bibek</span> <br/> Web Developer,</span>
            <p className='intro-para'>It's me Bibek gadel, a web developer from Nepal. i'm a detail oriented individual and I create user-friendly websites and work with databases to manage data effectively. I'm passionate about building great websites and always aim for high quality in my projects.</p>
            <a href={CV} download> <button className='btn'>Download Resume</button></a>
            
        </div>
        <img src={profile} alt='Profile' className='bg' />
    </section>
  )
}
export default Intro