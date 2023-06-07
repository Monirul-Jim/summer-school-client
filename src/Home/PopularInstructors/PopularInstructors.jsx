import UseMenu from "../../hooks/UseMenu/UseMenu";
import PopularInstructorsCard from "./PopularInstructorsCard";

const PopularInstructors = () => {
    const [menu] = UseMenu()
    // const instructor = menu.filter(item => item.category === 'Instructor')
    const instructor = menu
        .filter(item => item.category === 'Instructor')
        .sort((a, b) => b.totalStudents - a.totalStudents);
    return (
        <div>
            <h1 className="text-4xl mt-8 text-center">Meet Our Popular Instructors</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {
                    instructor.map(category => <PopularInstructorsCard key={category._id} category={category}></PopularInstructorsCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;