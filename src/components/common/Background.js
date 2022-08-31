import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';

export const Background = ({ children }) => {
  return (
    <View style={{ flex: 1, position: 'absolute', width: '100%', height: '100%' }}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={['#FAFFE1', '#A1FFCE']}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </LinearGradient>
    </View>
  );
};
