import Carousel from "../Carousel/Carousel";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
           <Carousel></Carousel>
           <PopularClasses></PopularClasses>
           <PopularInstructors></PopularInstructors>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;