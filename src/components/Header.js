import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import ICBack from '../assets/ic-back.svg';
import ICKebab from '../assets/ic-kebab.svg';

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <ICBack />
      </TouchableOpacity>
      <Text style={styles.title}>My Profile</Text>
      <TouchableOpacity>
        <ICKebab />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Spartan-SemiBold',
    color: '#000000',
  },
});
