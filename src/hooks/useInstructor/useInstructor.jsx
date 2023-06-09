import { useContext } from "react";
import { AuthContext } from "../../Shared/Providers/AuthProviders";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useInstructor = () => {
    const {user} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        enabled:!!localStorage.getItem('access-token'),
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return res.data.admin;
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;