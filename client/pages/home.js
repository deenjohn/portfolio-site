import React from 'react'

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div>
          <h2>Tools and Workflow</h2>
        </div>
        <ul>
          <li>
            <div>
              <img src="assets/home/javascript.png" alt="Javascript icon"/>
            </div>
            <div>
              <h3>Javascript</h3>
              <hr/>
              <p>To understand code, you have to have a deep understanding of the language you're writing in. I specialize in Javascript.
               I use Javascript frameworks and libraries when they make sense, and write my own vanilla Javascipt code when they don't.</p>
            </div>
          </li>
          <li>
            <div>
              <img src="assets/home/frontendframework.png" alt="Tool icon"/>
            </div>
            <div>
              <h3>Frontend Frameworks</h3>
              <hr/>
              <p>I have built applications in Angular, Backbone and React. I believe in understanding each framework's pros and cons, and making an educated decision about what framework is best for each project.</p>
            </div>
          </li>
          <li>
            <div>
              <img src="assets/home/responsivedesign.png" alt="project icon"/>
            </div>
            <div>
              <h3>Responsive Design</h3>
              <hr/>
              <p>Users come with all different screen sizes. I have developed websites using custom grid systems, Bootstrap, and Foundation to create designs that work for any screen size. </p>
            </div>
          </li>
          <li>
            <div>
              <img src="assets/home/build.png" alt="project icon"/>
            </div>
            <div>
              <h3>Build</h3>
              <hr/>
              <p>Automation can increase efficiency. I use automation tools like Gulp and Grunt, module loaders, and transpilers like Babel, to ensure code is minified, bundled, and transpiled before production.</p>
            </div>
          </li>
          <li>
            <div>
              <img src="assets/home/modularity.png" alt="project icon"/>
            </div>
            <div>
              <h3>Modularity</h3>
              <hr/>
              <p>Modularity helps with scalability. Working with CommonJS and AMD modules helps manage dependencies. I’ve worked with Node’s require modules, Browserify in Angular and React, Webpack and ES6 import/exports. </p>
            </div>
          </li>
          <li>
            <div>
              <img src="assets/home/server.png" alt="project icon"/>
            </div>
            <div>
              <h3>Server</h3>
              <hr/>
              <p>I use Node and Express to write Javascript on the backend. I’ve also written data scrapers, worked with Firebase databases, and implemented authentication.</p>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Home;
