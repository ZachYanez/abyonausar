import React from 'react';
import './App.css';
import Home from './pages/Home';
import Know from './pages/Know'
import Corp from './pages/Corp';
import Fashion from './pages/Fashion';
import Fitness from './pages/Fitness';
import Headshots from './pages/Headshots';
import Published from './pages/Published';
import Acting from './pages/Acting';
import Voiceover from './pages/Voiceover'
import Modeling from './pages/Modeling';
import Videos from './pages/Videos';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router basename="/">
      <Switch>
        <Route exact path="/" component={Home}>
            <Home />
        </Route>
        <Route exact path="/know" component={Know}>
            <Know />
        </Route>
        <Route exact path="/published" component={Published}>
            <Published/>
        </Route>
        <Route exact path="/acting" component={Acting}>
            <Acting/>
        </Route>
        <Route exact path="/modeling" component={Modeling}>
            <Modeling/>
        </Route>
        <Route exact path="/voiceover" component={Voiceover}>
            <Voiceover/>
        </Route>
         {/* <Route exact path="/corp" component={Corp}>
            <Corp />
        </Route> */}
        {/* <Route exact path="/fashion" component={Fashion}>
            <Fashion />
        </Route> */}
        {/* <Route exact path="/fitness" component={Fitness}>
            <Fitness />
        </Route> */}
        {/* <Route exact path="/videos" component={Videos}>
            <Videos />
        </Route> */}
        {/* <Route exact path="/headshots" component={Headshots}>
            <Headshots/>
        </Route> */}
        
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
