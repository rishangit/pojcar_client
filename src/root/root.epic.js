import {combineEpics} from 'redux-observable';
import authEpics from '../modules/admin/auth/auth.epic'

const rootEpic = combineEpics(authEpics);

export default rootEpic