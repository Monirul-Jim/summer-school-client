
const PopularClassesCard = ({category}) => {
    const {sportName,image,specialFeatures,totalStudents}=category
    return (
        <div className="card dark light w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Name:{sportName}</h2>
          <p>Features:{specialFeatures}</p>
          <p>Student:{totalStudents}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default PopularClassesCard;