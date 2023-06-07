import Swal from "sweetalert2";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "./MenuItem";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const ManageItems = () => {
  const [menus, loading, refetch] = useMenu();
  // console.log(menus);
  const [axiosSecure] = useAxiosSecure();

  const handleUpdate = (item) => {
    console.log(item.name);
  };

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You want to remove ${item.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-item/${item._id}`).then((res) => {
          if (res.data.deletedCount) {
            toast.success(`${item.name} has been Removed.`, {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            refetch();
          }
        });
      }

      // if (result.isConfirmed) {
      //   fetch(`http://localhost:5000/delete-item/${item._id}`, {
      //     method: "DELETE",
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       if (data.deletedCount) {
      //         refetch();
      //         Swal.fire(
      //           "Removed!",
      //           `${item.name} has been Removed.`,
      //           "success"
      //         );
      //       }
      //     });
      // }
    });
  };

  return (
    <div className="max-w-6xl container mx-auto p-5 2xl:p-0">
      <SectionHeader subTitle={"Need to change?"} title={"manage all items"} />

      {
        // show spinner/loading screen
        loading && (
          <div className="flex items-center justify-center h-[70vh]">
            <progress className="progress progress-info w-56"></progress>
          </div>
        )
      }

      <div className="overflow-x-auto my-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th className="text-right">Price</th>
              <th className="text-center">Update</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {menus.map((item, index) => (
              <MenuItem
                key={item._id}
                item={item}
                index={index}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
