// import UseMenu from "../hooks/UseMenu/UseMenu";
import { useQuery } from "@tanstack/react-query";
import ClassesCard from "./ClassesCard";
import useAxiosSecure from "../hooks/useAxiosSecure/useAxiosSecure";

const Classes = () => {
    const [axiosSecure]=useAxiosSecure()
    const { data: approvedClass = [],  } = useQuery(['approvedClass'], async () => {
        const res = await axiosSecure.get('/approvedClass')
        return res.data;
    })
    const approvedClasses = approvedClass.filter(classItem => classItem.status === 'approved');
    // const [menu] = UseMenu()
    // const classes = menu.filter(item => item.category === 'classes')
    return (
        <div className="mt-4">
            <h1 className="text-3xl text-center mb-8">Our Popular Classes you find here</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                {
                    approvedClasses.map(category => <ClassesCard key={category._id} category={category} ></ClassesCard>)
                }
            </div>
        </div>
    );
};

export default Classes;