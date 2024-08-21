import { memo, ReactNode, useCallback, useState } from "react";

import { classNames } from "shared/lib/helpers";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Drawer } from "shared/ui/Drawer";

import { AdditivesItem } from "../AdditivesItem/AdditivesItem";
import { additiveTitles } from "../../model/const/const";

import sls from './Additives.module.css';

interface AdditivesProps {
  className?: string;
  children?: ReactNode;
}

export const Additives = memo((props: AdditivesProps) => {
  const {
    className,
    children
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <Button
        className={classNames(sls.AdditivesButton, [className])}
        theme={ButtonTheme.OUTLINED}
        onClick={handleOpen}
      >
        Хотите добавить сироп?
      </Button>
      <Drawer
        className={sls.drawer}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <div className={sls.wrapper}>
          <ul className={sls.list}>
            {additiveTitles.map((title) => (
              <AdditivesItem
                title={title}
              />
            ))}
          </ul>
          {children}
        </div>
      </Drawer>
    </>
  )
})