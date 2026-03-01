import { useState } from "react";
import { products } from "../data/products";

const ProductList = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      {currentItems.map((i) => (
        <div key={i.id} className="border p-2 m-2">
          <p>{i.title}</p>
          <p>{i.description}</p>
          <p>{i.price} 💲</p>
          <p>{i.category}</p>
          <p>{i.rating} ⭐</p>
        </div>
      ))}

      {/* Pagination */}
      <div className="flex gap-2 justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 border ${
              currentPage === index + 1 ? "bg-black text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductList;