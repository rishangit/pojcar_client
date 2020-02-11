
import {combineReducers} from 'redux';
import authReducer from '../modules/admin/auth/auth.reducer'

const rootReducer = combineReducers({
    authReducer
})


export default rootReducer