import { connect } from 'react-redux';
import { Letters } from './Letters';

const mapStateToProps = (state) => {
  return {
    messages: state.messagesPage.messages,
  };
};

export const LettersContainer =
  connect(mapStateToProps)(Letters);
