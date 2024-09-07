'use client';

import { MouseEvent, ReactNode, useEffect } from 'react';
import styles from './Modal.module.scss';
import CrossIcon from '../(icons)/CrossIcon/CrossIcon';
import IconButton from '../IconButton/IconButton';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  children,
}: Props): ReactNode | null {
  useEffect(() => {
    const handleKeyDown = (event: globalThis.KeyboardEvent): void => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return (): void => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const stopPropagation = (e: MouseEvent<HTMLElement>): void => {
    e.stopPropagation();
  };

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles['modal__button']}>
        <IconButton icon={<CrossIcon />} rounded color="foreground" />
      </div>
      <div className={styles['modal__content']} onClick={stopPropagation}>
        {children}
      </div>
    </div>
  );
}
