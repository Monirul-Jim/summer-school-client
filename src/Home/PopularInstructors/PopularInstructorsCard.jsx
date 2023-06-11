

const PopularInstructorsCard = ({category}) => {
    const {teacher,image,instructorName,experience,totalStudents}=category
    return (
        <div className="card dark light w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Teacher Name:{instructorName}</h2>
          <h2 className="card-title">Teach:{teacher}</h2>
          <p>experience:{experience}</p>
          <p>Student:{totalStudents}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default PopularInstructorsCard;