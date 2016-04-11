import React from 'react'

class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <h2>A Sampling of My Work</h2>
        <div className="project-section">
          <div className="project-demo">
           <img src="assets/portfolio/project-demo1.png"/>
          </div>
          <div className="project-info">
            <h2>Turf</h2>
            <h3>A Neighborhood Recommendation System for Users Moving to New Cities</h3>
            <h5>Tech Stack: Node, Express, Angular, Gulp, NPM, Bower, Bootstrap, HTML5, CSS3, SASS and Heroku.</h5>
          </div>
        </div>
        <div className="project-section">
          <div className="project-demo project-demo-left ">
           <img src="assets/portfolio/project-demo2.png"/>
          </div>
          <div className="project-info project-info-right">
            <h2>Home Harmony</h2>
            <h3>A roommate task organization and management application</h3>
            <h5>Tech stack: Node, Express, Angular, Gulp, NPM, Bower, MaterialLite, HTML5, CSS3, SASS and Heroku.</h5>
          </div>
        </div>
        <div className="project-section">
          <div className="project-demo">
           <img src="assets/portfolio/project-demo3.png"/>
          </div>
          <div className="project-info">
            <h2>Park Assist</h2>
            <h3>Parking Application that shows available parking meters in Santa Monica</h3>
            <h5>Tech stack: Angular, Firebase (Database/Authentication), Grunt/Gulp, Bower, HTML, CSS, SASS and Heroku. </h5>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;
