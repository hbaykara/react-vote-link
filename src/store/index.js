import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = (initialState = {}) => {
  const store = createStore(persistedReducer, initialState, composeEnhancers)
  const persistor = persistStore(store)
  return { store, persistor }
}

export const { store, persistor } = configureStore();
