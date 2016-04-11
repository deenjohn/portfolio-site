import React from 'react'

class Contact extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="contact">
        <div className="contact-form">
          <h2>I would love to hear from you! Drop me a line below.</h2>
          <form id="gform" method="POST" action="http://formspree.io/melindabernrdo@gmail.com">
            <input type="text" name="fullname" placeholder="Name"/>
            <input type="text" name="email" placeholder="Email"/>
            <input type="text" name="comment" placeholder="Comment"/>
            <input type="hidden" name="_next" value="//localhost:8080"/>
            <div className="form-submit">
              <button type="submit">Send Inquiry</button>
              <div styleName="display:none" id="thankyou_message">All comments will receive a response within<span className="strong">one week.</span></div>
            </div>
          </form>
        </div>
        <div className="social-media">
          <h2>Connect with me on:</h2>
          <ul>
            <li>
              <a href="https://twitter.com/melindabernrdo" target="_blank">
                <img src="assets/social-media/twitter.png" alt="Twitter icon"/>
              </a>
              <span>Twitter</span>
            </li>
            <li>
              <a href="https://github.com/melindabernrdo" target="_blank">
                <img src="assets/social-media/github.png" alt="github icon"/>
              </a>
              <span>Github</span>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/melindabernardo" target="_blank">
                <img src="assets/social-media/linkedin.png" alt="linkedin icon"/>
              </a>
              <span>Linkedin</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Contact;
