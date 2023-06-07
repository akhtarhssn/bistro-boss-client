import { Helmet } from "react-helmet-async";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import useCart from "../../../hooks/useCart";
import CartItem from "./CartItem/CartItem";
import { AiFillCreditCard } from "react-icons/ai";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();

  const totalPrice = cart.reduce((sum, item) => item.price + sum, 0);

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
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              refetch();
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
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <SectionHeader title={"Review Your Cart"} subTitle={"My Cart"} />
      <div className="bg-white max-w-7xl mx-auto p-10 rounded-md">
        <div className="flex justify-between items-center text-xl font-semibold">
          <h4>Total Items: {cart.length}</h4>
          <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
        </div>
        <div className="overflow-x-auto my-10">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th className="text-right">Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <CartItem
                  key={item._id}
                  item={item}
                  index={index}
                  handleDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
        {cart.length !== 0 && (
          <Link to="/dashboard/payment">
            <button className="bg-amber-500 py-3 px-10 rounded-md text-white font-semibold uppercase flex gap-3 items-center mx-auto">
              <AiFillCreditCard /> Proceed to Checkout
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default MyCart;
