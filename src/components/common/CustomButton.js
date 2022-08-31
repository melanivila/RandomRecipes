import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';

export const CustomButton = ({ buttonText, buttonContainerStyle, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ ...buttonContainerStyle }} activeOpacity={0.7}>
      <Text style={{ textAlign: 'center', color: COLORS.white, ...FONTS.h3 }}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
