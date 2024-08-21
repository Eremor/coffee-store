import { memo, useCallback, useState } from "react";

import { classNames } from "shared/lib/helpers";
import { Button, ButtonTheme } from "shared/ui/Button";

import {
  DEFAULT_GRAM,
  MAX_GRAM,
  MIN_GRAM
} from "../../model/const/const";

import PlusIcon from 'shared/assets/plus.svg';
import MinusIcon from 'shared/assets/minus.svg';

import sls from './AdditivesItem.module.css';

interface AdditivesItemProps {
  className?: string;
  title: string;
}

export const AdditivesItem = memo((props: AdditivesItemProps) => {
  const {
    className,
    title
  } = props;
  const [gram, setGram] = useState(MIN_GRAM);

  const increment = useCallback(() => {
    setGram((prev) => prev + DEFAULT_GRAM)
  }, []);

  const decrement = useCallback(() => {
    setGram((prev) => prev - DEFAULT_GRAM)
  }, []);

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
  )
})