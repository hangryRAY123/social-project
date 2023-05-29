import { connect } from 'react-redux';
import React from 'react';
import { Profile } from './Profile';
import {
  getProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile
} from '../../../redux/profile-reducer';
import {
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/with-auth-redirect';
import { compose } from 'redux';

export class UserProfile extends React.Component {
  refreshProfile() {
    this.props.getProfile(
      this.props.router.params.userId,
      this.props.id
    );
    this.props.getStatus(
      this.props.router.params.userId,
      this.props.id
    );
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.router.params.userId !==
      prevProps.router.params.userId
    ) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        isOwner={!this.props.router.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
      />
    );
  }
}

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  };

  return ComponentWithRouterProp;
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    id: state.auth.id,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = {
  getProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile
};

const ProfileContainer = compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(UserProfile);

export default ProfileContainer;
