import React from 'react';
import { View, Text } from 'react-native';
import { COLORS, FONTS } from '../../constants/theme';

export const RecipeInstructions = ({ steps }) => {
  return (
    <View style={{ marginHorizontal: 20 }}>
      <Text
        style={{
          ...FONTS.h3,
          color: COLORS.darkLime,
          fontWeight: 'bold',
        }}
      >
        Instructions
      </Text>
      <View>
        {steps?.map((item, index) => {
          return (
            <Text key={index} style={{ ...FONTS.body3, color: COLORS.black, margin: 5 }}>
              {index + 1}. {item.step}
            </Text>
          );
        })}
      </View>
    </View>
  );
};
