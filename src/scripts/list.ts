const backgroundColorHelper:Helper = {
  shortcut: 'bg',
  body: 'Helper for background',
  options: [
    'primary','secondary','success','danger',
    'warning','info','light','dark'
  ],
  exampleElement: 'div'
}

const backgroundGradientsHelper: Helper = {
  shortcut: 'bg-gradient',
  extraShortcut: 'bg',
  body: 'Helper for background gradient',
  options: [
    'primary','secondary','success','danger',
    'warning','info','light','dark'
  ],
  exampleElement: 'div'
}

const backgroundOpacityHelper: Helper = {
  shortcut: 'bg-opacity',
  extraShortcut: 'bg',
  body: 'Helper for background opacity',
  options: [
    '0','25','50','75', '100'
  ],
  exampleElement: 'div'
}

const helpers: Helper[] = [
  backgroundColorHelper,
  backgroundGradientsHelper,
  backgroundOpacityHelper
]

export default helpers