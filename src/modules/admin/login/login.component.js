import React from 'react';
import { loginAttempt } from './login.action'
import { connect } from 'react-redux'

const LoginComponent = props => {

    console.log(props)
    const handleLoging = () => {
        props.login_Attempt({name:'rishan'})
    }
    return (
        <div>This is loging componet

            <button onClick={handleLoging}>Login</button>
        </div>
    )

}

const mapStateToProps = state => {
    return { store: state }
}

const mapDispatchToProps = {
    login_Attempt: loginAttempt
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)