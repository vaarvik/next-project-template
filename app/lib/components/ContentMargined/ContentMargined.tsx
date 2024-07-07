import { ElementType, HTMLAttributes } from 'react';
import styles from './ContentMargined.module.scss';

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  as?: ElementType;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  ignoreX?: boolean;
  ignoreY?: boolean;
}

export default function ContentMargined({
  as: HTMLTag = 'div',
  size = 'md',
  ignoreX = false,
  ignoreY = false,
  children,
  ...otherProps
}: Props): JSX.Element {
  const classNames = [
    styles['content-margined'],
    size ? styles[`content-margined--${size}`] : '',
    ignoreX ? styles['content-margined--ignore-x'] : '',
    ignoreY ? styles['content-margined--ignore-y'] : '',
  ].join(' ');

  return (
    <HTMLTag className={classNames} {...otherProps}>
      {children}
    </HTMLTag>
  );
}
