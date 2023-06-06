import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../../shared/Cover/Cover";
import coverImg from "../../../assets/shop/banner2.jpg";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
  const categories = [
    "salad",
    "pizza",
    "soup",
    "dessert",
    "drinks",
    "offered",
    "popular",
  ];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu, loading] = useMenu();

  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  const offered = menu.filter((item) => item.category === "offered");
  const popular = menu.filter((item) => item.category === "popular");

  // show spinner/loading screen
  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center h-[70vh]">
  //       <progress className="progress progress-info w-56"></progress>
  //     </div>
  //   );
  // }

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover
        img={coverImg}
        title={"Order Food"}
        subTitle={"Would you like to try a dish?"}
      />
      <div className="max-w-7xl container mx-auto my-12 text-center p-5 md:p-0">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drink</Tab>
            <Tab>Offered</Tab>
            <Tab>Popular</Tab>
          </TabList>
          {loading && (
            <div className="flex items-center justify-center h-[70vh]">
              <progress className="progress progress-info w-56"></progress>
            </div>
          )}
          <TabPanel>
            <OrderTab items={salads} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizzas} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={soups} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={desserts} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={offered} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={popular} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
