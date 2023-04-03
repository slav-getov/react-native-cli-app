import React, {useContext} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import DiceElement from './DiceElement';
import ResultDisplayer from '../Informational/ResultDisplayer';
import {DiceContext} from '../../Context/DiceContext';

//import {DiceContext} from '../../Context/DiceContext';
//const {stateExperimental} = useContext(DiceContext);

const DiceHolder = () => {
  const {stateExperimental} = useContext(DiceContext);
  //
  const valueToDisplayNow = stateExperimental
    .map(singleItem => singleItem.value)
    .reduce((acc, currentValue) => acc + currentValue, 0);
  console.log(valueToDisplayNow);
  return (
    //here we will attempt to remove the view style and style the whole uppercontainer with flatlist styles
    <View style={styles.container}>
      {/* <ResultDisplayer valueToDisplay="Total: 9" /> */}
      {/* <View style={styles.diceContainer}> */}
      <FlatList
        style={styles.marker}
        data={stateExperimental}
        renderItem={({item}) => <DiceElement numberOnDiceSide={item.value} />}
        keyExtractor={item => item.id}
        numColumns={3}
        ListHeaderComponent={
          <ResultDisplayer valueToDisplay={`Total: ${valueToDisplayNow}`} />
        }
        ListFooterComponent={<DiceElement numberOnDiceSide={0} />}
        ListFooterComponentStyle={styles.footer}
        contentContainerStyle={styles.content}
      />
      {/* </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 10,
  },

  diceContainer: {
    flexDirection: 'row',
  },

  content: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
  },
  footer: {
    marginVertical: 10,
  },
});
export default DiceHolder;
