import { memo, useCallback, useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";

import { classNames } from "shared/lib/helpers";

import { DrinkVolume } from "../model/types/drinkVolume";
import { Volume } from "../model/const/volume";

import CupIcon from 'shared/assets/cup.svg';

import sls from './SelectedVolume.module.css';

interface SelectedVolumeProps {
  className?: string;
}

const items: DrinkVolume[] = [
  {
    volume: Volume.SMALL,
    markup: 0
  },
  {
    volume: Volume.MEDIUM,
    markup: 30
  },
  {
    volume: Volume.LARGE,
    markup: 50
  }
]

export const SelectedVolume = memo((props: SelectedVolumeProps) => {
  const {
    className
  } = props;
  const [selected, setSelected] = useState<DrinkVolume>(items[2]);

  const onChange = useCallback((value: DrinkVolume) => {
    setSelected(value)
  }, [])

  return (
    <RadioGroup
      className={classNames(sls.SelectedVolume, [className])}
      value={selected}
      onChange={onChange}
    >
      {items.map((item) => (
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
  )
})