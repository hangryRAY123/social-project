import { reduxForm, Field } from 'redux-form';
import { required } from '../../../../utils/validators/validators';
import { Element } from '../../../ui/form/FormControls';
import {
  StyledForm,
  StyledError,
  StyledCaptcha,
} from './styles';
import error from '../../../../img/error.png';

const Input = Element('input');

const LoginForm = (props) => {
  return (
    <StyledForm onSubmit={props.handleSubmit}>
      <label>
        <Field
          component={Element('input')}
          validate={[required]}
          name="email"
          placeholder="Email"
          type="text"
          right="-255"
          top="-2"
        />
      </label>
      <label>
        <Field
          component={Input}
          validate={[required]}
          name="password"
          placeholder="Password"
          type="password"
          right="-255"
          top="-2"
        />
      </label>
      <label>
        <Field
          component="input"
          name="rememberMe"
          type="checkbox"
        />
        <small>remember me</small>
      </label>
      {props.captchaUrl && (
        <StyledCaptcha>
          <img src={props.captchaUrl} alt="Captcha." />
          <Field
            component={Element('input')}
            validate={[required]}
            name="captcha"
            placeholder="Symbols for image"
            type="text"
            right="-255"
            top="-2"
          />
        </StyledCaptcha>
      )}
      {props.error && (
        <StyledError>
          <img
            src={error}
            width="20"
            height="20"
            alt="Error."
          />
          {props.error}
        </StyledError>
      )}
      <button type="submit">Login</button>
    </StyledForm>
  );
};

export const LoginReduxForm = reduxForm({ form: 'login' })(
  LoginForm
);
