import React from 'react'
import Nav from './nav.js'

class Jumbotron extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <Nav />
        <div className="intro-text">
          <h1>Hello there.</h1>
          <h2>I’m Melinda. I am a front-end web developer based in Los Angeles, CA. I am currently working as a technical fellow at <a href="http://www.makersquare.com">MakerSquare</a>. I have a love of everything on the front-end and have built some neat things in (vanilla) Javascript. </h2>
        </div>
      </div>
    )
  }
}

export default Jumbotron;
