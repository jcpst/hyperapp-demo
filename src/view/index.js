import { h } from 'hyperapp'
import Header from './components/Header'
import Body from './components/Body'
import Counter from './components/Counter'

export default (state, { add, sub }) =>
  <div>
    <Header />
    <Body>
      <h1>
        {state}
      </h1>
      <Counter add={add} sub={sub} />
    </Body>
  </div>
