import { SPACING_DIRECTIONS } from '@/constants';
import { SpacingVariant } from '@/types/spacing';
import { ElementType, HTMLAttributes } from 'react';
import styles from './ContentMargined.module.scss';

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  as?: ElementType;
  margin?: SpacingVariant;
}
const classNames = [styles['content-margined']];

export default function ContentMargined({
  as: HTMLTag = 'div',
  margin = 'md',
  children,
  ...otherProps
}: Props): JSX.Element {
  if (typeof margin === 'string') {
    classNames.push(styles[`content-margined--${margin}`]);
  } else {
    SPACING_DIRECTIONS.forEach(direction => {
      const spacingSize = margin[direction];
      if (spacingSize) {
        classNames.push(
          styles[`content-margined--${direction}-${spacingSize}`],
        );
      }
    });
  }

  return (
    <HTMLTag className={classNames.join(' ')} {...otherProps}>
      {children}
    </HTMLTag>
  );
}
