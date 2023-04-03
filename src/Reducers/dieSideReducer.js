export const dieSideReducer = (state, action) => {
  if (action.type == 'roll_die') {
    return {
      ...state,
      dieValue: action.randomNum,
    };
  }
};
