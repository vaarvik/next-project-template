import { SPACING_DIRECTIONS_XY } from '@/constants';
import { SpacingVariantXY } from '@/types/spacing';
import { ElementType, HTMLAttributes } from 'react';
import styles from './FlexContainer.module.scss';

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  as?: ElementType;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  fillHeight?: boolean;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  gap?: SpacingVariantXY;
}

export default function FlexContainer({
  as: HTMLTag = 'div',
  direction = 'row',
  fillHeight = false,
  justify,
  align,
  wrap = 'wrap',
  gap,
  children,
  ...otherProps
}: Props): JSX.Element {
  const classNames = [
    styles['flex-container'],
    styles[`flex-container--direction-${direction}`],
    styles[`flex-container--wrap-${wrap}`],
  ];

  if (align) classNames.push(styles[`flex-container--align-${align}`]);
  if (justify) classNames.push(styles[`flex-container--justify-${justify}`]);
  if (fillHeight) classNames.push(styles[`flex-container--fill-height`]);

  if (typeof gap === 'string') {
    classNames.push(styles[`flex-container--gap-${gap}`]);
  } else if (gap) {
    SPACING_DIRECTIONS_XY.forEach(direction => {
      const spacingSize = gap[direction];
      if (spacingSize) {
        classNames.push(
          styles[`flex-container--gap-${direction}-${spacingSize}`],
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
