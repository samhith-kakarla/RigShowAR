/* eslint-disable import/no-anonymous-default-export */
import * as types from '../actions/userActions';

const initialState = {
  userId: JSON.parse(typeof window !== 'undefined' ? localStorage.getItem('userId') : "") || null,
  fullName: JSON.parse(typeof window !== 'undefined' ? localStorage.getItem('fullName') : "") || null,
  email: JSON.parse(typeof window !== 'undefined' ? localStorage.getItem('email') : "") || null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      typeof window !== 'undefined' ? localStorage.setItem('userId', JSON.stringify(action.payload.userId)) : null;
      typeof window !== 'undefined' ? localStorage.setItem('fullName', JSON.stringify(action.payload.fullName)) : null;
      typeof window !== 'undefined' ? localStorage.setItem('email', JSON.stringify(action.payload.email)) : null;
      return {
        ...state,
        userId: action.payload.userId,
        fullName: action.payload.fullName,
        email: action.payload.email,
      };
    case types.UNSET_USER:
      typeof window !== 'undefined' ? localStorage.clear() : null;
      return {
        ...state,
        userId: null,
        fullName: null,
        email: null,
      };
    default:
      return state;
  }
};