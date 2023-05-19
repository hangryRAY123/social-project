import { AddPostContainer } from './add_post/AddPostContainer';
import { PostsContainer } from './posts/PostsContainer';
import { StyledMyPosts } from './styles';

export const MyPosts = () => {
  return (
    <StyledMyPosts>
      <h2>My posts</h2>
      <AddPostContainer />
      <PostsContainer />
    </StyledMyPosts>
  );
};
