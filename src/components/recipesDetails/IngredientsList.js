import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { FONTS, COLORS } from '../../constants/theme';
import { IngredientCard } from './IngredientCard';

export const IngredientsList = ({ recipeDetails }) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          marginTop: 15,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
            color: COLORS.darkLime,
            fontWeight: 'bold',
          }}
        >
          Ingredients
        </Text>
        <Text style={{ top: 1, ...FONTS.body5, color: COLORS.transparentBlack3 }}>
          {recipeDetails?.extendedIngredients.length} items
        </Text>
      </View>
      <View style={{ marginLeft: 10 }}>
        <FlatList
          data={recipeDetails?.extendedIngredients}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <IngredientCard item={item} key={item.id} />}
        />
      </View>
    </>
  );
};
