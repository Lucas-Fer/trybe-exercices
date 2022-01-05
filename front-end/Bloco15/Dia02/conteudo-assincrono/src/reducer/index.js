const INITIAL_STATE = []

const reducerAe = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.value];
    default:
      return state;
  }
}

export default reducerAe;