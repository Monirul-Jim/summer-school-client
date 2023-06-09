import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure/useAxiosSecure";
import MyClassesCard from "./MyClassesCard";

const MyClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [],refetch } = useQuery(['payments'], async () => {
        const res = await axiosSecure.get('/payments')
        return res.data;
    })
    return (
        <div>
            <h1>hello this is monirul</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    users.map(item => <MyClassesCard key={item._id} refetch={refetch} item={item} ></MyClassesCard>)
                }
            </div>
        </div>
    );
};

export default MyClasses;