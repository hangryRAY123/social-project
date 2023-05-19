// import Avatar from '../../../img/my-avatar.jpg';
import userPhoto from '../../../img/user.png';
import { Preloader } from '../preloader/Preloader';
import { Social } from '../social/Social';
import { Status } from '../status/StatusHook';
import {
  StyledProfile,
  StyledList,
  StyledItem,
  StyledHeader,
} from './styles';

export const UserInfo = ({
  profile,
  status,
  updateStatus,
}) => {
  return (
    <>
      {!profile ? (
        <Preloader />
      ) : (
        <StyledProfile>
          <img
            src={
              profile.photos.large != null
                ? profile.photos.large
                : userPhoto
            }
            width="200"
            height="200"
            alt="Avatar."
          />
          <div>
            <StyledHeader>
              <h2>{profile.fullName}</h2>
              <Status
                status={status}
                updateStatus={updateStatus}
              />
            </StyledHeader>
            <b>{profile.aboutMe}</b>
          </div>
          <StyledList>
            {profile.contacts.website ? (
              <StyledItem>
                <small>Website</small>
                <a
                  href={`https://${profile.contacts.website}`}
                >
                  {profile.contacts.website}
                </a>
              </StyledItem>
            ) : null}

            {profile.contacts.youtube ? (
              <StyledItem>
                <small>Youtube</small>
                <a
                  href={`https://${profile.contacts.youtube}`}
                >
                  {profile.contacts.youtube}
                </a>
              </StyledItem>
            ) : null}

            {profile.contacts.github ? (
              <StyledItem>
                <small>Github</small>
                <a
                  href={`https://${profile.contacts.github}`}
                >
                  {profile.contacts.github}
                </a>
              </StyledItem>
            ) : null}

            {profile.contacts.mainLink ? (
              <StyledItem>
                <small>Mainlink</small>
                <a
                  href={`https://${profile.contacts.mainLink}`}
                >
                  {profile.contacts.mainLink}
                </a>
              </StyledItem>
            ) : null}

            {profile.lookingForAJob ? (
              <StyledItem>
                <small>Ищу работу</small>
                <span>
                  {profile.lookingForAJobDescription}
                </span>
              </StyledItem>
            ) : null}
          </StyledList>
          <Social contacts={profile.contacts} />
          <button type="button">Message</button>
        </StyledProfile>
      )}
    </>
  );
};
