import {returnRandomNum} from '../Helpers/returnRandomNumber';
export const experimentalReducer = (state, action) => {
  //put random logic and implementation here?
  if (action.type === 'fill_die') {
    const newState = state.map(singleItem => {
      return {value: returnRandomNum(), id: singleItem.id};
    });
    return newState;
  }
};
