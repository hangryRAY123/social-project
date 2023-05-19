import { connect } from 'react-redux';
import React from 'react';
import { Profile } from './Profile';
import {
  getProfile,
  getStatus,
  updateStatus,
} from '../../../redux/profile-reducer';
import {
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { withAuthRedirect } from '../../../hoc/with-auth-redirect';
import { compose } from 'redux';

export class UserProfile extends React.Component {
  componentDidMount() {
    this.props.getProfile(
      this.props.router.params.userId,
      this.props.id
    );
    this.props.getStatus(
      this.props.router.params.userId,
      this.props.id
    );
  }

  render() {
    return (
      <Profile
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
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
};

const ProfileContainer = compose(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(UserProfile);

export default ProfileContainer;
