import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  
  const desserts = menu.filter((item) => item.category === "dessert").slice(0,5)
  const soup = menu.filter((item) => item.category === "soup").slice(0,5)
  const salad = menu.filter((item) => item.category === "salad").slice(0,5)
  const pizza = menu.filter((item) => item.category === "pizza").slice(0,5)
  const drinks = menu.filter((item) => item.category === "drinks").slice(0,5)
  const offered = menu.filter((item) => item.category === "offered").slice(0,5)
  return (
    <div>
        <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover image={orderCover} title="Order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex flex-col-1 justify-center my-10">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
          <Tab>Offered</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={offered}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
