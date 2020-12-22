import { applyMiddleware, combineReducers, createStore } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';

import { authReducer } from './auth/reducer';
import { userReducer } from './user/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
  },
  rootReducer,
);

export const store = createStore(
  persistedReducer,
  applyMiddleware(createLogger()),
);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
