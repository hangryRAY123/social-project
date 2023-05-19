import Orlando from '../img/avatarM-1.jpg';
import Carmen from '../img/avatarW-1.jpg';
import Marie from '../img/avatarW-2.jpg';
import Alex from '../img/avatarM-2.jpg';
import Leo from '../img/avatarM-3.jpg';
import Britney from '../img/avatarW-3.jpg';

const ADD_MESSAGE = 'messages/ADD-MESSAGE';

const initialState = {
  messages: [
    {
      id: 0,
      time: '6:38 PM',
      message: '@pierrhack I did for 6 days in Iceland',
    },
    {
      id: 1,
      time: '5:02 PM',
      message:
        'Which country to visit next? This is a photo with my friends - celebrating in Bali',
    },
    {
      id: 2,
      time: '11:54 AM',
      message:
        '@har_adams wow it’s amazing, I want to buy a van and travelling next year',
    },
    {
      id: 3,
      time: '11:54 AM',
      message:
        'Working from a van in Australia isn’t feasible if you need internet. It may have improved over the last years but I spent some time in a camper van around Tasmania and internet was a real problem (and Tasmania is tiny compared to the rest of the country).',
    },
    {
      id: 4,
      time: '11:59 AM',
      message:
        "@aa_da What's the reason for the van? Saving money or just like to get outside? If you've got a stable source of income you could always do some short term Airbnbs + buy a truck/topper, build a platform in the back. That way you can always convert it back to a truck and sleep in an apartment if you want.",
    },
  ],

  dialogs: [
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
  ],
};

export const messagesPageReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: 5,
        time: '5:02 PM',
        message: action.message,
      };

      return {
        ...state,
        messages: [...state.messages, newMessage],
      };

    default:
      return state;
  }
};

export const addMesageActionCreator = (message) => {
  return {
    type: ADD_MESSAGE,
    message,
  };
};
