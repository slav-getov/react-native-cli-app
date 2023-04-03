import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
type DiceElementProps = {
  numberOnDiceSide: number;
};
const DiceElement = ({numberOnDiceSide}: DiceElementProps) => {
  return (
    <View>
      <Text style={styles.dice}>{numberOnDiceSide}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  dice: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,

    color: 'white',
    marginHorizontal: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default DiceElement;
