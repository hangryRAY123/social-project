import {
  StyledItem,
  StyledList,
  StyledBtnFollow,
  StyledBtnUnfollow,
  StyledBtnContainer,
  StyledBtnPage,
  StyledBtnToggle,
} from './styles';
import userPhoto from '../../../../img/user.png';
import { NavLink } from 'react-router-dom';

export const UsersList = (props) => {
  const pagesCount = Math.ceil(
    props.totalUsersCount / props.pageSize
  );

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const curP = props.currentPage;
  const curPF = curP - 3 < 0 ? 0 : curP - 3;
  const curPL = curP + 2;
  const slicedPages = pages.slice(curPF, curPL);

  return (
    <>
      <StyledList>
        {props.users?.length ? (
          <>
            {props.users.map((e) => (
              <StyledItem key={e.id}>
                <NavLink to={`/profile/${e.id}`}>
                  <img
                    src={
                      e.photos.small != null
                        ? e.photos.small
                        : userPhoto
                    }
                    width="50"
                    height="50"
                    alt="Avatar."
                  />
                </NavLink>
                <div>
                  <h3>{e.name}</h3>
                  <p>
                    from:{' '}
                    <span>{'e.location.country'}</span> ,{' '}
                    <span>{'e.location.city'}</span>
                  </p>
                </div>
                <div>
                  {e.followed ? (
                    <StyledBtnUnfollow
                      onClick={() => props.onUnfollow(e.id)}
                      type="button"
                      disabled={props.isFollowingProgress.some(
                        (id) => id === e.id
                      )}
                    >
                      Unfollow
                    </StyledBtnUnfollow>
                  ) : (
                    <StyledBtnFollow
                      onClick={() => props.onFollow(e.id)}
                      type="button"
                      disabled={
                        props.isAuth
                          ? props.isFollowingProgress.some(
                              (id) => id === e.id
                            )
                          : true
                      }
                    >
                      Follow
                    </StyledBtnFollow>
                  )}
                </div>
              </StyledItem>
            ))}
          </>
        ) : null}
      </StyledList>
      <StyledBtnContainer>
        {props.currentPage !== 1 && (
          <StyledBtnToggle
            type="button"
            onClick={() => {
              props.getChangeUsers(props.currentPage - 1);
            }}
          >
            Prev
          </StyledBtnToggle>
        )}
        {slicedPages.map((e) => (
          <StyledBtnPage
            key={e}
            $e={e}
            $currentPage={props.currentPage}
            onClick={() => {
              props.getChangeUsers(e);
            }}
            type="button"
          >
            {e}
          </StyledBtnPage>
        ))}
        {props.currentPage !== props.totalUsersCount && (
          <StyledBtnToggle
            type="button"
            onClick={() => {
              props.getChangeUsers(props.currentPage + 1);
            }}
          >
            Next
          </StyledBtnToggle>
        )}
      </StyledBtnContainer>
    </>
  );
};
