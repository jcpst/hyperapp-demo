import { h } from 'hyperapp'

export default ({ data, search }) =>
  <div>
    <input type="text" placeholder="Type to search..." onkeyup={search} />
    <table class="table">
      <caption>Countries</caption>
      <thead>
        <tr>
          <th>name</th>
          <th>currency</th>
        </tr>
      </thead>
      <tbody>
        {(data || []).map(d =>
          <tr>
            <td>
              {d.name}
            </td>
            <td>
              {d.currencies.map(c => c.code).join(', ')}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
