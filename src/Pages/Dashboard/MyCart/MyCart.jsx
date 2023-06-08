import useCourses from "../../../hooks/useCourses/useCourses";

const MyCart = () => {
    const [course]=useCourses();
    const total=course.reduce((total,item)=>item.price+total,0)

    return (
        <div>
           <h1>this course length {course.length}</h1>
           <h1>Total Price: ${total}</h1>
        </div>
    );
};

export default MyCart;