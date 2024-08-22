import { memo, useCallback, useEffect, useState } from 'react';

import { classNames } from 'shared/lib/helpers';
import { Button, ButtonTheme } from 'shared/ui/Button';

import {
  DEFAULT_GRAM,
  MAX_GRAM,
  MIN_GRAM,
} from '../../model/const/const';

import PlusIcon from 'shared/assets/plus.svg';
import MinusIcon from 'shared/assets/minus.svg';

import sls from './AdditivesItem.module.css';
import { useAppDispatch } from 'shared/lib/hooks';
import { additiveActions } from 'entities/Additive';

interface AdditivesItemProps {
  className?: string
  title: string
  weight: number
}

export const AdditivesItem = memo((props: AdditivesItemProps) => {
  const {
    className,
    title,
    weight,
  } = props;
  const [gram, setGram] = useState<number>(weight);
  const dispatch = useAppDispatch();

  const increment = useCallback(() => {
    setGram(prev => prev + DEFAULT_GRAM);
  }, []);

  const decrement = useCallback(() => {
    setGram(prev => prev - DEFAULT_GRAM);
  }, []);

  useEffect(() => {
    dispatch(additiveActions.setAdditiveWeight({
      title,
      weight: gram,
    }));
  }, [gram, title, dispatch]);

  return (
    <li className={classNames(sls.AdditivesItem, [className])}>
      <p className={sls.title}>
        {title}
      </p>
      <div className={sls.controls}>
        <Button
          className={sls.minusBtn}
          onClick={decrement}
          theme={gram === MIN_GRAM ? ButtonTheme.DISABLES : ButtonTheme.CONTAINED}
        >
          <MinusIcon />
        </Button>
        <p className={sls.count}>
          {`${gram} гр.`}
        </p>
        <Button
          className={sls.plusBtn}
          onClick={increment}
          theme={gram === MAX_GRAM ? ButtonTheme.DISABLES : ButtonTheme.CONTAINED}
        >
          <PlusIcon />
        </Button>
      </div>
    </li>
  );
});
