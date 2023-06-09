import { useQuery } from '@tanstack/react-query';
import{ useContext } from 'react';
import { AuthContext } from '../../Shared/Providers/AuthProviders';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';

const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        enabled:!!localStorage.getItem('access-token'),
        queryKey: ['isAdmin', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;