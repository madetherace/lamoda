import React from 'react';
import styles from './Product.module.css';

const Product = ({ product }) => {
  return (
    <div className={styles.product}>
      <img src={product.imageUrl} alt={product.name} className={styles.image} />
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.details}>Цвет: {product.color}</p>
      <p className={styles.price}>Цена: {product.price} руб.</p>
      <p className={styles.rating}>Рейтинг: {product.rating}</p>
    </div>
  );
};

export default Product;