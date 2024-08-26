import { ProductsTabs } from '../types/ProductsTabs';

export const productsTabs: ProductsTabs[] = [
  {
    title: 'Кофе',
    imageSrc: import.meta.env.DEV ? '/public/coffee-img.png' : './coffee-img.png',
    imageAlt: 'Вкладка для кофе',
  },
  {
    title: 'Чай',
    imageSrc: import.meta.env.DEV ? '/public/tea-img.png' : './tea-img.png',
    imageAlt: 'Вкладка для чая',
  },
  {
    title: 'Молочный коктейль',
    imageSrc: import.meta.env.DEV ? '/public/cocktail-img.png' : './cocktail-img.png',
    imageAlt: 'Вкладка для молочного коктейля',
  },
  {
    title: 'Морс и газ. напитки',
    imageSrc: import.meta.env.DEV ? '/public/soda-img.png' : './soda-img.png',
    imageAlt: 'Вкладка для Морс и газ. напитки',
  },
];
