import { configureStore } from '@reduxjs/toolkit'
//Этого нет
import rootReducer from '../reducers/catalogSlice'

const store = configureStore({
  reducer: rootReducer
})

export default store