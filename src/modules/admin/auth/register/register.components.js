import React from 'react';
import {connect} from 'react-redux';
import{registerAttempt} from './register.action'


const RegisterComponent = props=>{

    console.log('RegisterComponent', props)
    const handleRegister= ()=>{
        props.register_Attempt()
    }

    return(<div>
        
        <div>This is Register page</div>
        <button onClick={handleRegister}>Register</button>
        </div>)
}


const mapStateToProps = state=>{
    return {registerReducer:state.authReducer.registerReducer}
}

const mapDispatchToProps = {
    register_Attempt:registerAttempt
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterComponent)