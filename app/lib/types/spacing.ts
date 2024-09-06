import { Directions, DirectionsXY } from './directions';

export type SpacingSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type SpacingDirectionsMap = Partial<Record<Directions, SpacingSizes>>;

export type SpacingVariant = SpacingSizes | SpacingDirectionsMap;

export type SpacingDirectionsMapXY = Partial<
  Record<DirectionsXY, SpacingSizes>
>;

export type SpacingVariantXY = SpacingSizes | SpacingDirectionsMapXY;
