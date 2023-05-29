import { reduxForm, Field } from 'redux-form';
import { Element } from '../form/FormControls';
import {
  StyledForm,
  StyledSaveButton,
  StyledError,
} from './styles';
import error from '../../../img/error.png';

const UserInfoForm = (props) => {
  return (
    <StyledForm onSubmit={props.handleSubmit}>
      <label>
        <span>Full name:</span>
        <Field
          component={Element('input')}
          name="fullName"
          placeholder="Name..."
          type="text"
        />
      </label>
      <label>
        <span>About me:</span>
        <Field
          component={Element('input')}
          name="aboutMe"
          placeholder="About..."
          type="text"
        />
      </label>
      <label>
        <span>Facebook:</span>
        <Field
          component={Element('input')}
          placeholder="Facebook..."
          name="contacts.facebook"
        />
      </label>
      <label>
        <span>Website:</span>
        <Field
          component={Element('input')}
          placeholder="Website..."
          name="contacts.website"
        />
      </label>
      <label>
        <span>Vk:</span>
        <Field
          component={Element('input')}
          placeholder="Vk..."
          name="contacts.vk"
        />
      </label>
      <label>
        <span>Twitter:</span>
        <Field
          component={Element('input')}
          placeholder="Twitter..."
          name="contacts.twitter"
        />
      </label>
      <label>
        <span>Instagram:</span>
        <Field
          component={Element('input')}
          placeholder="Instagram..."
          name="contacts.instagram"
        />
      </label>
      <label>
        <span>Youtube:</span>
        <Field
          component={Element('input')}
          placeholder="Youtube..."
          name="contacts.youtube"
        />
      </label>
      <label>
        <span>Github:</span>
        <Field
          component={Element('input')}
          placeholder="Github..."
          name="contacts.github"
        />
      </label>
      <label>
        <span>Mainlink:</span>
        <Field
          component={Element('input')}
          placeholder="Mainlink..."
          name="contacts.mainlink"
        />
      </label>
      <label>
        <span>Looking for a job description:</span>
        <Field
          component={Element('input')}
          placeholder="Description..."
          name="lookingForAJobDescription"
        />
      </label>
      <label>
        <span>Looking for a job:</span>
        <Field
          component={Element('input')}
          name="lookingForAJob"
          type="checkbox"
        />
      </label>
      <StyledSaveButton>
        <button type="submit">Save</button>
      </StyledSaveButton>
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
    </StyledForm>
  );
};

export const UserInfoReduxForm = reduxForm({
  form: 'userForm',
})(UserInfoForm);
