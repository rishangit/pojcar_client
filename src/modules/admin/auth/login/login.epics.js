
import { LOGIN_SUCCESS, LOGIN_ATTEMPT, loginSuccess } from './login.action';
import { of } from 'rxjs';
import { delay,switchMap, map, tap } from 'rxjs/operators';
import {ofType, combineEpics} from 'redux-observable';


const loginAttempEpic = (action$, state$) => {
    return action$.pipe(
        ofType(LOGIN_ATTEMPT),
        switchMap(action => of(action).pipe(
             delay(1000),
             map(( {payload}) =>  loginSuccess(payload) )
        ))
    )

}

const loginEpic = combineEpics(loginAttempEpic)
export default loginEpic