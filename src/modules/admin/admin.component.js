import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import LoginComponent from './auth/login/login.component';
import RegisterComponent from './auth/register/register.components';
import HeaderComponet from './header/header.component'


const AdminComponent = props=>{

    return (
        <BrowserRouter>
            <HeaderComponet/>
            <Route  path="/admin/login" component={LoginComponent} />
            <Route path="/admin/register" component={RegisterComponent}/>
        </BrowserRouter>
        
    )
}

const mapStateToProps = state=>{
    return{authReducer: state.authReducer}
}

export default connect(mapStateToProps)(AdminComponent)