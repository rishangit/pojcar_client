import { ofType, combineEpics } from "redux-observable";
import {REGISTER_ATTEMPT, registerSuccess} from './register.action'
import { switchMap, map, delay } from "rxjs/operators";
import { of } from "rxjs";

const registerAttemptEpic = (action$, state$)=>{
    return action$.pipe(
    ofType(REGISTER_ATTEMPT),
    switchMap(action=>of(action).pipe(
        delay(2000),
        map(({payload})=>registerSuccess(payload))
        )
    ))
}

const registerEpics = combineEpics(registerAttemptEpic)
export default registerEpics