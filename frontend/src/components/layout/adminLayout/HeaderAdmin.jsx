import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const HeaderAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    window.location.href = "/login";

    console.log("Logout");
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/admin"
                  className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Dashboard
                </Link>
                <Link
                  to="/admin/productlist"
                  className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Product
                </Link>
                <Link
                  to="/admin/userlist"
                  className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Users
                </Link>
                <Link
                  to="/admin/categorylist"
                  className="hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Category
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:block ml-4 flex items-center md:ml-6">
              <Link
                to="/login"
                onClick={logout}
                className="border border-red-600 px-4 py-2 rounded-md text-sm font-medium text-white hover:bg-red-700 flex items-center"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="h-5 w-5 mr-2" />
                Log Out
              </Link>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <FontAwesomeIcon icon={faBars} className="block h-6 w-6" />
                ) : (
                  <FontAwesomeIcon icon={faTimes} className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/admin"
            className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/productlist"
            className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Product
          </Link>
          <Link
            to="/admin/userlist"
            className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Users
          </Link>
          <Link
            to="/admin/categorylist"
            className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Category
          </Link>
          <div className="flex items-center justify-between">
            <Link
              to="/login"
              onClick={logout}
              className="border border-red-600 px-4 py-2 rounded-md text-sm font-medium text-white hover:bg-red-700 block flex items-center"
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="h-5 w-5 mr-2" />
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderAdmin;
