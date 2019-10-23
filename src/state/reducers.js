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
  data: {
    topNine: []
  },
  isFetching: false,
  error: ""
};

export const itemReducer = (state = initialItem, action) => {
  switch (action.type) {
    case types.FETCHING_ITEM_START:
      return {
        ...state,
        isFetching: true
      };
    case types.FETCH_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };
    case types.FETCH_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case types.ADD_ITEM_START:
      return {
        ...state,
        data: action.payload
      };
    case types.ADD_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case types.DELETE_ITEM_START:
      return {
        ...state,
        data: action.payload
      };
    case types.DELETE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    case types.UPDATE_ITEM_SUCCESS:
      return {
        ...state, 
        data: state.data.topNine.find(item=>item.id === action.payload)
      };
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
      return {
        ...state,
        isFetching: true
      };
    case types.FETCH_FRIEND_SUCCESS:
      return {
        ...state,
        data: action.payload
      }
    case types.FETCH_FRIEND_FAILURE:
      return{
        ...state,
        error:action.payload
      }
    default:
      return state;
  }
};
