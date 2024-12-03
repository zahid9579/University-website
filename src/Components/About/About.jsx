import React from 'react'
import './About.css';
import about_img from '../../assets/about_img.webp'
import play_icon from '../../assets/play_icon.png'


const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="about-img" className='about-img' />
            <img src={play_icon} alt="play-icon" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nuturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut recusandae inventore quasi. Aliquam, obcaecati! Omnis tenetur, cum vero explicabo quisquam perferendis debitis impedit? Repellat alias dolorem laboriosam deleniti, sequi cum accusamus? Exercitationem repellat autem sint. Quod, et, fuga ullam perferendis temporibus voluptates eos aliquam aliquid ipsam officiis ab corrupti alias?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate doloremque voluptatem quo molestiae labore aspernatur eius facere? Reprehenderit, nisi hic.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nulla ab, nam explicabo sapiente maxime harum corporis minus a rerum non quod aut, eveniet totam, quos officia quisquam consequuntur blanditiis.</p>
        </div>


    </div>
  )
}

export default About