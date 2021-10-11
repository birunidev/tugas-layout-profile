import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ProfileImg from '../assets/profile.png';
import Gap from './Gap';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={ProfileImg} />
      </View>
      <Gap width={30} />
      <View style={styles.info}>
        <Text style={styles.name}>Muhammad Al Biruni</Text>
        <Text style={styles.bio}>Front End Developer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  info: {
    marginTop: 10,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Spartan-SemiBold',
    color: '#000000',
  },
  bio: {
    fontFamily: 'Spartan-Regular',
  },
});
