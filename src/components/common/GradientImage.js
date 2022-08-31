import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, ImageBackground } from 'react-native';
import { COLORS, SIZES, FONTS } from '../../constants/theme';

export const GradientImage = ({ headTitle, headImage }) => {
  return (
    <View style={{ height: headImage ? 220 : '60%' }}>
      <ImageBackground
        source={{
          uri: !headImage
            ? 'https://c.pxhere.com/photos/5b/03/basil_cherry_tomatoes_close_up_colorful_cooking_diet_garlic_healthy-1630404.jpg!d'
            : headImage,
        }}
        style={{ flex: 1, justifyContent: 'flex-end' }}
        resizeMode="cover"
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[COLORS.transparent, COLORS.black]}
          style={{
            height: 200,
            justifyContent: 'flex-end',
            paddingHorizontal: SIZES.padding,
          }}
        >
          {headImage ? (
            <Text
              style={{
                width: '90%',
                color: COLORS.white,
                marginBottom: 10,
                ...FONTS.h2,
              }}
            >
              {headTitle}
            </Text>
          ) : (
            <Text
              style={{
                width: '80%',
                color: COLORS.white,
                ...FONTS.largeTitle,
              }}
            >
              {headTitle}
            </Text>
          )}
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};
