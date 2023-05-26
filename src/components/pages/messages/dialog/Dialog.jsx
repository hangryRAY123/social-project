import { LettersContainer } from './letters/LettersContainer';
// import { SendLetterContainer } from './send_letter/SendLetterContainer';
import { StyledDialog } from './styles';

export const Dialog = () => {
  return (
    <StyledDialog>
      {/* <SendLetterContainer /> */}
      <LettersContainer />
    </StyledDialog>
  );
};
