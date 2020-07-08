import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from "react-router-dom";



class App extends Component {
    render () {
    <Router>
        <nav>
            <div class="nav-wrapper grey darken-4">
                <a href="#" class="brand-logo">
                    Logo
                </a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                        <Link to="/">Homepage</Link>
                    </li>
                    <li>
                        <Link to="/about">Aboutme</Link>    
                    </li>
                    <li>
                        <Link to="/works">Works</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contactme</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
          <Route path="/about">
            <Aboutme />
          </Route>
          <Route path="/works">
            <Works />
          </Route>
          <Route path="/contact">
            <Contactme />
          </Route>
        </Switch>
    </Router> 
    }
}

export default App