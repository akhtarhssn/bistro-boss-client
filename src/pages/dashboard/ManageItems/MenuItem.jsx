import { BiEdit } from "react-icons/bi";
import { IoMdRemoveCircle } from "react-icons/io";

const MenuItem = ({ item, index, handleDelete, handleUpdate }) => {
  const { name, image, category, price } = item;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-20 h-20">
            <img src={image} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{category}</td>
      <td className="text-right">${price}</td>
      <td className="text-center">
        <button
          className="text-xl text-white bg-[#D1A054] rounded-md p-3 "
          onClick={() => handleUpdate(item)}
        >
          {" "}
          <BiEdit />{" "}
        </button>
      </td>
      <td className="text-center">
        <button
          className="text-xl text-white bg-red-600 rounded-md p-3"
          onClick={() => handleDelete(item)}
        >
          {" "}
          <IoMdRemoveCircle />{" "}
        </button>
      </td>
    </tr>
  );
};

export default MenuItem;
