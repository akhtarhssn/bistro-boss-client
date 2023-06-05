import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container mx-auto p-5 md:p-0">
      {user && (
        <h3 className="text-xl ">
          Welcome Back!{" "}
          <span className="font-bold underline underline-offset-4 decoration-4 decoration-[#D1A054]">
            {user.displayName}
          </span>
        </h3>
      )}
    </div>
  );
};

export default UserHome;
