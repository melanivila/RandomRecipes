import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('screen');

const cardWidth = width - 70;
const cardHeight = cardWidth * 1.3;

export const RandomRecipeCard = ({ recipeItem, onPress, getRecipes }) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={{
          height: cardHeight,
          width: cardWidth,
          marginRight: 20,
          borderRadius: SIZES.radius,
        }}
        onPress={onPress}
        activeOpacity={0.9}
      >
        <Image
          source={{ uri: recipeItem?.image }}
          resizeMode="cover"
          style={{ width: cardWidth, height: cardHeight, borderRadius: SIZES.radius }}
        />
        <View
          style={{
            position: 'absolute',
            flexDirection: 'row',
            flexWrap: 'wrap',
            top: 15,
            left: 15,
            marginRight: 10,
          }}
        >
          {recipeItem?.dishTypes.map((element, index) => {
            return (
              <View
                style={{
                  marginRight: 3,
                  marginBottom: 3,
                  overflow: 'hidden',
                  paddingHorizontal: SIZES.radius,
                  paddingVertical: 5,
                  backgroundColor: COLORS.transparentBlack5,
                  borderRadius: SIZES.radius,
                }}
                key={index}
              >
                <Text style={{ color: COLORS.white, ...FONTS.h4 }}>{element}</Text>
              </View>
            );
          })}
        </View>
        <View
          style={{
            ...styles.recipeCardContainer,
            backgroundColor: COLORS.transparentBlack7,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text style={{ width: '80%', color: COLORS.white, ...FONTS.h3, marginBottom: 10 }}>
              {recipeItem?.title}
            </Text>
            <TouchableOpacity
              onPress={() => getRecipes()}
              style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-start' }}
            >
              <Icon name="refresh-circle-outline" size={30} color={COLORS.lime} />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', top: 3 }}>
            <Icon name="alarm-outline" size={17} color="white" />
            <Text style={{ paddingHorizontal: 5, ...FONTS.body5, color: COLORS.white }}>
              Ready in {recipeItem?.readyInMinutes} minutes | {recipeItem?.servings} Serving
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: cardWidth,
    height: cardHeight,
    borderRadius: SIZES.radius,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4.65,

    elevation: 7,
    marginVertical: 15,
  },
  recipeCardContainer: {
    position: 'absolute',
    bottom: 10,
    left: 15,
    right: 15,
    paddingHorizontal: SIZES.base,
    paddingVertical: SIZES.radius,
    borderRadius: SIZES.radius,
  },
});
