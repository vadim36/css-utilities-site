export enum ClassTitles {
  bg = 'bg',
  bgGradient = 'bg-gradient',
  bgOpacity = 'bg-opacity',
  bordered = 'bordered',
  border = 'border'
}

export const helperBodies: HelperBodies = {
  bg: 'Helper for background',
  bgGradient: 'Helper for background gradient',
  bgOpacity: 'Helper for background opacity',
  bordered: 'Helper for primary border',
  colorBorder: 'Helper for colors of border',
  opacityBorder: 'Helper for different opacity of borders'
}

export const options: ClassOptions = {
  states: [
    'primary','secondary','success','danger',
    'warning','info','light','dark'
  ],
  abstractPoints1: [
    '0', '25', '50', '75', '1'
  ]
}

export enum HelperElements {
  div = 'div'
}