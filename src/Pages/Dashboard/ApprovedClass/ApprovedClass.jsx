import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import ApprovedClassCard from "./ApprovedClassCard";

const ApprovedClass = () => {
    const [axiosSecure]=useAxiosSecure()
    const { data: approvedClass = [], refetch } = useQuery(['addClasses-admin'], async () => {
        const res = await axiosSecure.get('/addClasses-admin')
        return res.data;
    })
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            {
                approvedClass.map(item=><ApprovedClassCard key={item._id}  refetch={refetch} item={item}></ApprovedClassCard>)
            }
        </div>
    );
};

export default ApprovedClass;