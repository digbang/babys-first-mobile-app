import React from 'react';

import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({label, onClick, rounded}) => (
  <TouchableOpacity
    style={[styles.button, rounded && styles.rounded]}
    onPress={onClick}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 35,
    height: 35,
    marginHorizontal: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rounded: {
    borderRadius: 17,
  },
});

export default Button;
