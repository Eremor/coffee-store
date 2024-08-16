import { memo } from 'react';
import { TabPanel } from '@headlessui/react';

import sls from './ProductsInsertedContent.module.css';

interface ProductsInsertedContentProps {
  title: string
}

export const ProductsInsertedContent = memo((props: ProductsInsertedContentProps) => {
  const { title } = props;
  return (
    <TabPanel className={sls.container}>
      <h2 className={sls.title}>
        {title}
      </h2>
    </TabPanel>
  );
});
