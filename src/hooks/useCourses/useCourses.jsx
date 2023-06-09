import { useContext } from "react";
import { AuthContext } from "../../Shared/Providers/AuthProviders";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCourses = () => {
    const {user,loading}=useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: course = [] } = useQuery({
        queryKey: ['course', user?.email],
        enabled: !loading && !!user?.email && !! localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure(`/course?email=${user?.email}`)
            return res.data;
        },
    })

    return [course, refetch]

};

export default useCourses;