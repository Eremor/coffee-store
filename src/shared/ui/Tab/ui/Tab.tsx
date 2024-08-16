import { memo } from 'react';
import { Tab as HTab, TabProps as HTabProps } from '@headlessui/react';

import sls from './Tab.module.css';

interface TabProps extends HTabProps {
  title: string
  src: string
  alt: string
}

export const Tab = memo((props: TabProps) => {
  const {
    title,
    src,
    alt,
    ...otherProps
  } = props;
  return (
    <HTab
      className={sls.Tab}
      {...otherProps}
    >
      <span className={sls.icon}>
        <img
          className={sls.image}
          src={src}
          alt={alt}
        />
      </span>
      <span className={sls.title}>
        {title}
      </span>
    </HTab>
  );
});
