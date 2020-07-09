import React from 'react';
import Nav from './Nav';
import { BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Homepage from './Homepage/Homepage';
import Aboutme from './about/Aboutme';
import Works from './Works/Works';
import Contactme from './Contactme/Contactme';
import './navbar.css';



function App () {
      return (
        <Router>
          <div className="app">
              <Nav/>
            <div className="appComponents">
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/about" component={Aboutme} />
              <Route path="/works" component={Works} />
              <Route path="/contact" component={Contactme} />
            </Switch>
            </div>
          </div>
        </Router>
      );
}

export default App ;