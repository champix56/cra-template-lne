import reducer from './slice'
import {configureStore,combineReducers} from '@reduxjs/toolkit'
const store=configureStore({
    reducer:combineReducers({main:reducer})
})
export default store