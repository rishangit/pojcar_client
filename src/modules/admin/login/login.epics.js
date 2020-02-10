import { ofType, combineEpics } from "redux-observable";
import { LOGIN_SUCCESS, LOGIN_ATTEMPT, loginSuccess } from './login.action';
import { delay, map, switchMap, tap } from 'rxjs/operators'
import { of } from "rxjs";

const logingEpic = (action$, state$) => {
    return action$.pipe(
        ofType(LOGIN_ATTEMPT),
        switchMap(action => of(action).pipe(
            delay(6000),
            // tap( console.log('state', state$)),
            map(({ payload }) => loginSuccess(payload))
        )
        )

    )
}

const logingAttemptEpic =  combineEpics(logingEpic)

export default logingAttemptEpic