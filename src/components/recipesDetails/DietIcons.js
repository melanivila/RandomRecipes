import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { COLORS } from '../../constants/theme';

export const DietIcons = ({ diet }) => {
  return (
    <View
      style={{
        height: 0,
        alignItems: 'flex-end',
        top: 5,
        marginRight: 5,
        flexDirection: 'column-reverse',
      }}
    >
      {diet?.vegetarian && (
        <Image source={require('../../assets/images/vegetarian.png')} style={styles.icon} />
      )}
      {diet?.vegan && (
        <Image source={require('../../assets/images/vegan.png')} style={styles.icon} />
      )}
      {diet?.glutenFree && (
        <Image source={require('../../assets/images/gluten-free.png')} style={styles.icon} />
      )}
      {diet?.veryHealthy && (
        <Image source={require('../../assets/images/healthy.png')} style={styles.icon} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    tintColor: COLORS.transparentWhite,
    margin: 4,
  },
});
