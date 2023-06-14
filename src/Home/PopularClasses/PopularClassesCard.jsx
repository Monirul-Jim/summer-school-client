import { Fade } from "react-awesome-reveal";

const PopularClassesCard = ({ category }) => {
  const { sportName, image, specialFeatures, totalStudents } = category
  return (
    <Fade direction="left">
      <div className="card dark light w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Name:{sportName}</h2>
          <p>Features:{specialFeatures}</p>
          <p>Student:{totalStudents}</p>
        </div>
      </div>
    </Fade>

  );
};

export default PopularClassesCard;