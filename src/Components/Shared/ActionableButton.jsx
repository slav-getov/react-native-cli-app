import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const ActionableButton = ({title, onClick, style}) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Text style={style}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionableButton;
