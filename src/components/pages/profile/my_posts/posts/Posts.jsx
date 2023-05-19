import { StyledList, StyledItem } from './styles';
import Avatar from '../../../../../img/my-avatar.jpg';
import Like from '../../../../../img/like.png';

export const Posts = ({ posts }) => {
  return (
    <StyledList>
      {posts?.length ? (
        <>
          {posts.map((e) => (
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
              <span>
                <img
                  src={Like}
                  width="16"
                  height="16"
                  alt="Like."
                />
                {e.likes}
              </span>
            </StyledItem>
          ))}
        </>
      ) : null}
    </StyledList>
  );
};
