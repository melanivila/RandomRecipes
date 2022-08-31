import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';

export const TagButton = ({ buttonText, onPress, selected }) => {
  return (
    <View style={selected ? [styles.btnContainer, styles.overlay] : styles.btnContainer}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <Text style={{ textAlign: 'center', color: COLORS.white, ...FONTS.body4 }}>
          {buttonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: COLORS.darkLime,
    margin: 4,
    backgroundColor: COLORS.lime,
  },
  overlay: {
    backgroundColor: COLORS.darkLime,
  },
});
