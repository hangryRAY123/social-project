import { NavLink } from 'react-router-dom';
import { StyledLogin } from './styles';
import userPhoto from '../../../../img/user.png';

export const Auth = (props) => {
  return (
    <StyledLogin>
      {props.isAuth ? (
        <>
          <h2>{props.login}</h2>
          <img
            src={
              props.photo != null ? props.photo : userPhoto
            }
            width="50"
            height="50"
            alt="Avatar."
          />
          <button onClick={props.logout} type="button">
            Logout
          </button>
        </>
      ) : (
        <NavLink to={'/login'}>Login</NavLink>
      )}
    </StyledLogin>
  );
};
