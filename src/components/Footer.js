import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Footer() {
  return (
    <View>
      <Text style={styles.textSwitch}>Switch to Other Account</Text>
      <Text style={styles.textLog}>Log Out</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  textSwitch: {
    fontSize: 16,
    fontFamily: 'Spartan-SemiBold',
    color: '#2568EC',
    marginTop: 10,
    marginBottom: 10,
  },
  textLog: {
    fontSize: 16,
    fontFamily: 'Spartan-SemiBold',
    color: '#EF7474',
  },
});
