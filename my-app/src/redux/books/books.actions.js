import axios from "axios";
import {
  GET_Books_ERROR,
  GET_Books_LOADING,
  GET_Books_SUCCESS,
  GET_SINGLE_Book,
  POST_Book_Error,
  POST_Book_Loding,
  POST_Book_Sucess,
  DELETE_Book_Error,
  DELETE_Book_Loding,
  DELETE_Book_Sucess,
} from "./books.types";
import { getBooks } from "./booksActions";

// redux doesnt handle asynchronous REQUEST
// redux thunk external librariy
// to handle asynchronous REQUEST

/// asynchronous Function

 

export const ACTION_POST_BOOKS = (data) => async (dispatch) => {
  dispatch({ type: POST_Book_Loding });
  console.log(data)
  let token = JSON.parse(localStorage.getItem("token"));

  try {
    
    let res = await axios.post("http://localhost:8080/book", data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
           'token':token.token
        },
      });

    console.log(res, "from redux actions");

     dispatch({ type: POST_Book_Sucess, payload: res.data });
     dispatch(getBooks({ query: "",selectedOption: "Name",sortOrder: "asc"}))
     
     alert("book successfully added")
  } catch (err) {
    dispatch({ type: POST_Book_Error, payload: err.message });
    alert(err)
  }
};

export const ACTION_Delete_BOOKS = () => async (dispatch) => {
  dispatch({ type: DELETE_Book_Loding });
  // console.log("data")
  let token = JSON.parse(localStorage.getItem("token"));
  try {
    let res = await axios.delete("http://localhost:8080/book",
      {
        headers: {
          token: token,
        },
      });

    console.log(res, "from redux actions");

    return dispatch({ type: DELETE_Book_Sucess, payload: res.data });
  } catch (err) {
    dispatch({ type: DELETE_Book_Error, payload: err.message });
  }
};

