import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { albumList, albumById, imagesByAlbum } from '../components/reducers';

const rootReducer = combineReducers({
  albumById,
  albumList,
  imagesByAlbum,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk
    )
  )
);

export default store;