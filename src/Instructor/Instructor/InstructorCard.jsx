
const InstructorCard = ({category}) => {
    const {Image,Name,Email,classes,take_classes}=category
    return (
        <div className="card dark light w-96 bg-base-100 shadow-xl">
            <figure><img src={Image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Name:{Name}</h2>
                <p>Email: {Email}</p>
                <p>Classes:{classes}</p>
                <p className="text-2xl">Total Classes:</p>
                {
                    take_classes.map(item=><p key={item.id}>{item}</p>)
                }
                {/* <p>Take Classes: {take_classes}</p> */}
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;