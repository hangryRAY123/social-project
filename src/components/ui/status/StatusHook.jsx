import React, { useState, useEffect } from 'react';
import { StyledStatus, StyledStatusUser } from './styles';
import idea from '../../../img/change.svg';

export const Status = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      {props.isOwner ? (
        <StyledStatus>
          {!editMode ? (
            <span onClick={activateEditMode}>
              {status || 'No status'}
            </span>
          ) : (
            <input
              autoFocus={true}
              onBlur={deactivateEditMode}
              value={status}
              onChange={onStatusChange}
              type="text"
              maxLength='50'
            />
          )}
          <img
            src={idea}
            width="19"
            height="19"
            alt="Idea."
          />
        </StyledStatus>
      ) : (
        <StyledStatusUser>
          <span>{status || 'No status'}</span>
        </StyledStatusUser>
      )}
    </>
  );
};
