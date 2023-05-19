import {
  profilePageReducer,
  addPostActionCreator,
  deletePostActionCreator
} from './profile-reducer';

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
};

it('post should be increment', () => {
  // 1. test data
  const action = addPostActionCreator('yo');
  // 2. action
  let newState = profilePageReducer(initialState, action);
  //3. expectation
  expect(newState.posts.length).toBe(6);
});

it('message of new post should be correct', () => {
  // 1. test data
  const action = addPostActionCreator('yo');
  // 2. action
  let newState = profilePageReducer(initialState, action);
  //3. expectation
  expect(newState.posts[5].message).toBe('yo');
});

it('post should be decrement', () => {
  // 1. test data
  const action = deletePostActionCreator(1);
  // 2. action
  let newState = profilePageReducer(initialState, action);
  //3. expectation
  expect(newState.posts.length).toBe(4);
});

it('post should be decrement if id is incorrect', () => {
  // 1. test data
  const action = deletePostActionCreator(1000);
  // 2. action
  let newState = profilePageReducer(initialState, action);
  //3. expectation
  expect(newState.posts.length).toBe(5);
});