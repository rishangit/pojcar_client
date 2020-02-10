
import { createStore,applyMiddleware } from 'redux';
import rootReducer from './root.reducer';
import rootEpic from './root.epic'
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension'

const epicMiddleware = createEpicMiddleware();
const enhanceWithDevTools = composeWithDevTools({})

const configstore = () => {
    const store = createStore(rootReducer,
        enhanceWithDevTools(
            applyMiddleware(epicMiddleware)));


    epicMiddleware.run(rootEpic)

    return store

}


export default configstore