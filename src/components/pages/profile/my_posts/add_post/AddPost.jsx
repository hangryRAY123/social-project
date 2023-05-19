import { StyledPost } from './styles';
import { reduxForm, Field } from 'redux-form';
import {
  required,
  maxLength,
} from '../../../../../utils/validators/validators';
import { Element } from '../../../../ui/form/FormControls';

const Textarea = Element('textarea');

const AddPost = (props) => {
  return (
    <StyledPost onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        validate={[required, maxLength(10)]}
        name="message"
        placeholder="Message..."
        cols="30"
        rows="3"
      />
      <button type="submit">Send</button>
    </StyledPost>
  );
};

const AddPostFormRedux = reduxForm({
  form: 'addPost',
})(AddPost);

export const AddPostForm = (props) => {
  const addNewMessage = (value) => {
    props.addPost(value.message);
  };

  return <AddPostFormRedux onSubmit={addNewMessage} />;
};
