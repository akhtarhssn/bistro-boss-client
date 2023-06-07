import { useQuery } from "@tanstack/react-query";

const useMenu = () => {
  // const [menus, setMenus] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("https://bistor-boss-server.vercel.app/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenus(data);
  //       setLoading(false);
  //     });
  // }, []);

  const {
    data: menus = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch("https://bistor-boss-server.vercel.app/menu");
      return res.json();
    },
  });

  return [menus, loading, refetch];
};

export default useMenu;
