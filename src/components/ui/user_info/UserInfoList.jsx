import { StyledList, StyledItem } from './styles';

export const UserInfoList = ({ profile }) => {
  return (
    <StyledList>
      {profile.aboutMe ? (
        <StyledItem>
          <small>About me</small>
          <p>{profile.aboutMe}</p>
        </StyledItem>
      ) : null}

      {profile.contacts.website ? (
        <StyledItem>
          <small>Website</small>
          <a href={`https://${profile.contacts.website}`}>
            {profile.contacts.website}
          </a>
        </StyledItem>
      ) : null}

      {profile.contacts.youtube ? (
        <StyledItem>
          <small>Youtube</small>
          <a href={`https://${profile.contacts.youtube}`}>
            {profile.contacts.youtube}
          </a>
        </StyledItem>
      ) : null}

      {profile.contacts.github ? (
        <StyledItem>
          <small>Github</small>
          <a href={`https://${profile.contacts.github}`}>
            {profile.contacts.github}
          </a>
        </StyledItem>
      ) : null}

      {profile.contacts.mainLink ? (
        <StyledItem>
          <small>Mainlink</small>
          <a href={`https://${profile.contacts.mainLink}`}>
            {profile.contacts.mainLink}
          </a>
        </StyledItem>
      ) : null}

      {profile.lookingForAJob ? (
        <StyledItem>
          <small>Ищу работу</small>
          <span>{profile.lookingForAJobDescription}</span>
        </StyledItem>
      ) : null}
    </StyledList>
  );
};
