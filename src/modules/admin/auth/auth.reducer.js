import { combineReducers } from "redux";
import loginReducer from './login/login.reducer';
import registerReducer from './register/register.reducer'

const authReducer = combineReducers({
    loginReducer,
    registerReducer});

export default authReducer