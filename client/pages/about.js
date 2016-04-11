import React from 'react'
import { Link } from 'react-router'

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h2>About Me</h2>
        <div className="profile">
          <img src="assets/about/melinda.jpeg"/>
        </div>
        <div className="intro">
          <p>I built my first website at age 7 in Dreamweaver. I love the entire process of building applications from conception to completion.
          I moved to LA to attend a coding school to deepen my understanding of JavaScript and join the LA tech community in 2015. I am co-founder of the SoCal Algorithms Meetup and a founding member of MKS Women Who Code.
          My current side project is building a mobile application in React Native. On the side, I am a competitive pie maker, avid runner and yogi, and love a good book and cup of tea. </p>
        </div>
        <div className="about-btn-container">
          <button><Link to="/about" className="learn-more">Learn More</Link></button>
        </div>
      </div>

    )
  }
}

export default About;
