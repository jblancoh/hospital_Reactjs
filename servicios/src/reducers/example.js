const initialState = {
  isLoading: false,
  data: null,
  error: null
}

const example = (state = initialState, action) => {
  switch (action.type) {
    case 'EXAMPLE_LOADING':
      return {}
    case 'EXAMPLE_DATA_SUCCES':
      return {}
    case 'EXAMPLE_FAIL':
      return {}
    default:
      return state
  }
}

export default example
