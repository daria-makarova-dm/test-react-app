import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import { compose } from 'redux';
import styles from './App.module.sass';
import Header from './components/Header/Header';
import Preloader from './components/Preloader/Preloader';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Edit from './pages/Edit/Edit';
import { initializeApp } from './redux/app-reducer'
import Users from './pages/Users/Users';

function App(props) {

  useEffect(() => {
    
      props.initializeApp();
      
  });

  if (!props.isInitialized) {
    return (
      <Preloader />
    )
  }

  return (

  <Route path="/">
    {!props.isAuth && props.history.location.pathname !== '/login' ? 
    
    <Redirect to="/login" /> : 

    <Switch>
      <Route path="/login">{
        props.isAuth ? 
        <Redirect to={"/profile/" + props.authUserID} /> :
        <Login />
      }</Route>

        <Route exact path="/">
          <Redirect to={"/profile/" + props.authUserID} />
        </Route>

        <Route>
          <div className={styles.wrapper}>
            <Header />
              <div className={styles.content}>
                <Switch>
                  <Route path="/profile/:userID"><Profile /></Route>
                  <Route path="/edit"><Edit /></Route>
                  <Route path="/users"><Users /></Route>
                </Switch>
              </div>
          </div>
        </Route>

    </Switch>
    
    }
  </Route>
  );

}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    isInitialized: state.app.isInitialized,
    authUserID: state.auth.id
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
  )(App);
