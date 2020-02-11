
import { LOGIN_ATTEMPT, LOGIN_SUCCESS } from './login.action'


const initLogingState = {
    loging:{
            email: '',
            pasword: '' 
    },
    user:{
        firstName:'',
        lastName:'',
        imageUrl:'',
        email:''
    }
}


const loginReducer = (state = initLogingState, action) => {
    let { type, payload } = action;

    switch (type) {
        // case LOGIN_ATTEMPT:
        //     console.log('loging attempt')
        //     break;

        case LOGIN_SUCCESS:
            console.log('loging success', action)
            break

        default:
            break;
    }
    return state

}

export default loginReducer