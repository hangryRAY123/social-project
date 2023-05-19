import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.dialogs,
  };
};

export const DialogsContainer =
  connect(mapStateToProps)(Dialogs);
