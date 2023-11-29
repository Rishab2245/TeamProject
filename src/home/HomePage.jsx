import React from 'react'
import './Homepg.css'
import HomeNav from './HomeNav/HomeNav'
import graphic from '../assets/Group 19.png'
import arrow from '../assets/Vector 4.png'
function Home() {
    return (
        <>
        <div className="homePage">
           <div className="homeNav">
            <HomeNav/>
           </div>
           <div className="homeBody">
            <div className="homeText">
                <h1>Teemify brings all <br/>
                    your tasks, teammates,<br/>
                    and tools <span>together</span> 
                </h1>
                <p>Keep everything in the same place-even if<br/> 
                   your team isn’t.
                </p>
                <div className="trial">
                    <div className="trialButton"><button>Try free for 30 days</button></div>
                    <div className="trialArrow"><img src={arrow} alt="" /></div>
                </div>
            </div>
            <div className="graphic"><img src={graphic} alt="" /></div>
           </div>
           <div className="wave">
           <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1512 169" fill="none">
  <path d="M401.354 32.818C271.066 36.6527 77.7019 117.361 -0.199241 170.008L1500.57 197.699C1523.29 132.061 1554.88 0.862285 1499.48 1.16896C1430.23 1.5523 1229.95 118.442 1013.42 119.641C796.898 120.839 564.216 28.0247 401.354 32.818Z" fill="url(#paint0_linear_542_43)" stroke="url(#paint1_linear_542_43)" stroke-width="1.18632"/>
  <defs>
    <linearGradient id="paint0_linear_542_43" x1="24.3324" y1="108.483" x2="1530.75" y2="100.144" gradientUnits="userSpaceOnUse">
      <stop stop-color="#D9D9D9"/>
      <stop offset="1" stop-color="#D9D9D9" stop-opacity="0.69"/>
    </linearGradient>
    <linearGradient id="paint1_linear_542_43" x1="-0.199092" y1="170.009" x2="1493.76" y2="170.784" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="#707070" stop-opacity="0"/>
    </linearGradient>
  </defs>
</svg>

           </div>
            </div></>
    )
}
export default Home
