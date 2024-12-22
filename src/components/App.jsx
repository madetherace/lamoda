import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import Filter from './Filter';
import { generateProducts } from '../utils/generateProducts';
import styles from './App.module.css';

function App() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    searchTerm: '',
    selectedColors: [],
    minPrice: '',
    maxPrice: '',
    minRating: 0,
    sortBy: 'default',
  });
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setProducts(generateProducts(50));
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const searchTerm = filters.searchTerm.toLowerCase();
      if (
        filters.searchTerm &&
        !(
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
        )
      ) {
        return false;
      }

      if (filters.selectedColors.length > 0 && !filters.selectedColors.includes(product.color)) {
        return false;
      }

      const price = parseFloat(product.price);
      const minPrice = parseFloat(filters.minPrice) || 0;
      const maxPrice = parseFloat(filters.maxPrice) || Infinity;
      if (price < minPrice || price > maxPrice) {
        return false;
      }

      if (product.rating < filters.minRating) {
        return false;
      }

      return true;
    });

    const sorted = [...filtered];
    if (filters.sortBy === 'default') {
      sorted.sort((a, b) => b.rating - a.rating);
    } else if (filters.sortBy === 'priceAsc') {
      sorted.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'priceDesc') {
      sorted.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sorted);
  }, [products, filters]);

  const handleFilterChange = (updatedFilters) => {
    setFilters({ ...filters, ...updatedFilters });
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.filterContainer}>
          <Filter filters={filters} onFilterChange={handleFilterChange} />
        </div>
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}

export default App;