import React from 'react';
import {connect} from 'react-redux'


const PagesNaviComponent = props => {
    
    console.log('navi', props)
    return (
        <div>
            <div>Pages navi componnet</div>
            {props.pagesReducer.pagesList.length}
        </div>
    )
}

const mapStateToProps = state =>{
    return {pagesReducer:state.pagesReducer}
}

export default connect(mapStateToProps)(PagesNaviComponent)