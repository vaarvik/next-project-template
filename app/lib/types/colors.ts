export type BrandColors = 'foreground' | 'background' | 'primary' | 'secondary';
export type NeutralColors =
  | 'lightest'
  | 'lighter'
  | 'medium'
  | 'darker'
  | 'darkest';
export type StatusColors = 'error' | 'warning' | 'success' | 'info';

export type AllColors = BrandColors | StatusColors | NeutralColors;
