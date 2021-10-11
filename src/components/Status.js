import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Status({text, color, isActive}) {
  return (
    <View style={styles.container(color, isActive)}>
      <Text style={styles.text(isActive)}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: color => ({
    padding: 10,
    borderRadius: 100,
    backgroundColor: color,
  }),
  text: isActive => ({
    color: isActive ? 'white' : '#777777',
    fontFamily: 'Spartan-SemiBold',
  }),
});
