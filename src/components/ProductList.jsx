import React from 'react';
import Product from './Product';
import styles from './ProductList.module.css';

const ProductList = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.length === 0 ? (
        <div className={styles.notFound}>По вашему запросу ничего не найдено</div>
      ) : (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;