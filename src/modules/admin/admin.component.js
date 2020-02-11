import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import LoginComponent from './auth/login/login.component';
import RegisterComponent from './auth/register/register.components';
import HeaderComponet from './header/header.component'
import PagesContainerComponent from './pages/pages.container/components/pages.container.component'

const AdminComponent = props=>{

    return (
        <BrowserRouter>
            <HeaderComponet/>
            <Route path="/admin/login" component={LoginComponent} />
            <Route path="/admin/register" component={RegisterComponent}/>
            <Route path="/admin/pages" component ={PagesContainerComponent}/>
        </BrowserRouter>
        
    )
}

const mapStateToProps = state=>{
    return{authReducer: state.authReducer}
}

export default connect(mapStateToProps)(AdminComponent)