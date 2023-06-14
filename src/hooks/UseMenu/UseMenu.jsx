import { useQuery } from "@tanstack/react-query";

const UseMenu = () => {
    const {data: menu = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() => {
            const res = await fetch('https://summer-school-server-tau.vercel.app/classes');
            return res.json();
        }
    })

    return [menu, loading, refetch]
};

export default UseMenu;