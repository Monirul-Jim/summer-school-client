import { useEffect, useState } from "react";
import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div className="mt-4">
            <h1 className="text-3xl text-center mb-8">Our Popular Classes</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    categories.map(category=><PopularClassesCard key={category._id} category={category} ></PopularClassesCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;