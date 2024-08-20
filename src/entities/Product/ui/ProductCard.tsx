import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/helpers';

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

  const handleClick = useCallback(() => {
    onClick(id);
  }, [id, onClick]);

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
