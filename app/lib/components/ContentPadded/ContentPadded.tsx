import { SPACING_DIRECTIONS } from '@/constants';
import { SpacingVariant } from '@/types/spacing';
import { ElementType, HTMLAttributes, ReactNode } from 'react';
import styles from './ContentPadded.module.scss';

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  as?: ElementType;
  padding?: SpacingVariant;
}

export default function ContentPadded({
  as: HTMLTag = 'div',
  padding = 'md',
  children,
  ...otherProps
}: Props): ReactNode {
  const classNames = [];
  if (typeof padding === 'string') {
    classNames.push(styles[`content-padded--${padding}`]);
  } else {
    SPACING_DIRECTIONS.forEach(direction => {
      const spacingSize = padding[direction];
      if (spacingSize) {
        classNames.push(styles[`content-padded--${direction}-${spacingSize}`]);
      }
    });
  }

  return (
    <HTMLTag className={classNames.join(' ')} {...otherProps}>
      {children}
    </HTMLTag>
  );
}
