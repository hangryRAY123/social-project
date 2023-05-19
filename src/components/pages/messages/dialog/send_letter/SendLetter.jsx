import { StyledLetter } from './styles';
import { reduxForm, Field } from 'redux-form';
import {
  required,
  maxLength,
} from '../../../../../utils/validators/validators';
import { Element } from '../../../../ui/form/FormControls';

const Textarea = Element('textarea');

const SendLetter = (props) => {
  return (
    <StyledLetter onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        validate={[required, maxLength(10)]}
        name="message"
        placeholder="Message..."
        cols="30"
        rows="3"
      />
      <button type="submit">Send</button>
    </StyledLetter>
  );
};

const SendLetterFormRedux = reduxForm({
  form: 'sendLetter',
})(SendLetter);

export const SendLetterForm = (props) => {
  const addNewMessage = (value) => {
    props.addMessage(value.message);
  };

  return <SendLetterFormRedux onSubmit={addNewMessage} />;
};
