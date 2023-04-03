import {StatusBar} from 'react-native';
import {StyleSheet, View} from 'react-native';
import DiceHolder from './src/Components/Dice/DiceHolder';
import ButtonArea from './src/Components/Actions/ButtonArea';
import {dieSideReducer} from './src/Reducers/dieSideReducer';
import {experimentalReducer} from './src/Reducers/experimentalReducer';
import {returnRandomNum} from './src/Helpers/returnRandomNum';
import {DiceContext} from './src/Context/DiceContext';
import React, {useReducer} from 'react';

export default function App() {
  const initialExperimentalState = [
    {value: 0, id: 'first'},
    {value: 0, id: 'second'},
    {value: 0, id: 'third'},
  ];
  const [stateExperimental, dispatchExperimental] = useReducer(
    experimentalReducer,
    initialExperimentalState,
  );
  // console.log(stateExperimental);
  const [state, dispatch] = useReducer(dieSideReducer, {
    dieValue: 0,
    totalScore: 0,
  });
  return (
    <DiceContext.Provider value={{stateExperimental, dispatchExperimental}}>
      <View style={styles.mainContainer}>
        <StatusBar hidden />
        <DiceHolder />
        <ButtonArea />
      </View>
    </DiceContext.Provider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
});
