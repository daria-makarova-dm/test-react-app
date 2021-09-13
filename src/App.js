import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import styles from './App.module.sass';
import Header from './components/Header/Header';
import Profile from './pages/Profile/Profile';
import { initializeApp } from './redux/app-reducer'

function App(props) {

  useEffect(() => {
    props.initializeApp();
  });

  if (!props.isAuth) {
    debugger
    return (
      <div>login</div>
    )
  }
  
  return (
    <div className={styles.wrapper}>
      <Header />
      <aside className={styles.sidebar}>
        Sidebar
      </aside>
      <div className={styles.content}>
        <Switch>
          <Route path="/"><Profile /></Route>
        </Switch>
      </div>
    </div>
  );

}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, { initializeApp })(App);
