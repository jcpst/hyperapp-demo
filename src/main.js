import { app } from "hyperapp"
import view from './view'
import actions from './actions'
import state from './state'

app({
  state,
  view,
  actions
})
