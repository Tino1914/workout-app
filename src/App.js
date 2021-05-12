import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './config/theme.config';

import Signin from './pages/Signin';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/">
            <Signin />
          </Route>
          <Route path="/sign-up">
            Signup
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
