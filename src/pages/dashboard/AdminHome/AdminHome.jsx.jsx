import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { BsWalletFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { TbChefHat } from "react-icons/tb";
import { MdLocalShipping } from "react-icons/md";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });
  return (
    <div className="max-w-7xl container mx-auto p-5 md:p-0">
      {user && (
        <h3 className="text-xl ">
          Welcome Back Admin!{" "}
          <span className="font-bold underline underline-offset-4 decoration-4 decoration-[#D1A054]">
            {user.displayName}
          </span>
        </h3>
      )}
      <div className="md:py-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <div className="flex justify-evenly items-center p-10 rounded-md bg-gradient-to-tr from-purple-600 to-purple-200 text-white gap-5">
          <BsWalletFill size={60} />
          <div className="text-center">
            <h2 className="text-4xl font-bold">${stats.revenue}</h2>
            <p className="text-xl">Revenue</p>
          </div>
        </div>
        <div className="flex justify-evenly items-center p-10 rounded-md bg-gradient-to-tr from-amber-500 to-amber-200 text-white gap-5">
          <FaUsers size={60} />
          <div className="text-center">
            <h2 className="text-4xl font-bold">{stats.users}</h2>
            <p className="text-xl">Customers</p>
          </div>
        </div>
        <div className="flex justify-evenly items-center p-10 rounded-md bg-gradient-to-tr from-rose-500 to-rose-200 text-white gap-5">
          <TbChefHat size={60} />
          <div className="text-center">
            <h2 className="text-4xl font-bold">{stats.products}</h2>
            <p className="text-xl">Recipes</p>
          </div>
        </div>
        <div className="flex justify-evenly items-center p-10 rounded-md bg-gradient-to-tr from-blue-400 to-blue-200 text-white gap-5">
          <MdLocalShipping size={60} />
          <div className="text-center">
            <h2 className="text-4xl font-bold">{stats.orders}</h2>
            <p className="text-xl">Orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
