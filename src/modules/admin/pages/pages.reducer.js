
import {LIST_PAGES_SUCCESS} from './pages.actions'

const initPagesState = {
    status:0,
    pagesList:[]
}


const pagesReducer = (state = initPagesState, action)=>{
    const {type, payload} = action
    switch (type) {
        case LIST_PAGES_SUCCESS:
            return {
                ...state,
                pagesList:payload
            }
            break;
    
        default:
            break;
    }
    return state
}

export default pagesReducer