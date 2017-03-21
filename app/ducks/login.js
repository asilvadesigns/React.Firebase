const LOGIN = 'LOGGED_IN';

const initialState = {
  userEmail: '',
  userPassword: ''
}

// reducer
const login = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN: {
      return Object.assign({}, state, {
        userEmail: action.email
      });
    }
  }
  return state;
}

// action - use in component dispatch
export const userLogin = (email, password) => {
  return {
    type: LOGIN,
    email,
    password
  }
}

export default login;
