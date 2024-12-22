import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ filters, onFilterChange }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (parseFloat(value) < 0) return; 
    onFilterChange({ [name]: value });
};

    const handleColorChange = (event) => {
        const color = event.target.value;
        const updatedColors = filters.selectedColors.includes(color)
            ? filters.selectedColors.filter((c) => c !== color)
            : [...filters.selectedColors, color];
        onFilterChange({ selectedColors: updatedColors });
    };


    const handleSortChange = (sortBy) => {
        onFilterChange({ sortBy });
    };

 

    return (
        <div className={styles.filterContainer}>
            <input
                type="text"
                name="searchTerm"
                placeholder="Поиск"
                className={styles.searchInput}
                value={filters.searchTerm}
                onChange={handleInputChange}
            />

            <div className={styles.colorFilter}>
                <h3>По цвету</h3>
                {['Красный', 'Синий', 'Зеленый', 'Черный', 'Белый'].map((color) => (
                    <label key={color} className={styles.colorLabel}>
                        <input
                            type="checkbox"
                            value={color}
                            checked={filters.selectedColors.includes(color)}
                            onChange={handleColorChange}
                        />
                        {color}
                    </label>
                ))}
            </div>

            <div className={styles.priceFilter}>
                <h3>По цене</h3>
                <div>
                    <label className={styles.priceLabel1} htmlFor="minPrice">от</label>
                    <input
                        type="number"
                        id="minPrice"
                        name="minPrice"
                        className={styles.priceInput}
                        value={filters.minPrice}
                        onChange={handleInputChange}
                        min="0"
                        max="10000"
                    />
                </div>
                <div>
                    <label className={styles.priceLabel2} htmlFor="maxPrice">до</label>
                    <input
                        type="number"
                        id="maxPrice"
                        name="maxPrice"
                        className={styles.priceInput}
                        value={filters.maxPrice}
                        onChange={handleInputChange}
                        min="1"
                        max="10000"
                    />
                </div>
            </div>

            <div className={styles.sortOptions}>
                <button
                    onClick={() => handleSortChange('default')}
                    className={filters.sortBy === 'default' ? styles.activeSort : ''}
                >
                    Сначала популярные
                </button>
                <button
                    onClick={() => handleSortChange('priceAsc')}
                    className={filters.sortBy === 'priceAsc' ? styles.activeSort : ''}
                >
                    Сначала дешевые
                </button>
                <button
                    onClick={() => handleSortChange('priceDesc')}
                    className={filters.sortBy === 'priceDesc' ? styles.activeSort : ''}
                >
                    Сначала дорогие
                </button>
            </div>
            
        </div>
    );
};

export default Filter;