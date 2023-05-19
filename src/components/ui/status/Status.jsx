import React from 'react';
import { StyledStatus } from './styles';

export class Status extends React.Component {
  state = {
    editMode: false,
    newStatusText: this.props.status,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.newStatusText);
  };

  onStatusChange = (e) => {
    this.setState({
      newStatusText: e.target.value,
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        newStatusText: this.props.status,
      });
    }
  }

  render() {
    return (
      <StyledStatus>
        {!this.state.editMode ? (
          <span onClick={this.activateEditMode}>
            {this.state.newStatusText || 'No status'}
          </span>
        ) : (
          <input
            autoFocus={true}
            onBlur={this.deactivateEditMode}
            value={this.state.newStatusText}
            onChange={this.onStatusChange}
            type="text"
          />
        )}
      </StyledStatus>
    );
  }
}
