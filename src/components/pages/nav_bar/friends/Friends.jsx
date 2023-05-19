import { People } from '../../../ui/people/People';
import { StyledFriends } from './styles';

export const Friends = ({ friends }) => {
  return (
    <StyledFriends>
      <h2>Friends</h2>
      <People peoples={friends} />
    </StyledFriends>
  );
};
