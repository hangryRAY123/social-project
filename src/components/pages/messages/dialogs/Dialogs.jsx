import { People } from '../../../ui/people/People';
import { StyledDialogs } from './styles';

export const Dialogs = ({ dialogs }) => {
  return (
    <StyledDialogs>
      <People peoples={dialogs} />
    </StyledDialogs>
  );
};
