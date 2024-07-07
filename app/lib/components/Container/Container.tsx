import { ElementType, HTMLAttributes } from 'react';
import styles from './Container.module.scss';

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  as?: ElementType;
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export default function Container({
  as: HTMLTag = 'div',
  width = 'md',
  children,
  ...otherProps
}: Props): JSX.Element {
  const classNames = [
    styles['container'],
    width ? styles[`container--${width}`] : '',
  ].join(' ');

  return (
    <HTMLTag className={classNames} {...otherProps}>
      {children}
    </HTMLTag>
  );
}
