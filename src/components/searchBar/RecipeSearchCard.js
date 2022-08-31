import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { FONTS, COLORS } from '../../constants/theme';

export const RecipeSearchCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginHorizontal: 25,
        marginVertical: 12,
        alignItems: 'center',
        borderRightWidth: 35,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderColor: COLORS.darkLime,
        backgroundColor: COLORS.transparentBlack1,
      }}
    >
      <View
        style={{
          height: 60,
          width: 60,
          right: 30,
        }}
      >
        <Image
          source={{
            uri: item.image,
          }}
          style={{ height: 60, width: 60, borderBottomLeftRadius: 10, borderTopLeftRadius: 10 }}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          right: 15,
          width: '80%',
        }}
      >
        <Text style={{ ...FONTS.body4 }}>
          {item.title.length > 45 ? `${item.title.slice(0, 45)}...` : item.title}
        </Text>
      </View>
      <View style={{ position: 'absolute', right: -38 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Recipe', { id: item?.id })}
        >
          <Icon name="chevron-forward-sharp" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
