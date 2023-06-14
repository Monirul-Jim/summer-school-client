import Swal from "sweetalert2";
import useCourses from "../../../hooks/useCourses/useCourses";
import {Link} from "react-router-dom";
import { useEffect } from "react";

const MyCart = () => {
    const [course, refetch] = useCourses();


    const handleDeleteCourse = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/course/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    useEffect(()=>{
        if(course){
            refetch()
        }
    },[course, refetch])
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Sports</th>
                            <th>Sports Name</th>
                            <th>Price</th>
                            <th>Payments</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            course.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.photo} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className="text-end">${item.price}</td>
                                <td className="text-end">
                                    <Link to={`/dashboard/payments/${item._id}`}><button className=" btn btn-sm btn-primary"> Payment</button></Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteCourse(item)} className="btn btn-ghost btn-sm bg-red-600  text-white">Delete</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;