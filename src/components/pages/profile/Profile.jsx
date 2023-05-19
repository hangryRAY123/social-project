import MyPageBg from '../../../img/ui-designer.jpg';
import { MyPosts } from './my_posts/MyPosts';
import { UserInfo } from '../../ui/user_info/UserInfo';
import { StyledBg, StyledMyPage } from './styles';

export const Profile = (props) => {
  return (
    <StyledMyPage>
      <StyledBg
        src={MyPageBg}
        width="920"
        height="400"
        alt="Work desc."
      />
      <UserInfo {...props} />
      <MyPosts />
    </StyledMyPage>
  );
};
