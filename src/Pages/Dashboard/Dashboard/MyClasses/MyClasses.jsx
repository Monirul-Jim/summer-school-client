import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure/useAxiosSecure";
import MyClassesCard from "./MyClassesCard";
import { useContext } from "react";
import { AuthContext } from "../../../../Shared/Providers/AuthProviders";

const MyClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const {user}=useContext(AuthContext)
    const { data: payments = [],refetch } = useQuery(['payments'], async () => {
        const res = await axiosSecure.get(`/payments?email=${user?.email}`)
        return res.data;
    })
    return (
        <div>
            <h1 className="mt-8 text-center mb-4">Enroll Course</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    payments.map(item => <MyClassesCard key={item._id} refetch={refetch} item={item} ></MyClassesCard>)
                }
            </div>
        </div>
    );
};

export default MyClasses;