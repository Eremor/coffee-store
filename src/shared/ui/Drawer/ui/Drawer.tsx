import { Fragment, memo, ReactNode } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';

import { classNames } from 'shared/lib/helpers';
import { Button, ButtonTheme } from 'shared/ui/Button';

import CloseIcon from 'shared/assets/plus.svg';

import sls from './Drawer.module.css';

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props;

  return (
    <Transition
      show={isOpen}
      as={Fragment}
    >
      <Dialog
        unmount={true}
        onClose={onClose}
        className={sls.Drawer}
      >
        <div className={sls.container}>
          <TransitionChild>
            <DialogBackdrop
              className={sls.overlay}
              onClick={onClose}
            />
          </TransitionChild>
          <TransitionChild>
            <DialogPanel
              className={classNames(sls.content, [className])}
            >
              <Button
                theme={ButtonTheme.CLOSED}
                onClick={onClose}
                className={sls.button}
              >
                <CloseIcon />
              </Button>
              {children}
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
});
