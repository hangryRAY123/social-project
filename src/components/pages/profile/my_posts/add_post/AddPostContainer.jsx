import { AddPostForm } from './AddPostForm';
import { addPostActionCreator } from '../../../../../redux/profile-reducer';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (message) => {
      const action = addPostActionCreator(message);

      dispatch(action);
    },
  };
};

export const AddPostContainer = connect(
  null,
  mapDispatchToProps
)(AddPostForm);
