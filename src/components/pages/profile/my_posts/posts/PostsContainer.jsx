import { connect } from 'react-redux';
import { Posts } from './Posts';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

export const PostsContainer =
  connect(mapStateToProps)(Posts);
