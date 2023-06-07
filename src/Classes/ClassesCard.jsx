
const ClassesCard = ({category}) => {
    const {image,name,instructor_name,available_seats,price}=category
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">Name:{instructor_name}</h2>
            <p className="text-2xl">Games: {name}</p>
            <p className="text-2xl">Available Seats:{available_seats}</p>
            <p>Price: ${price}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
    </div>
    );
};

export default ClassesCard;