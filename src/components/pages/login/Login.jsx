import { LoginReduxForm } from './login_form/LoginForm';
import { StyledLogin } from './styles';
import { Logo } from '../../ui/logo/Logo';
import { connect } from 'react-redux';
import { login } from '../../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe
    );
  };

  return (
    <>
      {props.isAuth ? (
        <Navigate to="/profile" />
      ) : (
        <StyledLogin>
          <Logo />
          <h2>Login</h2>
          <LoginReduxForm onSubmit={onSubmit} />
        </StyledLogin>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);
