import React from 'react';
import Navbar from './components/layouts/Navbar'
import Index from './components/layouts/Index'
import Lyrics from './components/tracks/Lyrics'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Provider} from './context'
import './App.css';

function App() {
  return (
    <Provider>
    <Router>
    <React.Fragment>
      <Navbar></Navbar>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/lyrics/track/:id" component={Lyrics} />
        </Switch>
      </div>
      </React.Fragment>
    </Router>
  </Provider>
  );
}

export default App;
