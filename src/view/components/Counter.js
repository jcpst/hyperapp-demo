import { h } from 'hyperapp'

export default ({ add, sub }) =>
  <div>
    <button onclick={add}>+</button>
    <button onclick={sub}>-</button>
  </div>
