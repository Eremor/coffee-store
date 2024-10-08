import { memo, useCallback, useState } from 'react';
import { TabPanel } from '@headlessui/react';

import { Order } from 'widgets/Order';

import { Product, ProductCard } from 'entities/Product';
import { totalActions } from 'entities/Total';
import { additiveActions } from 'entities/Additive';

import { Drawer } from 'shared/ui/Drawer';
import { useAppDispatch } from 'shared/lib/hooks';

import sls from './ProductsInsertedContent.module.css';
import { currentOrderActions } from 'entities/Order';

interface ProductsInsertedContentProps {
  title: string
  products?: Product[]
  isLoading: boolean
}

export const ProductsInsertedContent = memo((props: ProductsInsertedContentProps) => {
  const {
    title,
    products,
    isLoading,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleOpen = useCallback((id: string) => {
    setIsOpen(true);
    setSelectedId(id);
    dispatch(currentOrderActions.setSelectedProductId(id));
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    dispatch(totalActions.clearTotal());
    dispatch(additiveActions.clearAdditives());
    dispatch(currentOrderActions.clearSelectedProductId());
  }, [dispatch]);

  if (!products) {
    return null;
  }

  return (
    <>
      <TabPanel className={sls.container}>
        {isLoading && (
          <p>Loading...</p>
        )}
        <h2 className={sls.title}>
          {title}
        </h2>
        <div className={sls.products}>
          {products.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.src}
              title={product.title}
              price={product.price}
              onClick={handleOpen}
            />
          ))}
        </div>
      </TabPanel>
      <Drawer
        isOpen={isOpen}
        onClose={handleClose}
      >
        <Order id={selectedId} />
      </Drawer>
    </>
  );
});
