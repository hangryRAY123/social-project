import { SendLetterForm } from './SendLetterForm';
import { addMesageActionCreator } from '../../../../../redux/messages-reducer';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (message) => {
      const action = addMesageActionCreator(message);

      dispatch(action);
    },
  };
};

export const SendLetterContainer = connect(
  null,
  mapDispatchToProps
)(SendLetterForm);
