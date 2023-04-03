import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DiceElement = ({numberOnDiceSide}) => {
  return (
    <View>
      <Text style={styles.dice}>{numberOnDiceSide}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  dice: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    fontSize: 20,
    color: 'white',
    marginHorizontal: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default DiceElement;
