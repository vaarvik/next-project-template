import { ElementType, HTMLAttributes } from 'react';
import styles from './Container.module.scss';

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  as?: ElementType;
  viewportHeight?: boolean;
  width?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export default function Container({
  as: HTMLTag = 'div',
  width = 'md',
  children,
  ...otherProps
}: Props): JSX.Element {
  const classNames = [styles['container']];

  if (width) classNames.push(styles[`container--${width}`]);

  return (
    <HTMLTag className={classNames.join(' ')} {...otherProps}>
      {children}
    </HTMLTag>
  );
}
