import { h } from 'hyperapp'
import Header from './components/Header'
import Body from './components/Body'
// import Counter from './components/Counter'
import DataTable from './components/DataTable'

export default (state, actions) =>
  <div>
    <Header />
    <Body>
      <DataTable search={actions.search} data={state.data} />
    </Body>
  </div>
