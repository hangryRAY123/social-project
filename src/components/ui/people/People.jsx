import { NavLink } from 'react-router-dom';
import { StyledList, StyledItem } from './styles';

export const People = ({ peoples }) => {
  return (
    <StyledList>
      {peoples?.length ? (
        <>
          {peoples.map((e) => (
            <StyledItem key={e.id}>
              <NavLink to={`${e.id}`}>
                <img
                  src={e.avatar}
                  width="32"
                  height="32"
                  alt="Avatar."
                />
                {e.name}
              </NavLink>
            </StyledItem>
          ))}
        </>
      ) : null}
    </StyledList>
  );
};
