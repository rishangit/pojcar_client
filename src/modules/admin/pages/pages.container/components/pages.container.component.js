import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import PagesNaviComponent from './pages.navi.components';
import { listPagesAttempt } from '../../pages.actions'


const PagesContainerComponent = props =>{
    console.log(props)

    useEffect(()=>{
        console.log('get page list');
        props.listPages_Attempt();
    },[])


    const handleGetdata = ()=>{
        
    }

    return (
        <div>
            <PagesNaviComponent/>
    {/* <div>{props.pagesReducer.pagesList}</div> */}

            <div>This is the pages container page</div>
            <button onClick={handleGetdata}>getdata</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return {pagesReducer:state.pagesReducer}
}

const mapDispatchToProps = {
    listPages_Attempt: listPagesAttempt
}

export default connect(mapStateToProps,mapDispatchToProps )(PagesContainerComponent)