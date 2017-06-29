import { h } from 'hyperapp'
import DataTable from './components/DataTable'

export default (state, actions) =>
  <main class="container">
    <DataTable search={actions.search} data={state.data} />
  </main>
