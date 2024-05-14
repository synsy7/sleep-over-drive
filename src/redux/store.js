import { configureStore } from '@reduxjs/toolkit'; 
import counterReducer from './slinces/counterSlice'; 
import userReducer from './slinces/userSlice';
const store = configureStore({  
     reducer: {     
        counter: counterReducer,
        user: userReducer,
  } 
}); export default store; 
