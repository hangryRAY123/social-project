import { Dialog } from './dialog/Dialog';
import { DialogsContainer } from './dialogs/DialogsContainer';
import { StyledMessages } from './styles';

export const Messages = () => {
  return (
    <StyledMessages>
      <DialogsContainer />
      <Dialog />
    </StyledMessages>
  );
};
