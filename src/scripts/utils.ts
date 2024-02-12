export enum ClassTitles {
  bg = 'bg',
  bgGradient = 'bg-gradient',
  bgOpacity = 'bg-opacity',
  bordered = 'bordered',
  border = 'border',
  borderRadius = 'br'
}

export const helperBodies: HelperBodies = {
  bg: 'Helper for background',
  bgGradient: 'Helper for background gradient',
  bgOpacity: 'Helper for background opacity',
  bordered: 'Helper for primary border',
  colorBorder: 'Helper for colors of border',
  opacityBorder: 'Helper for different opacity of borders',
  sizeBorder: 'Helper for different widths of borders',
  borderRadius: 'Helper for border radius',
}

export const options: ClassOptions = {
  states: [
    'primary','secondary','success','danger',
    'warning','info','light','dark'
  ],
  abstractPointsFractal: [
    '0', '25', '50', '75', '1'
  ],
  abstractPointsInteger: [
    '1', '2', '3', '4', '5'
  ]
}

export enum HelperElements {
  div = 'div'
}