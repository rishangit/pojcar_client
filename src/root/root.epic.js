import {combineEpics} from 'redux-observable';
import loginEpic from '../modules/admin/login/login.epics'

const rootEpic = combineEpics(loginEpic);

export default rootEpic