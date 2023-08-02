import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import ridersReducer from './riders/ridersSlice';
import slidesReducer from './slides/slidesSlice';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from "@react-native-async-storage/async-storage";



const rootPersistConfig = {
  key: "root",
  storage : AsyncStorage,
  blacklist: [""],
};

const appReducer = combineReducers({
  riders:  ridersReducer,
  slides:  slidesReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "auth/logout") {
    state = undefined;
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  // middleware: [thunk],
});

export const persistor = persistStore(store);
