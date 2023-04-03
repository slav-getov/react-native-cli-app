export const experimentalReducer = (state, action) => {
  if (action.type === 'fill_die') {
    const newState = state.map((singleItem, index) => {
      return {value: action.values[index], id: singleItem.id};
    });
    return newState;
  }
};
