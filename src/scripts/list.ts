import Helper from "./Helper"
import {Classes, helperBodies, options, HelperElements, helperTitles} from './utils'

const backgroundColorHelper:Helper = new Helper({
  head: Classes.background,
  title: helperTitles.bg,
  body: helperBodies.bg,
  options: options.states,
  exampleElement: HelperElements.div
})

const backgroundGradientHelper:Helper = new Helper({
  head: Classes.background,
  title: helperTitles.bgGradient,
  extraClass: Classes.bgGradient,
  body: helperBodies.bgGradient,
  options: options.states,
  exampleElement: HelperElements.div
})

const backgroundOpacityHelper:Helper = new Helper({
  head: Classes.bgOpacity,
  extraClass: Classes.background,
  title: helperTitles.bgOpacity,
  extraStyle: 'bg-info',
  body: helperBodies.bgOpacity,
  options: options.abstractPointsFractal,
  exampleElement: HelperElements.div
})

const borderHelper:Helper = new Helper({
  head: Classes.bordered,
  title: helperTitles.bordered,
  body: helperBodies.bordered,
  options: [''],
  exampleElement: HelperElements.div
})

const coloredBorderHelper:Helper = new Helper({
  head: Classes.border,
  title: helperTitles.colorBorder,
  body: helperBodies.colorBorder,
  options: options.states,
  exampleElement: HelperElements.div
})

const opacityBorderHelper:Helper = new Helper({
  head: Classes.border,
  title: helperBodies.opacityBorder,
  body: helperBodies.opacityBorder,
  extraStyle: 'border-dark',
  options: options.abstractPointsFractal,
  exampleElement: HelperElements.div
})

const sizeBorderHelper: Helper = new Helper({
  head: Classes.border,
  title: helperTitles.sizeBorder,
  body: helperBodies.sizeBorder,
  options: options.abstractPointsInteger,
  exampleElement: HelperElements.div
})

const borderRadiusHelper: Helper = new Helper({
  head: Classes.borderRadius,
  title: helperTitles.borderRadius,
  body: helperBodies.borderRadius,
  extraStyle: 'border-5',
  options: options.abstractPointsFractal,
  exampleElement: HelperElements.div
})


const helpers: Helper[] = [
  backgroundColorHelper,
  backgroundGradientHelper,
  backgroundOpacityHelper,
  borderHelper,
  coloredBorderHelper,
  opacityBorderHelper,
  sizeBorderHelper,
  borderRadiusHelper
]

export default helpers