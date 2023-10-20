import axios from "axios";
import {
  GET_Books_ERROR,
  GET_Books_LOADING,
  GET_Books_SUCCESS,
  GET_SINGLE_Book,
} from "./books.types";

// redux doesnt handle asynchronous REQUEST
// redux thunk external librariy
// to handle asynchronous REQUEST

/// asynchronous Function

export const ACTION_GET_BOOKS = (id) => async (dispatch) => {
  dispatch({ type: GET_Books_LOADING });
  // console.log("data")
  try {
    if (id) {
      let res = await axios.get("http://localhost:8080/books/" + id);
      console.log(res.data, "from single");

      return dispatch({ type: GET_SINGLE_Book, payload: res.data });
    }
    
    let res = await axios.get("http://localhost:8080/books");

    console.log(res, "from redux actions");

    return dispatch({ type: GET_Books_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_Books_ERROR, payload: err.message });
  }
};