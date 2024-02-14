import { useQuery } from "@tanstack/react-query";
import userAxiosSecure from "./userAxiosSecure";

const useCart = () => {
    const axiosSecure = userAxiosSecure()
    // Tan Stack Query
    const {data: cart = []} = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get('/carts')
            return res.data;
        }
    })
    return [cart]
};

export default useCart;