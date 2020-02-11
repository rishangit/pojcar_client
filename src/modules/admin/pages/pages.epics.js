import { ofType, combineEpics } from "redux-observable"
import {LIST_PAGES_ATTEMPT,listPagesSuccess} from './pages.actions'
import { switchMap, map, delay, mapTo, tap } from "rxjs/operators"
import { of } from "rxjs"


const listPagesAttemptEpic = (action$, state$)=>{
    return action$.pipe(
        ofType(LIST_PAGES_ATTEMPT),
        switchMap(action=> of(action).pipe(
            tap(console.log('asasasa',action)),
            delay(1000),
            mapTo([{id:1, pageName:'home'},{id:2, pageName:'about'}]),
            map((data)=>listPagesSuccess(data))
        ))
    )
}


const pagesEpics = combineEpics(listPagesAttemptEpic);
export default pagesEpics;