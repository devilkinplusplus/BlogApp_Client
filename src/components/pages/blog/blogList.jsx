import React, { useEffect, useState } from "react";
import Blog from "./blog";
import ReactPaginate from "react-paginate";
import NoItems from "../noItems";
import { getBlogs } from "../../../services/axiosServices";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    getBlogs()
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const getPageData = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return blogs.slice(startIndex, endIndex);
  };

  return (
    <>
      <div className="flex flex-wrap flex-1 p-4 justify-start bg-gray-100 pt-16">
        <div className="flex justify-start items-center mx-9 text-start space-x-5 text-lg text-cyan-900 font-gemunu uppercase border-b-2">
          <span className="border-b-2 border-transparent hover:text-cyan-600 hover:border-cyan-600 focus:text-cyan-600 focus:border-cyan-600 pb-3 cursor-pointer">
            For you
          </span>
          <span className="border-b-2 border-transparent hover:text-cyan-600 hover:border-cyan-600 focus:text-cyan-600 focus:border-cyan-600 pb-3 cursor-pointer">
            Tech
          </span>
          <span className="border-b-2 border-transparent hover:text-cyan-600 hover:border-cyan-600 focus:text-cyan-600 focus:border-cyan-600 pb-3 cursor-pointer">
            Sport
          </span>
          <span className="border-b-2 border-transparent hover:text-cyan-600 hover:border-cyan-600 focus:text-cyan-600 focus:border-cyan-600 pb-3 cursor-pointer">
            Islam
          </span>
          <span className="border-b-2 border-transparent hover:text-cyan-600 hover:border-cyan-600 focus:text-cyan-600 focus:border-cyan-600 pb-3 cursor-pointer">
            Writing
          </span>
          <span className="border-b-2 border-transparent hover:text-cyan-600 hover:border-cyan-600 focus:text-cyan-600 focus:border-cyan-600 pb-3 cursor-pointer">
            Game
          </span>
        </div>

        {blogs.length > 0 ? (
          getPageData().map((item, index) => {
            return <Blog key={index} blog={item} />;
          })
        ) : (
          <>
            <NoItems />
          </>
        )}
        {blogs.length > 0 && (
          <ReactPaginate
            pageCount={Math.ceil(blogs.length / itemsPerPage)}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={handlePageChange}
            containerClassName="flex justify-evenly space-x-4 border py-2 px-4 text-gray-500"
            activeClassName="text-cyan-500 font-semibold text-white rounded-lg"
            previousLabel="Previous"
            nextLabel="Next"
          />
        )}
      </div>
    </>
  );
}

export default BlogList;
