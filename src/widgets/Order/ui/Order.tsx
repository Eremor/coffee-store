import { memo, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { PayButton } from 'features/payButton';
import { SelectedVolume } from 'features/selectedVolume';
import { Additives } from 'features/addAdditives';

import { getProductsData, Product } from 'entities/Product';
import { getTotalPrice } from 'entities/Total';

import sls from './Order.module.css';

interface OrderProps {
  id: string
}

export const Order = memo((props: OrderProps) => {
  const { id } = props;
  const [currentProduct, setCurrentProduct] = useState<Product>();
  const products = useSelector(getProductsData);
  const totalPrice = useSelector(getTotalPrice);

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
      <Additives
        className={sls.additivesBtn}
      >
        <PayButton
          className={sls.payBtn}
          total={totalPrice}
        />
      </Additives>
      <PayButton
        className={sls.payBtn}
        total={totalPrice}
      />
    </div>
  );
});
