import Orlando from '../img/avatarM-1.jpg';
import Carmen from '../img/avatarW-1.jpg';
import Marie from '../img/avatarW-2.jpg';
import Alex from '../img/avatarM-2.jpg';
import Leo from '../img/avatarM-3.jpg';
import Britney from '../img/avatarW-3.jpg';
import Jeshua from '../img/avatarM-4.jpg';
import Harold from '../img/avatarM-5.jpg';
import Aada from '../img/avatarW-4.jpg';
import Nala from '../img/avatarW-5.jpg';
import Ramon from '../img/avatarM-6.jpg';
import { profileAPI } from '../api/api';

const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';

const initialState = {
  posts: [
    {
      id: 0,
      time: '6:38 PM',
      message: '@pierrhack I did for 6 days in Iceland',
      likes: 5,
    },
    {
      id: 1,
      time: '5:02 PM',
      message:
        'Which country to visit next? This is a photo with my friends - celebrating in Bali',
      likes: 23,
    },
    {
      id: 2,
      time: '11:54 AM',
      message:
        '@har_adams wow it’s amazing, I want to buy a van and travelling next year',
      likes: 15,
    },
    {
      id: 3,
      time: '11:54 AM',
      message:
        'Working from a van in Australia isn’t feasible if you need internet. It may have improved over the last years but I spent some time in a camper van around Tasmania and internet was a real problem (and Tasmania is tiny compared to the rest of the country).',
      likes: 4,
    },
    {
      id: 4,
      time: '11:59 AM',
      message:
        "@aa_da What's the reason for the van? Saving money or just like to get outside? If you've got a stable source of income you could always do some short term Airbnbs + buy a truck/topper, build a platform in the back. That way you can always convert it back to a truck and sleep in an apartment if you want.",
      likes: 10,
    },
  ],

  friends: [
    {
      id: 0,
      name: 'Orlando Diggs',
      avatar: Orlando,
    },
    {
      id: 1,
      name: 'Carmen Velasco',
      avatar: Carmen,
    },
    {
      id: 2,
      name: 'Marie Jensen',
      avatar: Marie,
    },
    {
      id: 3,
      name: 'Alex Lee',
      avatar: Alex,
    },
    {
      id: 4,
      name: 'Leo Gill',
      avatar: Leo,
    },
    {
      id: 5,
      name: 'Britney Cooper',
      avatar: Britney,
    },
    {
      id: 6,
      name: 'Jeshua Stout',
      avatar: Jeshua,
    },
    {
      id: 7,
      name: 'Harold Adams',
      avatar: Harold,
    },
    {
      id: 8,
      name: 'Aada Line',
      avatar: Aada,
    },
    {
      id: 9,
      name: 'Nala Hester',
      avatar: Nala,
    },
    {
      id: 10,
      name: 'Ramon Bareman',
      avatar: Ramon,
    },
  ],

  profile: null,

  status: '',
};

export const profilePageReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        time: '5:02 PM',
        message: action.message,
        likes: 5,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(
          (p) => p.id !== action.id
        ),
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      };

    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};

export const addPostActionCreator = (message) => {
  return {
    type: ADD_POST,
    message,
  };
};

export const deletePostActionCreator = (id) => {
  return {
    type: DELETE_POST,
    id,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const getProfile = (userId, myId) => {
  return async (dispath) => {
    if (!userId) {
      userId = myId;
    }

    const data = await profileAPI.getProfile(userId);

    dispath(setUserProfile(data));
  };
};

export const getStatus = (userId, myId) => {
  return async (dispath) => {
    if (!userId) {
      userId = myId;
    }

    const data = await profileAPI.getStatus(userId);

    dispath(setStatus(data));
  };
};

export const updateStatus = (status) => {
  return async (dispath) => {
    const data = await profileAPI.updateStatus(status);

    if (data.resultCode === 0) {
      dispath(setStatus(status));
    }
  };
};
