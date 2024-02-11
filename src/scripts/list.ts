import Helper from "./Helper"
import {ClassTitles, helperBodies, options, HelperElements} from './utils'

const backgroundColorHelper:Helper = new Helper({
  title: ClassTitles.bg,
  body: helperBodies.bg,
  options: options.states,
  exampleElement: HelperElements.div
})

const backgroundGradientHelper:Helper = new Helper({
  title: ClassTitles.bg,
  extraTitle: ClassTitles.bgGradient,
  body: helperBodies.bgGradient,
  options: options.states,
  exampleElement: HelperElements.div
})

const backgroundOpacityHelper:Helper = new Helper({
  title: ClassTitles.bgOpacity,
  extraTitle: ClassTitles.bg,
  extraStyle: 'bg-info',
  body: helperBodies.bgOpacity,
  options: options.abstractPoints1,
  exampleElement: HelperElements.div
})

const borderHelper:Helper = new Helper({
  title: ClassTitles.bordered,
  body: helperBodies.bordered,
  options: [''],
  exampleElement: HelperElements.div
})

const coloredBorderHelper:Helper = new Helper({
  title: ClassTitles.border,
  body: helperBodies.colorBorder,
  options: options.states,
  exampleElement: HelperElements.div
})

const opacityBorderHelper:Helper = new Helper({
  title: ClassTitles.border,
  body: helperBodies.opacityBorder,
  options: options.abstractPoints1,
  exampleElement: HelperElements.div
})


const helpers: Helper[] = [
  backgroundColorHelper,
  backgroundGradientHelper,
  backgroundOpacityHelper,
  borderHelper,
  coloredBorderHelper,
  opacityBorderHelper
]

export default helpers