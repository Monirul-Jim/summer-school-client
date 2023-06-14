import Carousel from "../Carousel/Carousel";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Testimonials from "../Testimonials/Testimonials";
import ExtraSection from "./ExtraSection/ExtraSection";

const Home = () => {
    return (
        <div>
           <Carousel></Carousel>
           <PopularClasses></PopularClasses>
           <PopularInstructors></PopularInstructors>
           <ExtraSection></ExtraSection>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;