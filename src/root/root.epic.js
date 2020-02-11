import {combineEpics} from 'redux-observable';
import authEpics from '../modules/admin/auth/auth.epic';
import pagesEpics from '../modules/admin/pages/pages.epics'

const rootEpic = combineEpics(authEpics,pagesEpics);

export default rootEpic