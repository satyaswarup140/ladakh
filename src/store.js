import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // adjust path based on your reducers

const store = configureStore({
  reducer: rootReducer,
});

export default store;
