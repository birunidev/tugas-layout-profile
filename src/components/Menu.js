import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ICForward from '../assets/ic-forward.svg';

export default function Menu({icon, text, color}) {
  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <View style={styles.icon(color)}>{icon}</View>
        <Text style={styles.text}>{text}</Text>
      </View>
      <TouchableOpacity>
        <ICForward />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: color => ({
    width: 52,
    height: 52,
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color,
  }),
  text: {
    fontFamily: 'Spartan-SemiBold',
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
});
