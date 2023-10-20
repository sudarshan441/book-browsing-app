import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from "redux";

import thunk from "redux-thunk";
import { bookReducer } from "./books/books.reducer";
import { authReducer } from "./auth/auth.reducer";
import { registerReducer } from "./register/register.actions";

const rootReducer = combineReducers({
    register: registerReducer,
    auth: authReducer,
    book: bookReducer
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
    rootReducer,
    createComposer(applyMiddleware(thunk))
);