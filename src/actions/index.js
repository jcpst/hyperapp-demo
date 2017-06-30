export default {
  search: (state, actions, { target }) => {
    fetch(`https://restcountries.eu/rest/v2/name/${target.value}`)
      .then(data => data.json())
      .then(data => {
        actions.setData({ data })
      })
  },
  setData: (state, actions, data) => data
}
