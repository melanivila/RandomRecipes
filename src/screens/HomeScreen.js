import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StatusBar } from 'react-native';
import { CustomButton } from '../components/common/CustomButton';
import { GradientImage } from '../components/common/GradientImage';

import { COLORS } from '../constants/theme';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.black }}>
      <GradientImage headTitle="Find the best recipes on Random Recipe!" />
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <CustomButton
          buttonText="Random recipe"
          buttonContainerStyle={{
            paddingVertical: 10,
            borderRadius: 20,
            marginVertical: 4,
            marginHorizontal: 20,
            backgroundColor: COLORS.lime,
          }}
          onPress={() => navigation.navigate('RandomOptionsScreen')}
        />
        <CustomButton
          buttonText="Recipe finder"
          buttonContainerStyle={{
            paddingVertical: 10,
            borderWidth: 2,
            borderColor: COLORS.lime,
            marginHorizontal: 20,
            marginVertical: 4,
            borderRadius: 23,
            backgroundColor: 'transparent',
          }}
          onPress={() => navigation.navigate('Search')}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
