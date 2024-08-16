import { memo, useCallback, useState } from 'react';
import { TabGroup, TabList, TabPanels } from '@headlessui/react';

import { Tab } from 'shared/ui/Tab';
import { useTheme } from 'shared/lib/hooks';
import { Theme } from 'shared/const/theme';

import { productsTabs } from '../../const/productsTabs';
import {
  ProductsInsertedContent,
} from '../ProductsInsertedContent/ProductsInsertedContent';

import sls from './ProductsInserted.module.css';

export const ProductsInserted = memo(() => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { setTheme } = useTheme();

  const onThemeChange = useCallback((index: number) => {
    setActiveIndex(index);
    if (setTheme) {
      switch (index) {
        case 0:
          setTheme(Theme.COFFEE);
          break;
        case 1:
          setTheme(Theme.TEA);
          break;
        case 2:
          setTheme(Theme.COCKTAIL);
          break;
        case 3:
          setTheme(Theme.SODA);
          break;
        default:
          setTheme(Theme.COFFEE);
          break;
      }
    }
  }, [setTheme]);

  return (
    <TabGroup
      className={sls.ProductsInserted}
      onChange={onThemeChange}
    >
      <TabList className={sls.Tabs}>
        {productsTabs.map(productsTab => (
          <Tab
            key={productsTab.title}
            title={productsTab.title}
            src={productsTab.imageSrc}
            alt={productsTab.imageAlt}
          />
        ))}
      </TabList>
      <TabPanels className={sls.content}>
        <div
          className={sls.flag}
          style={{
            left: `${12.5 * (1 + activeIndex * 2)}%`,
          }}
        />
        {productsTabs.map(product => (
          <ProductsInsertedContent
            key={product.title}
            title={product.title}
          />
        ))}
      </TabPanels>
    </TabGroup>
  );
});
