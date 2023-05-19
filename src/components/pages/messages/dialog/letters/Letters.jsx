import {
  StyledList,
  StyledItem,
} from './styles';
import Avatar from '../../../../../img/my-avatar.jpg';

export const Letters = ({ messages }) => {
  return (
    <StyledList>
      {messages?.length ? (
        <>
          {messages.map((e) => (
            <StyledItem key={e.id}>
              <img
                src={Avatar}
                width="32"
                height="32"
                alt="Avatar."
              />
              <h3>Amilia Luna</h3>
              <time>{e.time}</time>
              <p>{e.message}</p>
            </StyledItem>
          ))}
        </>
      ) : null}
    </StyledList>
  );
};
