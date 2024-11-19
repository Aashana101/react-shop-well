import React, { useState } from "react";
import products from "../data/products.json"; // Assuming products data is in this file
import ProductCard from "./ProductCard";
import FilterSearch from "./FilterSearch"; // Assuming FilterSearch component is used for search, filter, and sort
import "./ProductList.css";

const ProductList = ({ addToCart }) => {
  const [filter, setFilter] = useState(""); // Filter state for category
  const [search, setSearch] = useState(""); // Search state for product name
  const [sort, setSort] = useState(""); // Sort state for sorting products by price

  // Filter products based on search and selected category
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (filter ? product.category === filter : true)
  );

  // Sort the filtered products based on the selected sort option (ascending/descending)
  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sort === "asc") {
      return a.price - b.price; // Ascending order by price
    } else if (sort === "desc") {
      return b.price - a.price; // Descending order by price
    }
    return 0; // No sorting
  });

  return (
    <div>
      {/* FilterSearch for category, search, and sort */}
      <FilterSearch
        setFilter={setFilter}
        setSearch={setSearch}
        setSort={setSort}
      />

      {/* Product list container */}
      <div className="product-cards-container">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart} // Passing addToCart as a prop
            />
          ))
        ) : (
          <p className="no-products-message">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
