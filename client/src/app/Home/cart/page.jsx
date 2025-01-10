"use client";

import { getCartDetails } from "@/src/AuthPages/auth";
import Footer from "@/src/Components/Footer";
import Navbar2 from "@/src/Components/Navbar2";
import { Button ,  Table} from "antd";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import { FaMinusCircle, FaPlusCircle, FaTrash } from "react-icons/fa";
import { toast } from "sonner";

const Page = () => {
  const [calculateTotal, setCalculateTotal] = useState(0);
    const expandColumns = [
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Quantity",
        dataIndex: "quantity",
        key: "quantity",
        render: ( record) => (
          <div>
            <Button
              type="primary"
              size="small"
              onClick={() => handleQuantityChange(record.key, -1)}
            >
              -
            </Button>
            <span style={{ margin: "0 10px" }}>{record}</span>
            <Button
              type="primary"
              size="small"
              onClick={() => handleQuantityChange(record.key, 1)}
            >
              +
            </Button>
          </div>
        ),
      },
      {
        title: "Total",
        dataIndex: "total",
        key: "total",
        render: (record) => `$${record.price * record.quantity}`,
      },
      {
        title: "Action",
        dataIndex: "",
        key: "x",

        render: () => (
          <span>
            <FaTrash />
          </span>
        ),
      },
    ];
const columns = [
  {
    title: "Painting Name",
    dataIndex: "paintingName",
    key: "paintingName",
  },
  {
    title: "Price",
    dataIndex: "price",

    responsive: ["lg"],
    key: "price",
    render: (price) => `$${price}`,
  },
  {
    title: "Quantity",
    dataIndex: "quantity",

    responsive: ["lg"],
    key: "quantity",
    render: (record) => (
      <div>
        <Button
          type="primary"
          size="small"
          onClick={() => handleQuantityChange(record.key, -1)}
        >
          -
        </Button>
        <span style={{ margin: "0 10px" }}>{record}</span>
        <Button
          type="primary"
          size="small"
          onClick={() => handleQuantityChange(record.key, 1)}
        >
          +
        </Button>
      </div>
    ),
  },
  {
    title: "Total",

    responsive: ["lg"],
    key: "total",
    render: (record) => `$${record.price * record.quantity}`,
  },
  {
    title: "Action",

    responsive: ["lg"],
    key: "action",
    render: () => (
      <span>
        <FaTrash />
      </span>
    ),
  },
];


const handleQuantityChange = (key, delta) => {
  // console.log(`Updating quantity for item with key: ${key}, delta: ${delta}`);

  setPaintingList((prevData) => {
    const updatedList = prevData.map((item) =>
      item.key === key
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );

    const newTotal = updatedList.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    // console.log("Updated Total:", newTotal); 

    setCalculateTotal(newTotal);

    return updatedList;
  });
};



const router=useRouter();

     const [isSmallScreen, setIsSmallScreen] = useState(false);
const expandedRowRender = (record) => (
  <Table
    columns={expandColumns}
    dataSource={[record]}
    pagination={false}
  />
);
 
 const handleSubmit = () => {
   toast.success("ordered placed successfully");
   router.push("/");
 };
 const [paintingList, setPaintingList] = useState([]);

useEffect(() => {
  const fetchPaintings = async () => {
    const data = await getCartDetails();
    const products = data.products;
    setPaintingList(products); 
    // console.log("Cart data:", data);

    const total = products.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    // console.log("Initial Total:", total);
    setCalculateTotal(total);
  };

  fetchPaintings();
}, []);

useEffect(() => {
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 1024);
  };

  handleResize();
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
  return (
    <div className="h-full bg-brown">
      <Navbar2 />
      <div className="flex flex-col overflow-hidden mb-10 justify-center items-center text-center">
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/2 w-full p-5 md:p-10 order-2 md:order-1 text-gold">
            <div className=" text-gold p-5 rounded-lg">
              <div className="text-start text-lg font-aclonica mb-6">
                <h1>Fill out the form</h1>
              </div>
              <div className="flex gap-2 flex-col md:flex-row">
                <Table
                  columns={columns}
                  dataSource={paintingList}
                  pagination={false}
                  className="custom-table h-full"
                  expandable={
                    isSmallScreen
                      ? {
                          expandedRowRender,
                          defaultExpandedRowKeys: ["0"],
                          expandIcon: ({ expanded, onExpand, record }) =>
                            expanded ? (
                              <FaMinusCircle
                                onClick={(e) => onExpand(record, e)}
                              />
                            ) : (
                              <FaPlusCircle
                                onClick={(e) => onExpand(record, e)}
                              />
                            ),
                        }
                      : undefined
                  }
                  scroll={{ y: 55 * 6 }}
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full p-5 md:p-10 order-1 md:order-2">
            <div className=" p-5 rounded-lg">
              <div className="text-start text-gold text-lg font-aclonica mb-6">
                <h1>Checkout Details</h1>
              </div>
              <div className=" text-gold  rounded-lg">
                <div>
                  <div className="flex justify-between items-center">
                    <h4 className="font-aclonica text-xl">Product</h4>
                    <h4 className="font-aclonica text-xl">Subtotal</h4>
                  </div>
                  <div className="flex justify-between text-white items-center my-4">
                    <h4 className="font-aclonica">paintingName</h4>
                    <p className="font-aclonica">{calculateTotal}</p>
                  </div>
                  <div className="flex justify-between items-center my-4">
                    <h4 className="text-base font-bold">Total</h4>
                    <h4 className="font-aclonica">{calculateTotal}</h4>
                  </div>
                  <div className="border-t-2 text-start border-gold my-8">
                    <p className="my-4 text-white">
                      Your personal data will be used to support your experience
                      throughout this website, to manage access to your account,
                      and for other purposes described in our privacy policy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-gold  text-white font-bold py-4 px-4 rounded-full  w-[300px] "
        >
          Checkout
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
