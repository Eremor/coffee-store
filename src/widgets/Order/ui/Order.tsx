import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { PayButton } from 'features/payButton';
import { SelectedVolume } from 'features/selectedVolume';

import { getProductsData, Product } from 'entities/Product';

import sls from './Order.module.css';

interface OrderProps {
  id: string
}

export const Order = memo((props: OrderProps) => {
  const { id } = props;
  const [currentProduct, setCurrentProduct] = useState<Product>();
  const products = useSelector(getProductsData);

  useEffect(() => {
    if (products) {
      const product = products.find(prod => prod.id === id);
      setCurrentProduct(product);
    }
  }, [products, id]);

  if (!currentProduct) {
    return null;
  }

  return (
    <div className={sls.Order}>
      <div className={sls.image}>
        <img
          src={currentProduct.src}
          alt={`Image ${currentProduct.title}`}
        />
      </div>
      <p className={sls.title}>
        {currentProduct.title}
      </p>
      <SelectedVolume
        className={sls.volumes}
      />
      <PayButton
        className={sls.payBtn}
        total={currentProduct.price}
      />
    </div>
  );
});
