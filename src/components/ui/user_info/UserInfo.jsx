import userPhoto from '../../../img/user.png';
import upload from '../../../img/upload.png';
import setting from '../../../img/setting.png';
import { Preloader } from '../preloader/Preloader';
import { Social } from '../social/Social';
import { Status } from '../status/StatusHook';
import {
  StyledProfile,
  StyledHeader,
  StyledUpload,
  StyledAvatar,
} from './styles';
import { UserInfoList } from './UserInfoList';
import { UserInfoReduxForm } from './UserInfoForm';
import { useState } from 'react';

export const UserInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  const [editMode, setEditMode] = useState(false);

  const onMainPhotoSelect = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => setEditMode(false));
  };

  return (
    <>
      {!profile ? (
        <Preloader />
      ) : (
        <StyledProfile>
          <StyledAvatar>
            <img
              src={profile.photos.large || userPhoto}
              width="200"
              height="200"
              alt="Avatar."
            />
            <Social contacts={profile.contacts} />
          </StyledAvatar>
          {isOwner && (
            <StyledUpload>
              <label>
                <input
                  type="file"
                  name="file"
                  onChange={onMainPhotoSelect}
                />
                <img
                  src={upload}
                  width="20"
                  height="20"
                  alt="Upload."
                />
              </label>
            </StyledUpload>
          )}
          <div>
            <StyledHeader>
              {isOwner && !editMode && (
                <img
                  src={setting}
                  width="20"
                  height="20"
                  alt="Setting."
                  onClick={() => {
                    setEditMode(true);
                  }}
                />
              )}
              <h2>{profile.fullName}</h2>
              <Status
                status={status}
                updateStatus={updateStatus}
                isOwner={isOwner}
              />
            </StyledHeader>
          </div>
          {editMode ? (
            <UserInfoReduxForm
              initialValues={profile}
              onSubmit={onSubmit}
            />
          ) : (
            <UserInfoList profile={profile} />
          )}
          {!isOwner && (
            <button type="button">Message</button>
          )}
        </StyledProfile>
      )}
    </>
  );
};
