import UseMenu from "../../hooks/UseMenu/UseMenu";
import InstructorCard from "./InstructorCard";

const Instructor = () => {
    const [menu]=UseMenu()
    const popularClasses=menu.filter(item=>item.category==='instructor')
    return (
        <div className="mt-4">
            <h1 className="text-3xl text-center mb-8">Our Popular Classes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    popularClasses.map(category=><InstructorCard key={category.id} category={category} ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructor;

