import { SPACING_DIRECTIONS_XY } from '@/constants';
import { SpacingVariantXY } from '@/types/spacing';
import { ElementType, HTMLAttributes } from 'react';
import styles from './GridContainer.module.scss';

type GridCellOptions = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface Props extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  as?: ElementType;
  columns: GridCellOptions;
  gap?: SpacingVariantXY;
  rows: GridCellOptions;
}

export default function GridContainer({
  as: HTMLTag = 'div',
  children,
  columns,
  gap,
  rows,
  ...otherProps
}: Props): JSX.Element {
  const classNames = [
    styles['grid-container'],
    styles[`grid-container--columns-${columns}`],
    styles[`grid-container--rows-${rows}`],
  ];

  if (typeof gap === 'string') {
    classNames.push(styles[`grid-container--gap-${gap}`]);
  } else if (gap) {
    SPACING_DIRECTIONS_XY.forEach(direction => {
      const spacingSize = gap[direction];
      if (spacingSize) {
        classNames.push(
          styles[`grid-container--gap-${direction}-${spacingSize}`],
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
