import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext);
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center">
                <span className="loading loading-bars loading-xl"></span>
               </div>
    }
    
    return (
        <div>
            {user ? children : <Navigate state={location.pathname} to='/auth/signIn'/>}
        </div>
    );
};

export default PrivateRoute;