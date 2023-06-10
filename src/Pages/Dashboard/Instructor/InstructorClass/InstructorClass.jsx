import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure/useAxiosSecure";
import InstructorClassesCard from "./InstructorClassesCard";
import { useContext } from "react";
import { AuthContext } from "../../../../Shared/Providers/AuthProviders";

const InstructorClass = () => {
    const {user}=useContext(AuthContext)
    const [axiosSecure]=useAxiosSecure()
    const { data: addClasses = [], refetch } = useQuery(['addClasses'], async () => {
        const res = await axiosSecure.get(`/addClasses?email=${user?.email}`)
        return res.data;
    })
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
          {
            addClasses.map(item=><InstructorClassesCard key={item._id} refetch={refetch}  item={item}></InstructorClassesCard>)
          }
         </div>
    );
};

export default InstructorClass;