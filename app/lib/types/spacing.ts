export type SpacingSizes = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type SpacingDirections = 'x' | 'y' | 'top' | 'right' | 'bottom' | 'left';

export type SpacingDirectionsMap = Partial<
  Record<SpacingDirections, SpacingSizes>
>;

export type SpacingVariant = SpacingSizes | SpacingDirectionsMap;
