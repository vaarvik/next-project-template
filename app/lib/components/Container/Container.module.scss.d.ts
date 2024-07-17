export type Styles = {
  container: string;
  'container--full': string;
  'container--lg': string;
  'container--md': string;
  'container--sm': string;
  'container--xl': string;
  'container--xs': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
