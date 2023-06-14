import { Fade } from "react-awesome-reveal";

const PopularInstructorsCard = ({ category }) => {
  const { teacher, image, instructorName, experience, totalStudents } = category
  return (
    <Fade direction="heartBeat">
      <div className="card dark light w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Teacher Name:{instructorName}</h2>
          <h2 className="card-title">Teach:{teacher}</h2>
          <p>experience:{experience}</p>
          <p>Student:{totalStudents}</p>
        </div>
      </div>
    </Fade>


  );
};

export default PopularInstructorsCard;