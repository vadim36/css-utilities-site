import helpers from "./list"
import Helper from "./Helper"

helpers.forEach((helper: Helper):void => {
  return helper.renderHelper()
})