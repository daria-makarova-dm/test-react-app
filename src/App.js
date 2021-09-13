import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import { compose } from 'redux';
import styles from './App.module.sass';
import Header from './components/Header/Header';
import Preloader from './components/Preloader/Preloader';
import Profile from './pages/Profile/Profile';
import { initializeApp } from './redux/app-reducer'

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
    
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.content}>
        <Switch>
          <Route path="/profile"><Profile /></Route>
          <Route path="/login">login</Route>
        </Switch>
      </div>
    </div>
    
    }
  </Route>
  );

}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    isInitialized: state.app.isInitialized
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
  )(App);
