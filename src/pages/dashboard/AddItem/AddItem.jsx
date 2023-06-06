import { ImSpoonKnife } from "react-icons/im";
import SectionHeader from "../../../components/SectionHeader/SectionHeader";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const AddItem = () => {
  const imageHostingToken = import.meta.env.VITE_IMGBB_API_KEY;
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;

  const [axiosSecure] = useAxiosSecure();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    // console.log(data);

    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(imageHostingUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const photoUrl = imgResponse.data.display_url;
          const { name, price, category, details: recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: photoUrl,
          };
          console.log(newItem);
          axiosSecure.post("/add-item", newItem).then((postData) => {
            // console.log("After Posting: ", { postData });
            if (postData.data.insertedId) {
              toast.success("Item Added Successfully!", {
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
    <div className="container mx-auto p-5 2xl:p-0">
      <SectionHeader subTitle={"What's New?"} title={"add a item"} />
      <div className="w-full md:max-w-5xl mx-auto dark:bg-gray-900 bg-gray-200 p-5 md:p-20 rounded-xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2  font-medium text-gray-900 dark:text-white"
            >
              Recipe Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              {...register("name")}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Chicken and Walnut Salad"
              required
            />
          </div>
          <div className="md:flex gap-5">
            <div className="mb-6 w-full">
              <label
                htmlFor="Category"
                className="block mb-2  font-medium text-gray-900 dark:text-white"
              >
                Category*
              </label>
              <select
                className="select select-lg w-full dark:bg-gray-700 dark:text-gray-400"
                {...register("category")}
              >
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="dessert">Dessert</option>
                <option value="soup">Soup</option>
                <option value="drink">Drink</option>
                <option value="offered">Offered</option>
                <option value="popular">Popular</option>
              </select>
            </div>
            <div className="mb-6 w-full">
              <label
                htmlFor="price"
                className="block mb-2  font-medium text-gray-900 dark:text-white"
              >
                Price*
              </label>
              <input
                type="text"
                id="price"
                name="price"
                {...register("price")}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Price"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="details"
              className="block mb-2  font-medium text-gray-900 dark:text-white"
            >
              Recipe Details*
            </label>
            <textarea
              id="details"
              name="details"
              {...register("details")}
              rows="5"
              className="block p-5 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <div className="mb-6">
            <input
              type="file"
              className="file-input w-full max-w-xs dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600"
              {...register("image")}
            />
          </div>
          <div className="text-center md:text-left">
            <button
              type="submit"
              className="flex mx-auto md:mx-0 items-center gap-2 text-white bg-gradient-to-r from-[#835D23] to-[#B58130] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-lg px-10 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Item <ImSpoonKnife />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
