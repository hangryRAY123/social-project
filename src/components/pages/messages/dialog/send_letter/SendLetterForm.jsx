import { SendLetterFormRedux } from './SendLetter';

export const SendLetterForm = (props) => {
  const addNewMessage = (value) => {
    props.addMessage(value.message);
  };

  return <SendLetterFormRedux onSubmit={addNewMessage} />;
};
