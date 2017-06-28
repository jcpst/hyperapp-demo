import { app } from 'hyperapp'
import actions from './actions'
import events from './events'
import mixins from './mixins'
import state from './state'
import view from './view'

app({
  actions,
  events,
  mixins,
  state,
  view
})
