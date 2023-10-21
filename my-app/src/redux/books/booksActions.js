import axios from "axios";

export const updateQuery = (query) => ({
    type: 'UPDATE_QUERY',
    query,
});

export const updateSuggestions = (suggestions) => ({
    type: 'UPDATE_SUGGESTIONS',
    suggestions,
});

export const updateSortBy=(sortBy)=>{
  return  {
    type: 'UPDATE_SORT_BY',
    selectedOption:sortBy}
    }
export const updateSorting = (sortOrder) => ({
    type: 'UPDATE_SORTING',
    sortOrder,
});

export const getBooks = (data) => async (dispatch) => {
    try {
        let res = await axios.get(`http://localhost:8080/book?name=${data.query}&sortBy=${data.selectedOption}&sortOrder=${data.sortOrder}`);
        dispatch({ type: "get/book/success", payload: res.data });
    } catch (err) {
        alert(err)
    }

}
