import { useQuery } from "@tanstack/react-query";

const UseMenu = () => {
    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/classes');
            return res.json();
        }
    })

    return [menu, loading, refetch]
};

export default UseMenu;