import { useContext } from "react";
import { AuthContext } from "../../Shared/Providers/AuthProviders";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useCourses = () => {
    const {user,loading}=useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: course = [] } = useQuery({
        queryKey: ['courses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })

    return [course, refetch]

};

export default useCourses;