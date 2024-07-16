import React, { useState, useEffect } from "react";
import axios from "axios";

const DropdownList = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await axios.get("http://localhost:5000/categorys");
        const categoryNames = categoriesResponse.data.map((category) => category.name);
        setCategories(categoryNames);

        const productsResponse = await axios.get("http://localhost:5000/products");
        setProducts(productsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = async (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);

    try {
      if (selectedCategory === "all") {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
      } else {
        const response = await axios.get(`http://localhost:5000/products?category=${selectedCategory}`);
        setProducts(response.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div>
      <div className="mb-4 w-full">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full h-10 border border-gray-300 rounded px-3 py-2 text-gray-700 focus:outline-none focus:border-blue-500"
        >
          <option value="">Select Category</option>
          <option value="all" key="all">All</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-3 py-2">Name</th>
              <th className="border border-gray-300 px-3 py-2">Stock</th>
              <th className="border border-gray-300 px-3 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="border border-gray-300 px-3 py-2">
                  {product.name}
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  {product.stock}
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  ${product.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DropdownList;
