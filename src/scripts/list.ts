import Helper from "./Helper"
import {ClassTitles, helperBodies, options, HelperElements} from './utils'

const backgroundColorHelper:Helper = new Helper({
  title: ClassTitles.bg,
  body: helperBodies.bg,
  options: options.states,
  exampleElement: HelperElements.div
})

const backgroundGradientHelper:Helper = new Helper({
  title: ClassTitles.bgGradient,
  extraClass: ClassTitles.bg,
  body: helperBodies.bgGradient,
  options: options.states,
  exampleElement: HelperElements.div
})

const backgroundOpacityHelper:Helper = new Helper({
  title: ClassTitles.bgOpacity,
  extraClass: ClassTitles.bgOpacity,
  body: helperBodies.bgOpacity,
  options: options.abstractPoints1,
  exampleElement: HelperElements.div
})


const helpers: Helper[] = [
  backgroundColorHelper,
  backgroundGradientHelper,
  backgroundOpacityHelper
]

export default helpers