import {combineEpics} from 'redux-observable';
import loginAttempEpic from '../modules/admin/login/login.epics'

const rootEpic = combineEpics(loginAttempEpic);

export default rootEpic