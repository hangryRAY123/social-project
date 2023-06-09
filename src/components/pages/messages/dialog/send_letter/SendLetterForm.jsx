import { Form, Field } from 'react-final-form';
import { StyledLetter } from './styles';
import { Element } from '../../../../ui/form/FormControls';

const Textarea = Element('textarea');

export const SendLetter = (props) => {
  return (
    <Form
      onSubmit={(value) => {
        props.addMessage(value.message);
      }}
      validate={(value) => {
        const errors = {};

        if (!value.message) {
          errors.message = 'Field is required';
        }

        if (value.message?.length > 10)
          errors.message = `Max length is 10 symbols`;

        return errors;
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
