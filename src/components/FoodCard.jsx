import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import { toast } from "react-toastify";

const FoodCard = ({ item }) => {
  const { _id, name, recipe, image, price } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();

  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = () => {
    const cartItem = {
      itemId: _id,
      name,
      price,
      image,
      userEmail: user?.email,
    };
    // console.log(item.name);
    if (user) {
      fetch("https://bistor-boss-server.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success(`${name} added to cart`, {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            refetch(); //refetch cart to update current
            // console.log("Data Inserted Successfully");
          }
        });
    } else {
      Swal.fire({
        title: "Login Required to buy item",
        text: "Proceed to login page? ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
        cancelButtonText: "Not Yet",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card w-full bg-base-100 shadow hover:shadow-2xl duration-300">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="w-full h-[247px] object-cover object-center"
        />
      </figure>
      <p className="absolute right-0 px-6 py-2 rounded-md bg-black text-white font-semibold mr-4 mt-4">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button
            className="px-8 py-3 rounded-lg bg-gray-100 hover:bg-black duration-300 border-b-amber-500 border-0 border-b-4 text-amber-500 my-4"
            onClick={() => handleAddToCart(item)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
