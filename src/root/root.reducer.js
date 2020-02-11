
import {combineReducers} from 'redux';
import authReducer from '../modules/admin/auth/auth.reducer';
import pagesReducer from '../modules/admin/pages/pages.reducer'

const rootReducer = combineReducers({
    authReducer,
    pagesReducer
})


export default rootReducer