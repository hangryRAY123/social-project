import React, { useState, useEffect } from 'react';
import { StyledStatus } from './styles';

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
        />
      )}
    </StyledStatus>
  );
};
