import React from 'react';
import { Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { FONTS, COLORS } from '../../constants/theme';

export const IngredientCard = ({ item }) => {
  return (
    <View
      style={{
        width: 140,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginHorizontal: 10,
        marginVertical: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: COLORS.darkLime,
        backgroundColor: COLORS.white,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,

        elevation: 8,
      }}
    >
      <View
        style={{
          borderRadius: 5,
          backgroundColor: COLORS.white,
          height: 70,
          width: 70,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {item.image ? (
          <Image
            source={{
              uri: `https://spoonacular.com/cdn/ingredients_100x100/${item.image}`,
            }}
            style={{ height: 65, width: 65 }}
            resizeMode="contain"
          />
        ) : (
          <Icon name="image-outline" size={45} color={COLORS.transparentBlack3} />
        )}
      </View>
      <View>
        <Text style={{ ...FONTS.body4, textAlign: 'center' }}>{item.name}</Text>
      </View>
      <View
        style={{
          top: 2,
        }}
      >
        <Text style={{ ...FONTS.body5, color: COLORS.darkGreen }}>
          {item.measures.metric?.amount} {item.measures.metric?.unitShort}
        </Text>
      </View>
    </View>
  );
};
