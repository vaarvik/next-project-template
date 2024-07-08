import { SpacingSizes } from '@/types/spacing';
import { ElementType, HTMLAttributes } from 'react';
import styles from './ContentMargined.module.scss';

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  as?: ElementType;
  margin?: SpacingSizes | { x?: SpacingSizes; y?: SpacingSizes };
}

export default function ContentMargined({
  as: HTMLTag = 'div',
  margin = 'md',
  children,
  ...otherProps
}: Props): JSX.Element {
  const classNames = [styles['content-margined']];

  if (typeof margin === 'string') {
    classNames.push(styles[`content-margined--${margin}`]);
  } else {
    if (margin?.x) classNames.push(styles[`content-margined--x-${margin.x}`]);
    if (margin?.y) classNames.push(styles[`content-margined--y-${margin.y}`]);
  }

  return (
    <HTMLTag className={classNames.join(' ')} {...otherProps}>
      {children}
    </HTMLTag>
  );
}
