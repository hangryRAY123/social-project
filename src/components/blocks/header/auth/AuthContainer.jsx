import { connect } from 'react-redux';
import React from 'react';
import { Preloader } from '../../../ui/preloader/Preloader';
import { Auth } from './Auth';
import { logout } from '../../../../redux/auth-reducer';

class AuthLogin extends React.Component {
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader width={20} height={20} mR={0} />
        ) : (
          <Auth {...this.props} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.auth.isFetching,
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photo: state.auth.photo,
  };
};

const mapDispatchToProps = {
  logout,
};

export const AuthContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthLogin);
