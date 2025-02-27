import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { Dashboard, PostAdd, Add, ListAlt, People, RateReview, Menu } from '@mui/icons-material';
// import navLogo from '../../assets/images/footerlogo.webp';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Toggle button for mobile */}
      <button 
        className="fixed top-[12%] right-[6%] md:hidden z-50 bg-gray-900 text-white p-2 rounded"
        onClick={toggleSidebar}
      >
        <Menu />
      </button>

      {/* Sidebar */}
      <div className={`fixed md:top-20 top-16 left-0 w-64 h-full bg-[#111418] text-white z-40 transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}>
        <div className="flex items-center justify-center py-4">
          <Link to="/">
              <div className="flex items-center gap-4">
                        <div className="h-6 w-6">
                          <svg
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236Z"
                              fill="currentColor"
                            />
                          </svg>
                        </div>
                        <Link to="/" className="text-lg font-bold tracking-tight text-white">
                          Bookland
                        </Link>
                      </div>
          </Link>
        </div>
        <nav className="mt-4 flex flex-col space-y-2">
          <Link to="/admin/dashboard" className="flex items-center p-4 hover:bg-gray-700 transition">
            <Dashboard className="mr-2" />
            <span>Dashboard</span>
          </Link>

          <div className="p-4 hover:bg-gray-700 transition">
            <SimpleTreeView>
              <TreeItem nodeId="1" label="Products">
                <Link to="/admin/products" className="flex items-center mt-2 pl-4 hover:text-gray-400">
                  <PostAdd className="mr-2" />
                  <span>All Products</span>
                </Link>
                <Link to="/admin/product" className="flex items-center pl-4 mt-2 hover:text-gray-400">
                  <Add className="mr-2" />
                  <span>Create Product</span>
                </Link>
              </TreeItem>
            </SimpleTreeView>
          </div>

          <Link to="/admin/orders" className="flex items-center p-4 hover:bg-gray-700 transition">
            <ListAlt className="mr-2" />
            <span>Orders</span>
          </Link>
          <Link to="/admin/users" className="flex items-center p-4 hover:bg-gray-700 transition">
            <People className="mr-2" />
            <span>Users</span>
          </Link>
          <Link to="/admin/reviews" className="flex items-center p-4 hover:bg-gray-700 transition">
            <RateReview className="mr-2" />
            <span>Reviews</span>
          </Link>
        </nav>
      </div>

      {/* Background overlay when sidebar is open on mobile */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-30 md:hidden" onClick={toggleSidebar}></div>}
    </>
  );
};

export default SideBar;
