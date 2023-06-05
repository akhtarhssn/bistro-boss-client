import { IoMdRemoveCircle } from "react-icons/io";
import { RiUserStarFill } from "react-icons/ri";

const User = ({ user, index, handleDelete, handleMakeAdmin }) => {
  const { name, email, role } = user;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        {role === "Admin" ? (
          <button
            className="text-xl bg-success p-2 rounded text-white tooltip"
            data-tip={role}
            onClick={() => handleMakeAdmin(user)}
          >
            {" "}
            <RiUserStarFill />{" "}
          </button>
        ) : (
          <button
            className="text-xl bg-[#D1A054] p-2 rounded text-white tooltip"
            data-tip="User"
            onClick={() => handleMakeAdmin(user)}
          >
            {" "}
            <RiUserStarFill />{" "}
          </button>
        )}
      </td>
      <td>
        <button
          className="text-xl bg-red-600 p-2 rounded text-white"
          onClick={() => handleDelete(user)}
        >
          {" "}
          <IoMdRemoveCircle />{" "}
        </button>
      </td>
    </tr>
  );
};

export default User;
