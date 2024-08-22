import { memo, useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Radio, RadioGroup } from '@headlessui/react';

import { getBasePrice, totalActions } from 'entities/Total';

import { classNames } from 'shared/lib/helpers';
import { useAppDispatch } from 'shared/lib/hooks';

import { DrinkVolume } from '../model/types/drinkVolume';
import { Volume } from '../model/const/volume';

import CupIcon from 'shared/assets/cup.svg';

import sls from './SelectedVolume.module.css';

interface SelectedVolumeProps {
  className?: string
}

const items: DrinkVolume[] = [
  {
    volume: Volume.SMALL,
    markup: 0,
  },
  {
    volume: Volume.MEDIUM,
    markup: 30,
  },
  {
    volume: Volume.LARGE,
    markup: 50,
  },
];

export const SelectedVolume = memo((props: SelectedVolumeProps) => {
  const {
    className,
  } = props;
  const [selected, setSelected] = useState<DrinkVolume>(items[2]);
  const dispatch = useAppDispatch();
  const basePrice = useSelector(getBasePrice);

  const onChange = useCallback((value: DrinkVolume) => {
    setSelected(value);
    dispatch(totalActions.setTotalPrice(basePrice + value.markup));
    dispatch(totalActions.setMarkupVolume(value.markup));
  }, [basePrice, dispatch]);

  useEffect(() => {
    dispatch(totalActions.setTotalPrice(basePrice + selected.markup));
    dispatch(totalActions.setMarkupVolume(selected.markup));
  }, []);

  return (
    <RadioGroup
      className={classNames(sls.SelectedVolume, [className])}
      value={selected}
      onChange={onChange}
    >
      {items.map(item => (
        <Radio
          key={item.volume}
          value={item}
          className={sls.item}
          as="div"
        >
          <div className={sls.icon}>
            <CupIcon />
          </div>
          <p className={sls.text}>
            {`${item.volume} мл.`}
          </p>
        </Radio>
      ))}
    </RadioGroup>
  );
});
