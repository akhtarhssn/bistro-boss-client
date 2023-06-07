import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    // enabled: !!user && loading,
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      // console.log("res from axios", res);
      return res.data;
    },
    // enabled: !!user && loading,
    // queryFn: async () => {
    //   const res = await fetch(
    //     `https://bistor-boss-server.vercel.app/carts?email=${user?.email}`,
    //     {
    //       headers: {
    //         authorization: `bearer ${token}`,
    //       },
    //     }
    //   );
    //   if (!res.ok) {
    //     throw new Error("Network response was not ok");
    //   }
    //   return res.json();
    // },
  });
  return [cart, refetch];
};

export default useCart;
