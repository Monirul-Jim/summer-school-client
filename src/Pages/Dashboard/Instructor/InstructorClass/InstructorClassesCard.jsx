import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure/useAxiosSecure";


const InstructorClassesCard = ({ item }) => {
    const { photo, name, instructorName, available_seats, email, price, status } = item
    const [statuses, setStatus] = useState(item.status);
    const [axiosSecure] = useAxiosSecure()

    const updateStatus = async (newStatus) => {
        try {
            // Make a PUT request to update the status
            await axiosSecure.put(`/updateStatus/${item._id}`, { status: newStatus });
            setStatus(newStatus);
        } catch (error) {
            console.log(error);
        }
    };
    const handleGetFeedback = () => {
        fetch('http://localhost:5000/feedback', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => {
          // Process the feedback data here
          console.log(data);
        })
        .catch(error => {
          // Handle any errors
          console.error(error);
        });
      };
      
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Instructor Name:{instructorName}</h2>
                <h3 className="text-xl">Instructor Email: {email}</h3>
                <div className="flex space-x-4">
                    <p>Sport Name: {name}</p>
                    <p>Available Seats: {available_seats}</p>
                </div>
                <p>Price: {price} </p>
                <p>Status:{status}</p>
                <div className="card-actions justify-end">
                    {statuses === 'pending' && (
                        <>
                            <button className="btn btn-primary" onClick={() => updateStatus('approved')}>
                                Approve
                            </button>
                            <button className="btn btn-error" onClick={() => updateStatus('denied')}>
                                Deny
                            </button>
                        </>
                    )}
                    {statuses === 'approved' && <button className="btn btn-primary">Approved</button>}
                    {statuses === 'denied' && <button className="btn btn-error">Denied</button>}
                    {!statuses && <button className="btn btn-primary">Pending</button>}









                    {/* {status === 'pending' && (
                        <button className="btn btn-primary" onClick={() => updateStatus('approved')}>
                            Approve
                        </button>
                    )}
                    {status === 'pending' && (
                        <button className="btn btn-error" onClick={() => updateStatus('denied')}>
                            Deny
                        </button>
                    )}
                    {status !== 'pending' && <button className="btn">{status}</button>} */}
                </div>
                <button className="btn btn-primary" >Enroll Student</button>
                <button className="btn btn-primary" >See FeedBack </button>
                <button className="btn btn-primary" >Update </button>
                
            </div>
        </div>
    );
};

export default InstructorClassesCard;