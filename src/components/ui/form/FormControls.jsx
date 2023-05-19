import { StyledWarning, StyledContainer } from './styles';
import warning from '../../../img/warning.png';

export const Element =
  (Element) =>
  ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
      <StyledContainer>
        <Element {...input} {...props} />
        {hasError && (
          <StyledWarning
            $right={props.right}
            $top={props.top}
          >
            <img
              src={warning}
              alt="Warning."
              width="20"
              height="20"
            />
            {meta.error}
          </StyledWarning>
        )}
      </StyledContainer>
    );
  };
