import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({ //This is telling how to create the state
  books: BooksReducer
}); //Piece of state: Reducer itself

export default rootReducer;
