import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Authentication from './authentication';

function PrivateRoute2({component:Component,...rest}) {
    return (
        <>
        <Route
        {...rest}
        render ={props=>localStorage.getItem("accessToken") && localStorage.getItem("role")  ?
        (<Component{...props}/>) : ( <Redirect to={{pathname:"/",state:{from:props.location}}}/>)}
        
        />
            
        </>
    )
}

export default PrivateRoute2
