import {ReGISTER_SUCCESS, REGISTER_ATTEMPT} from './register.action'
const initRegisterState = {
    firstName:'',
    lastName:'',
    imageUrl:'',
    email:''
}


const registerReducer = (state=initRegisterState , action)=>{
    const {type, payload} = action;

    switch (type) {
        case REGISTER_ATTEMPT:
            console.log('register attemp')
            
            break;
            case ReGISTER_SUCCESS:
                console.log('register success')
                
                break;
    
        default:
            break;
    }

    return state
}

export default registerReducer