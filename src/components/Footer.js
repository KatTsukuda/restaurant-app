import React, {Component} from 'react'

class Footer extends Component{
  render(){
    return (
      <footer className="bd-footer text-muted">
        <div className="container">
          <ul className="bd-footer-links">
            <li className="footer-link"><a href="/api">API Documentation</a></li>
            <li className="footer-link"><a href="https://github.com/spragala">Github</a></li>
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer
