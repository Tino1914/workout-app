import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { withFirebase } from '../components/firebase';
import {  withRouter } from 'react-router-dom';
import Copyright from '../components/Copyright';
import useStyles from '../config/theme.dashboard';


import {
    Switch,
    Route,
    useRouteMatch
  } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import Calendar  from '../components/Calendar';

import { AuthUserContext, withAuthentication } from '../components/Session';





function Dashboard(props) {
    let match = useRouteMatch();
    const signOut = () => {
      props.firebase.auth.signOut();
      props.history.push("/");
      }
    
   
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };
  
    return (
      <AuthUserContext.Consumer>
      {
      authUser => authUser ? (
          <div className={classes.root}>
              <CssBaseline />
              <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
              <Toolbar className={classes.toolbar}>
                  <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                  >
                  <MenuIcon />
                  </IconButton>
                  <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                  Dashboard
                  </Typography>
                  <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                      <Typography component="p" style={{paddingRight: "15px"}}>
                      username
                      </Typography>
                      <NotificationsIcon />
                  </Badge>
                  </IconButton>
              </Toolbar>
              </AppBar>

              <Sidebar 
                  signOut={signOut} 
                  open={open} 
                  handleDrawerClose={handleDrawerClose} 
              />

              <main className={classes.content, !open ? classes.contentClosed : classes.appBarShift }>
              <div className={classes.appBarSpacer} />
              <Container maxWidth="xl" className={classes.container}>
                  <Calendar 
                      firebase={props.firebase}
                      authUser={authUser}
                  />
                  <Box pt={4}>
                      <Copyright />
                  </Box>
              </Container>
              </main>
              
          </div>
          ) : (
          <p>Not authorized.</p>
       )
    }
  </AuthUserContext.Consumer>
    );
  };
  
  export default withRouter(withAuthentication(Dashboard));