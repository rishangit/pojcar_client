import {ofType, combineEpics} from 'redux-observable';
import loginEpic from './login/login.epics'
import registerEpics from './register/register.epics'

const authEpics = combineEpics(loginEpic,registerEpics);

export default authEpics