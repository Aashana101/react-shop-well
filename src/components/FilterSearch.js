import React from "react";
import "./FilterSearch.css";

const FilterSearch = ({ setFilter, setSearch, setSort }) => {
  return (
    <div className="filter-search">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search products"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category filter */}
      <select onChange={(e) => setFilter(e.target.value)} defaultValue="">
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Footwear">Footwear</option>
        <option value="Accessories">Accessories</option>
        <option value="Dress">Dress</option>
      </select>

      {/* Sort by price */}
      <select onChange={(e) => setSort(e.target.value)} defaultValue="">
        <option value="">Sort by Price</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default FilterSearch;
