import { connect } from 'react-redux';
import {
  getUsers,
  getChangeUsers,
  onUnfollow,
  onFollow,
} from '../../../../redux/users-reducer';
import React from 'react';
import { UsersList } from './UsersList';
import { Preloader } from '../../../ui/preloader/Preloader';
import { compose } from 'redux';
import {
  receiveUsers,
  receiveCurrentPage,
  receiveIsAuth,
  receiveIsFetching,
  receiveIsFollowingProgress,
  receivePageSize,
  receiveTotalUsersCount,
} from '../../../../redux/users-selectors';

class Users extends React.Component {
  componentDidMount() {
    this.props.getUsers(
      this.props.currentPage,
      this.props.pageSize
    );
  }

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <UsersList {...this.props} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: receiveUsers(state),
    pageSize: receivePageSize(state),
    totalUsersCount: receiveTotalUsersCount(state),
    currentPage: receiveCurrentPage(state),
    isFetching: receiveIsFetching(state),
    isFollowingProgress: receiveIsFollowingProgress(state),
    isAuth: receiveIsAuth(state),
  };
};

const mapDispatchToProps = {
  getUsers,
  getChangeUsers,
  onUnfollow,
  onFollow,
};

export const UsersListContainer = compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Users);
