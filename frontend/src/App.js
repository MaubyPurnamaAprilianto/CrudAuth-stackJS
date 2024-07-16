import { Routes, Route } from "react-router-dom";


import HomePage from "./pages/HomePage";
import LoginAuth from "./components/auth/LoginAuth";
import RegisterAuth from "./components/auth/RegisterAuth";
import UserList from "./components/users/UserList";
import AddUser from "./components/users/AddUser";
import EditUser from "./components/users/EditUser";
import Admin from "./pages/admin/Admin";
import UserListAdmin from "./pages/admin/UserListAdmin";
import ProductListAdmin from "./pages/admin/ProductListAdmin";
import ProductList from "./components/product/ProductList";
import AddProduct from "./components/product/AddProduct";
import EditProduct from "./components/product/EditProduct";
import CategoryList from "./components/product/category/CategoryList";
import AddCategory from "./components/product/category/addcategory";
import EditCategory from "./components/product/category/editcategory";
import CategoryListAdmin from "./pages/admin/CategoryListAdmin";
import Dropdownlist from "./components/product/category/dropdownlist";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/userlist" element={<UserListAdmin />} />
        <Route path="/admin/productlist" element={<ProductListAdmin />} />
        <Route path="/admin/categorylist" element={<CategoryListAdmin />} />
        
        <Route path="/login" element={<LoginAuth />} />
        <Route path="/register" element={<RegisterAuth />} />
    
        <Route path="/userlist" element={<UserList />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/edituser/:id" element={<EditUser />} />

        <Route path="/categorylist" element={<CategoryList />} />
        <Route path="/addcategory" element={<AddCategory />} />
        <Route path="/editcategory/:id" element={<EditCategory />} />
        <Route path="/dropcategory" element={<Dropdownlist />} />



        <Route path="/productlist" element={<ProductList />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/editproduct/:id" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App;
