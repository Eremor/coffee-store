import { memo, useCallback } from 'react';

import { totalActions } from 'entities/Total';

import { classNames } from 'shared/lib/helpers';
import { useAppDispatch } from 'shared/lib/hooks';

import sls from './ProductCard.module.css';

interface ProductCardProps {
  id: string
  image: string
  title: string
  price: number
  className?: string
  onClick: (id: string) => void
}

export const ProductCard = memo((props: ProductCardProps) => {
  const {
    id,
    image,
    title,
    price,
    className,
    onClick,
  } = props;
  const dispatch = useAppDispatch();

  const handleClick = useCallback(() => {
    onClick(id);
    dispatch(totalActions.setBasePrice(price));
  }, [id, onClick, price, dispatch]);

  return (
    <div
      className={classNames(sls.Card, [className])}
      onClick={handleClick}
    >
      <div className={sls.image}>
        <img
          src={image}
          alt={`Image ${title}`}
        />
      </div>
      <h4 className={sls.title}>
        {title}
      </h4>
      <p className={sls.price}>
        от
        <strong>
          {price}
          {' '}
          &#8381;
        </strong>
      </p>
    </div>
  );
});
