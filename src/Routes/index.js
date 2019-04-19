import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../View/Home'
import CreateStudent from '../View/Student/CreateStudent';
import CreateTrainer from '../View/Trainer/CreateTrainer';
import TestViews from '../View/TestViews';

function Routes() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Route path="/" component={Home}/>
        <Switch>
          <Route exact path="/Student" component={CreateStudent}/>
          <Route exact path="/Trainer" component={CreateTrainer}/>
          <Route exact path="/TestViews" component={TestViews}/>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default Routes;
