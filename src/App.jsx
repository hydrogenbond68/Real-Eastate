import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropertyList from './components/PropertyList';
import PropertyDisplay from './components/PropertyDisplay';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PropertyList} />
        <Route path="/property/:id" component={PropertyDisplay} />
      </Switch>
    </Router>
  );
};

export default App;