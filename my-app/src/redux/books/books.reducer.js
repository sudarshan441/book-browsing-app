import {
    GET_Books_ERROR,
    GET_Books_LOADING,
    GET_Books_SUCCESS,
    GET_SINGLE_Book,
  } from "./books.types";
  
  // Note: Do not update/change the initial state
  const bookInitalState = {
    loading: false,
    error: false,
    data: [],
    SingleData : {}
  };
  
  export const bookReducer = (
    state = bookInitalState,
    { type, payload }
  ) => {
    switch (type) {
      case GET_Books_LOADING: {
        return {
          ...state,
          loading: true,
          error: false,
        };
      }
      case GET_Books_SUCCESS: {
        return {
          ...state,
          loading: false,
          error: false,
          data: payload,
        };
      }
      case GET_Books_ERROR: {
        return {
          ...state,
          loading: false,
          error: true,
        };
      }
      case GET_SINGLE_Book: {
        return {
          ...state,
          loading: false,
          error: false,
          SingleData: payload,
        };
      }
      default: {
        return state;
      }
    }
  };