import Carousel from "../Carousel/Carousel";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";

const Home = () => {
    return (
        <div>
           <Carousel></Carousel>
           <PopularClasses></PopularClasses>
           <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;