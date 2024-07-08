import { SpacingSizes } from '@/types/spacing';
import { ElementType, HTMLAttributes } from 'react';
import styles from './ContentPadded.module.scss';

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  as?: ElementType;
  padding?: SpacingSizes | { x?: SpacingSizes; y?: SpacingSizes };
}

export default function ContentPadded({
  as: HTMLTag = 'div',
  padding = 'md',
  children,
  ...otherProps
}: Props): JSX.Element {
  const classNames = [styles['content-padded']];

  if (typeof padding === 'string') {
    classNames.push(styles[`content-padded--${padding}`]);
  } else {
    if (padding?.x) classNames.push(styles[`content-padded--x-${padding.x}`]);
    if (padding?.y) classNames.push(styles[`content-padded--y-${padding.y}`]);
  }

  return (
    <HTMLTag className={classNames.join(' ')} {...otherProps}>
      {children}
    </HTMLTag>
  );
}
