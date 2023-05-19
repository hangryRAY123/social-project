import { connect } from 'react-redux';
import { Friends } from './Friends';

const mapStateToProps = (state) => {
  return {
    friends: state.profilePage.friends,
  };
};

export const FriendsContainer =
  connect(mapStateToProps)(Friends);
