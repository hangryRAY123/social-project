import { Footer } from '../blocks/footer/Footer';
import { Header } from '../blocks/header/Header';
import { Main } from '../blocks/main/Main';
import { StyledApp } from './styles';
import { HashRouter as Router } from 'react-router-dom';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from '../../redux/app-reducer';
import { Preloader } from '../ui/preloader/Preloader';

const App = (props) => {
  useEffect(() => {
    props.initializeApp();
  }, [props]);

  return (
    <>
      {!props.initialized ? (
        <Preloader />
      ) : (
        <Router>
          <StyledApp>
            <Header />
            <Main />
            <Footer />
          </StyledApp>
        </Router>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

const mapDispatchToProps = {
  initializeApp,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
