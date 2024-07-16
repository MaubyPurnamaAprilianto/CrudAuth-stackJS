import React from "react";
import Header from "../../components/layout/adminLayout/HeaderAdmin";
import DropdownList from "../../components/product/category/dropdownlist";

const Admin = () => {
  return (
    <div>
      <Header />
      <div className="p-10  w-[100%] flex flex-col  min-h-screen ">
        <DropdownList />
      </div>
    </div>
  );
};

export default Admin;
