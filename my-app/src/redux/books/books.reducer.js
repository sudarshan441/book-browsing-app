const initialState = {
  query: '',
  suggestions: [],
  selectedOption: 'Name',
  sortOrder: 'asc',
  books: [], // Initial books data
};

const booksReducer = (state = initialState, action) => {
  switch (action.type){
    case "get/book/success":
      return {
        ...state,
        books:[...action.payload],
      }
    case 'UPDATE_QUERY':
      return {
        ...state,
        query: action.query,
      };
    case 'UPDATE_SUGGESTIONS':
      return {
        ...state,
        suggestions: action.suggestions,
      };
    case 'UPDATE_SORT_BY':{
      console.log(action.selectedOption)
      return {
        ...state,
        selectedOption: action.selectedOption,
      };
    }
    case 'UPDATE_SORTING':
      return {
        ...state,
        sortOrder: action.sortOrder,
      };
    default:
      return state;
  }
};

export default booksReducer;
