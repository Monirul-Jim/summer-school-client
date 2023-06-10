import { useRef, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";


const ApprovedClassCard = ({ item }) => {
    const { photo, name, instructorName, available_seats, email, price } = item
    const [statuses, setStatus] = useState(item.status);
    const [axiosSecure] = useAxiosSecure()
    const modalRef = useRef(null);

    const openModal = () => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    };



    const isPending = statuses === 'pending';
    const updateStatus = async (newStatus) => {
        try {
            // Make a PUT request to update the status
            await axiosSecure.put(`/updateStatus/${item._id}`, { status: newStatus });
            setStatus(newStatus);
        } catch (error) {
            console.log(error);
        }
    };
    const handleFeedback=(event)=>{
        event.preventDefault()
        const form=event.target;
        const name=form.name.value
        const feedback={name}
        fetch('http://localhost:5000/feedback', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feedback)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    form.reset()
                    Swal.fire({
                        title: 'Congratulation!',
                        text: 'you feedback instructor to update something',
                        icon: 'success',
                        confirmButtonText: 'Go Back'
                    })
                }
            })


    }
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
                <p>Status:{statuses}</p>
                <div className="card-actions justify-end">
                    {statuses === "pending" && (
                        <>
                            <button
                                className="btn btn-primary"
                                onClick={() => updateStatus("approved")}
                            >
                                Approve
                            </button>
                            <button
                                className="btn btn-error"
                                onClick={() => updateStatus("denied")}
                            >
                                Deny
                            </button>
                        </>
                    )}
                    {statuses === "approved" && (
                        <button className="btn btn-primary" disabled>
                            Approved
                        </button>
                    )}
                    {statuses === "denied" && (
                        <button className="btn btn-error" disabled>
                            Denied
                        </button>
                    )}
                    {!statuses && (
                        <button className="btn btn-primary" disabled>
                            Pending
                        </button>
                    )}
                </div>
                <button onClick={openModal}
                    className="btn btn-primary"
                    disabled={isPending || statuses === "approved"}
                >
                    FeedBack
                </button>
                <dialog id="my_modal_3" ref={modalRef} className="modal">
                    <form onSubmit={handleFeedback} method="dialog" className="modal-box bg-blue-300">
                        <button 
                            htmlFor="my_modal_3"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 -top-2"
                            onClick={() => {
                                if (modalRef.current) {
                                    modalRef.current.close();
                                }
                            }}
                        >
                            ✕
                        </button>
                        <input type="text" name="name" id="" className="w-full p-4" />
                        <input type="submit" value="FeedBack" className="mt-4 btn btn-primary btn-outline w-full" />
                    </form>
                </dialog>
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
            </div>
            {/* <button className="btn btn-primary" disabled={isPending || statuses === 'approved'} >FeedBack </button> */}

        </div>
    );
};

export default ApprovedClassCard;