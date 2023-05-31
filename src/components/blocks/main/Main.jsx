import React, { Suspense } from 'react';
import { StyledMain } from './styles';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from '../../pages/nav_bar/NavBar';
import { Preloader } from '../../ui/preloader/Preloader';
import { Navigate } from 'react-router-dom';

const MessagesContainer = React.lazy(() =>
  import('../../pages/messages/MessagesContainer')
);
const ProfileContainer = React.lazy(() =>
  import('../../pages/profile/ProfileContainer')
);
const News = React.lazy(() =>
  import('../../pages/news/News')
);
const Music = React.lazy(() =>
  import('../../pages/music/Music')
);
const Settings = React.lazy(() =>
  import('../../pages/settings/Settings')
);
const Users = React.lazy(() =>
  import('../../pages/users/Users')
);
const Login = React.lazy(() =>
  import('../../pages/login/Login')
);

export const Main = () => {
  return (
    <StyledMain>
      <NavBar />
      <Suspense
        fallback={
          <div>
            <Preloader />
          </div>
        }
      >
        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate to="/profile" />}
          />
          <Route
            path="/profile/:userId?"
            element={<ProfileContainer />}
          />
          <Route
            path="/messages/*"
            element={<MessagesContainer />}
          />
          <Route path="/users/*" element={<Users />} />
          <Route path="/news/*" element={<News />} />
          <Route path="/music/*" element={<Music />} />
          <Route
            path="/settings/*"
            element={<Settings />}
          />
          <Route path="/login/*" element={<Login />} />
        </Routes>
      </Suspense>
    </StyledMain>
  );
};
