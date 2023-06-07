import{ useContext } from 'react';
import Loader from '../Components/Loader/Loader';
import { AuthContext } from '../Shared/Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const{user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
        return <Loader></Loader>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivateRoutes;