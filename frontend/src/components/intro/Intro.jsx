import React from 'react'
import  './intro.css'
import Me from "../../img/me.jpg"
import Me12 from "../../img/me11.png"
import Me2 from "../../img/me2.png"

import f15 from "../../img/f15.png"
import f22 from "../../img/f22.png"
import Fade from '../fade/Fade'
const Intro = () => {
    return (
        <div className='i'>
        <div className="i-left">
        <div className="i-left-wrapper">
        <h2 className="i-intro">FULL STACK WEB DEVELOPPER</h2>
               
    <div className="glitch-bloc">
        <p className="invisible-text">Bokri Achraf</p>
        <p className="glitchedAnim">Bokri Achraf</p>
        <p className="glitchedAnim">Bokri Achraf</p>
        <p className="glitchedAnim">Bokri Achraf</p>
    </div>
   
        <div className="i-title">
        <div className="i-title-wrapper">
        <div className="i-title-item">Web Developper</div>
        <div className="i-title-item">UI/UX Designer</div>
        <div className="i-title-item">Blockchain coder</div>
        <div className="i-title-item">E-commerce</div>
        <div className="i-title-item">Content Creator</div>
        </div>
        </div>
        <p className="i-desc">
        I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.
        </p>
        </div>
       
        <svg
        width="75"
        height="75"
        viewBox="0 0 75 75"
        fill="none"
        stroke="black"
        className="i-scroll"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="scroll">
          <path
            id="Vector"
            d="M40.5 15L34.5 9L28.5 15"
            stroke-width="3"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Vector_2"
            d="M28.5 24L34.5 30L40.5 24"
            stroke-width="3"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g id="Group">
            <path
              id="Vector_3"
              d="M9 37.5H60"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <path
            id="Vector_4"
            d="M34.5 27V9"
            stroke-width="2.9895"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <g id="Group_2">
            <path
              id="Vector_5"
              d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
         </g>
         </svg>
        </div>
        <div className="i-right">
        <div className="i-bg">
        
        <Fade/>

        <div className='strap'>
    
        </div> 
    <div className="i-desc1">
    
      
    Passionate about mathematics, algorithms, I am curious about art, new technologies.
    I work on innovative web projects and I touch on everything, whether front or back, from project analysis to design and layout, from coding to deployment, including testing.
    In short, an application performance management solution is essential for detecting, analyzing and repairing slowdowns or problems that affect the proper functioning and execution of applications, both client/server and web and mobile, both in environments on site, whether cloud or hybrid. So I can optimize the user's digital experience.
    
    </div>
    
    
    
        
        </div>
        
            

        </div>

         </div>
    )
}

export default Intro

 