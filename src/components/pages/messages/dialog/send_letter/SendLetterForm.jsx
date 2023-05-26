import { Form, Field } from 'react-final-form';
import { StyledLetter } from './styles';
import {
  required,
  maxLength,
} from '../../../../../utils/validators/validators';
import { Element } from '../../../../ui/form/FormControls';

const Textarea = Element('textarea');

export const SendLetter = (props) => {
  return (
    <Form
      onSubmit={(value) => {
        props.addMessage(value.message);
      }}
      validate={() => {
        required();
        maxLength(10);
      }}
    >
      {({ handleSubmit }) => (
        <StyledLetter onSubmit={handleSubmit}>
          <Field
            component={Textarea}
            name="message"
            placeholder="Message..."
            cols="30"
            rows="3"
          />
          <button type="submit">Send</button>
        </StyledLetter>
      )}
    </Form>
  );
};

// export const SendLetterFormRedux = reduxForm({
//   form: 'sendLetter',
// })(SendLetter);

// export const SendLetterForm = (props) => {
//   const addNewMessage = (value) => {
//     props.addMessage(value.message);
//   };

//   return <SendLetterFormRedux onSubmit={addNewMessage} />;
// };
