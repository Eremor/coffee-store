import { memo, useCallback, useState } from 'react';
import { TabPanel } from '@headlessui/react';

import { Order } from 'widgets/Order';

import { Product, ProductCard } from 'entities/Product';

import { Drawer } from 'shared/ui/Drawer';

import sls from './ProductsInsertedContent.module.css';

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

  const handleOpen = useCallback((id: string) => {
    setIsOpen(true);
    setSelectedId(id);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

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
