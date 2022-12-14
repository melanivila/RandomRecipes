import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { CustomButton } from '../components/common/CustomButton';
import { GradientImage } from '../components/common/GradientImage';

import { COLORS } from '../constants/theme';

const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      <GradientImage headTitle="Find the best recipes on Random Recipe!" />
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <CustomButton
          buttonText="Random recipe"
          buttonContainerStyle={styles.randomBtn}
          onPress={() => navigation.navigate('RandomOptionsScreen')}
        />
        <CustomButton
          buttonText="Recipe finder"
          buttonContainerStyle={styles.searchBtn}
          onPress={() => navigation.navigate('Search')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  randomBtn: {
    paddingVertical: 10,
    borderRadius: 20,
    marginVertical: 4,
    marginHorizontal: 20,
    backgroundColor: COLORS.lime,
  },
  searchBtn: {
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: COLORS.lime,
    marginHorizontal: 20,
    marginVertical: 4,
    borderRadius: 23,
    backgroundColor: 'transparent',
  },
});
