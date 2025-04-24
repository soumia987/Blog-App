import React from 'react';

const FilterBar = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="border border-[#E0C3FC] rounded-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-[#FDCB82]"
      >
        <option value="">Toutes les catégories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
