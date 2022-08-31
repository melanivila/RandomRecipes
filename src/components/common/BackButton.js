import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants/theme';

export const BackButton = ({ color = 'white' }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        position: 'absolute',
        margin: 15,
      }}
    >
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}
        style={{
          width: 33,
          height: 33,
          backgroundColor: color != 'white' ? 'transparent' : COLORS.transparentBlack1,
          borderRadius: 20,
        }}
      >
        <Icon name="arrow-back-circle-outline" size={35} color={color} style={{ bottom: 2 }} />
      </TouchableOpacity>
    </View>
  );
};
