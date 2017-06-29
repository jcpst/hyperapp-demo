export default () => ({
  events: {
    action: (state, actions) => console.log('data:', state.data)
  }
})
