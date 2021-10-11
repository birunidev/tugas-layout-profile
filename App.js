import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Gap from './src/components/Gap';
import Header from './src/components/Header';
import Menu from './src/components/Menu';
import Profile from './src/components/Profile';
import Status from './src/components/Status';
import ICWallet from './src/assets/ic-wallet.svg';
import ICPrivacy from './src/assets/ic-privacy.svg';
import ICAchieve from './src/assets/ic-achieve.svg';
import Footer from './src/components/Footer';

export default function App() {
  return (
    <View style={styles.app}>
      <Header />
      <Profile />
      <View>
        <Text style={styles.textMenu}>My Status</Text>
        <Gap height={20} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.statusWrapper}>
            <Status text={`😋 Away`} color={`#000000`} isActive={true} />
            <Gap width={10} />
            <Status text={`💻 Working`} color={`#DAFFEA`} />
            <Gap width={10} />
            <Status text={`🎮 Gaming`} color={`#FFECD6`} />
            <Gap width={10} />
            <Status text={`📕 Studying`} color={`#D6FDFF`} />
          </View>
        </ScrollView>
        <Gap height={20} />
      </View>
      <View>
        <Text style={styles.textMenu}>My Dashboard</Text>
        <Gap height={10} />
        <View>
          <Menu icon={<ICWallet />} text="Payments" color={`#59BC7D`} />
          <Menu icon={<ICAchieve />} text="Achievements" color={`#FFD237`} />
          <Menu icon={<ICPrivacy />} text="Privacy" color={`#A5A5A5`} />
        </View>
      </View>
      <View>
        <Text style={styles.textMenu}>My Account</Text>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    paddingBottom: 80,
  },
  statusWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textMenu: {
    fontSize: 14,
    fontFamily: 'Spartan-Regular',
    color: 'black',
  },
});
