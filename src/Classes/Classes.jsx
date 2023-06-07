import UseMenu from "../hooks/UseMenu/UseMenu";
import ClassesCard from "./ClassesCard";

const Classes = () => {
    const [menu] = UseMenu()
    const classes = menu.filter(item => item.category === 'classes')
    return (
        <div className="mt-4">
            <h1 className="text-3xl text-center mb-8">Our Popular Classes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    classes.map(category => <ClassesCard key={category._id} category={category} ></ClassesCard>)
                }
            </div>
        </div>
    );
};

export default Classes;