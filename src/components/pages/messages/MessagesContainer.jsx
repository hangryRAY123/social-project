import { connect } from 'react-redux';
import { Messages } from './Messages';
import { withAuthRedirect } from '../../../hoc/with-auth-redirect';
import { compose } from 'redux';

const MessagesContainer = compose(
  withAuthRedirect,
  connect()
)(Messages);

export default MessagesContainer;
