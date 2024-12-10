import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Table } from "flowbite-react";

const ProductManagement = () => {
  return (
    <div className="flex container justify-between gap-12 text-left ">
      <aside className="w-2/6 h-screen bg-gray-300">
        <nav>
          <h1 className="text-2xl font-bold py-2.5">Dashboard</h1>
          <ul>
            <li className="text-sm text-white bg-orange-500 font-medium rounded-lg px-5 py-2.5 me-2 mb-2">
              <NavLink to={"/product-management"}>Product</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="w-4/6 mx-auto ">
        <header>
          <p className="text-2xl font-bold text-orange-500 py-2.5">
            Product Management
          </p>
          <div className="text-sm text-white bg-orange-500 font-medium rounded-lg px-5 py-2.5 mb-2 w-1/6 ">
            <NavLink to={"/product-management/create-product"}>
              New Product
            </NavLink>
          </div>
          <div className="py-2.5">
            <input type="text" placeholder="Search Product" />
            <button className="text-sm text-white bg-orange-500 font-medium rounded-lg px-5 py-2.5">
              Search
            </button>
          </div>
        </header>
        <div className="content pt-10">
          <div className="overflow-x-auto">
            <Table>
              <Table.Head>
                <Table.HeadCell>Product name</Table.HeadCell>
                <Table.HeadCell>Color</Table.HeadCell>
                <Table.HeadCell>Category</Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {'Apple MacBook Pro 17"'}
                  </Table.Cell>
                  <Table.Cell>Sliver</Table.Cell>
                  <Table.Cell>Laptop</Table.Cell>
                  <Table.Cell>$2999</Table.Cell>
                  <Table.Cell>
                    <NavLink
                      to={"/product-management/update-product"}
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </NavLink>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Microsoft Surface Pro
                  </Table.Cell>
                  <Table.Cell>White</Table.Cell>
                  <Table.Cell>Laptop PC</Table.Cell>
                  <Table.Cell>$1999</Table.Cell>
                  <Table.Cell>
                    <NavLink
                      to={"/product-management/update-product"}
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </NavLink>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Magic Mouse 2
                  </Table.Cell>
                  <Table.Cell>Black</Table.Cell>
                  <Table.Cell>Accessories</Table.Cell>
                  <Table.Cell>$99</Table.Cell>
                  <Table.Cell>
                    <NavLink
                      to={"/product-management/update-product"}
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Edit
                    </NavLink>
                  </Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <Outlet />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
