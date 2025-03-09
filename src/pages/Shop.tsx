import React, { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { useCartStore } from '../store/cartStore';
import productsList from '../constant/products';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

const ITEMS_PER_PAGE = 6;

function Shop() {
  const toggleCart = useCartStore((state) => state.toggleCart);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'price' | 'name'>('price');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = productsList.filter(
    (product) =>
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price') {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    }
    return sortOrder === 'asc'
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name);
  });

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const currentProducts = sortedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-purple-600 text-center mb-8">Online Shop</h1>
        <h2 className="text-2xl font-bold text-purple-600 text-center mb-8">Seelenfluesterin donates 10% of all webshop revenue to various animal shelters</h2>

        {/* Filter, Sort, and Search Controls */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <label htmlFor="category" className="mr-2">Filter by Category:</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border rounded-md p-2"
            >
              <option value="all">All</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              {/* Add more categories as needed */}
            </select>
          </div>

          <div className="flex items-center">
            <label htmlFor="sort" className="mr-2">Sort by:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'price' | 'name')}
              className="border rounded-md p-2 mr-2"
            >
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="border rounded-md p-2"
            >
              {sortOrder === 'asc' ? <FaSortAmountDown /> : <FaSortAmountUp />}
            </button>
          </div>

          <div>
            <label htmlFor="search" className="mr-2">Search:</label>
            <input
              type="text"
              id="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border rounded-md p-2"
              placeholder="Search products..."
            />
          </div>
        </div>

        {/* Shop Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Pagination Controls */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-md ${
                currentPage === page
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-purple-100'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;