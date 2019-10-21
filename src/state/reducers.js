import * as types from "./actionTypes";

const initialSignupState = {
  name: "",
  email: "",
  password: ""
};

export const registerReducer = (state = initialSignupState, action) => {
  switch (action.type) {
    case types.REGISTER_START:
      return {};
    default:
      return state;
  }
};

const initialLoginState = {
  email: "",
  password: ""
};

export const loginReducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case types.LOGIN_START:
      return {};
    default:
      return state;
  }
};

const initialItem = {
  data: [],
  isFetching: false,
  error: ""
};

export const itemReducer = (state = initialItem, action) => {
  switch (action.type) {
    case types.FETCHING_ITEM_START:
      return {};
    default:
      return state;
  }
};

const initialFriend = {
  data: [],
  isFetching: false,
  error: ""
};

export const friendReducer = (state = initialFriend, action) => {
  switch (action.type) {
    case types.FETCHING_FRIEND_START:
      return {};
    default:
      return state;
  }
};
