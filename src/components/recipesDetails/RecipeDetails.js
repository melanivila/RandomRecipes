import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS, FONTS } from '../../constants/theme';

export const RecipeDetails = ({ recipeDetails }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginVertical: 10,
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <View style={{ flexDirection: 'row' }}>
        <Icon name="alarm-outline" size={20} color="black" style={{ top: 1 }} />
        <Text style={{ paddingHorizontal: 5, ...FONTS.body3, color: COLORS.black }}>
          Ready in {recipeDetails?.readyInMinutes} minutes
        </Text>
      </View>
      <Text style={{ ...FONTS.body3, color: COLORS.black }}>
        {recipeDetails?.servings} Servings
      </Text>
    </View>
  );
};
