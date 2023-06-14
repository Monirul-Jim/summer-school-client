import { useRef} from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";


const InstructorClassesCard = ({ item }) => {
    const { photo, name, instructorName, available_seats, email, price, status,_id } = item

    const [axiosSecure] = useAxiosSecure()
    const modalRef = useRef(null);
    const { data: feedback = []} = useQuery(['feedback',_id], async () => {
        const res = await axiosSecure.get(`/feedback/${_id}`)
        return res.data;
    })
    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };
    const renderFeedback = () => {
        if (feedback.length > 0) {
          return feedback.map((item) => <p className="text-xl" key={item._id}>{item?.name}</p>);
        } else {
          return <p>No feedback</p>;
        }
      };
    return (
        <div className="card dark light w-96 bg-base-100 shadow-xl">
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
                   
                </div>
                <dialog id="my_modal_3" ref={modalRef} className="modal">
                    <form method="dialog" className="modal-box bg-blue-300">
                        <button 
                            htmlFor="my_modal_3"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => {
                                if (modalRef.current) {
                                    modalRef.current.close();
                                }
                            }}
                        >
                            ✕
                        </button>
                        {renderFeedback()}
                    </form>
                </dialog>
                <div className="flex justify-end">
                {status === 'denied' && <button className="btn btn-error w-3/12">Denied</button>}
                </div>
                <button className="btn btn-primary" >Enroll Student</button>
                <button onClick={openModal} className="btn btn-primary" >See FeedBack </button>
                {status === 'denied' ? (
                  <button className="btn btn-primary w-full" disabled> Update</button>):
                  ( <Link to={`/dashboard/update-class/${_id}`} id={_id} ><button className="btn btn-primary w-full" disabled={status === 'denied'}>Update </button></Link>)}
                {/* <Link to={`/dashboard/update-class/${_id}`} ><button className="btn btn-primary" disabled={status === 'denied'}>Update </button></Link> */}
             
                
            </div>
        </div>
    );
};

export default InstructorClassesCard;



 {/* {statuses === 'pending' && (
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
                    {!statuses && <button className="btn btn-primary">Pending</button>} */}
                    
    // const updateStatus = async (newStatus) => {
    //     try {
    //         // Make a PUT request to update the status
    //         await axiosSecure.put(`/updateStatus/${item._id}`, { status: newStatus });
    //         setStatus(newStatus);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };    
        // const [statuses, setStatus] = useState(item.status);