import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const withAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    return (
      <>
        {props.isAuth ? (
          <Component {...props} />
        ) : (
          <Navigate to="/login" />
        )}
      </>
    );
  };

  const Container = connect(mapStateToProps)(
    RedirectComponent
  );

  return Container;
};
