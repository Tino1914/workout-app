import React from 'react';
import './App.css';
import Signin from './pages/Signin'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './config/theme.config';


function App() {
  return (
    <Router>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={Signin} />
        
     
        <Route exact path="/sign-up">Signup</Route>
      </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
