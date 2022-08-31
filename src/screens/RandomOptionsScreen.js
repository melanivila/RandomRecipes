import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from '../components/common/CustomButton';
import { TagButton } from '../components/randomRecipe/TagButton';
import { COLORS, FONTS } from '../constants/theme';
import { BackButton } from '../components/common/BackButton';
import { Background } from '../components/common/Background';
const { mealType, diets, cuisines } = require('../api/tags.json');

export const RandomOptionsScreen = () => {
  const navigation = useNavigation();

  const [selectedItems, setselectedItems] = useState([]);

  const handleOnPress = (tag) => {
    if (selectedItems.includes(tag.name)) {
      const newTagsList = selectedItems.filter((item) => item !== tag.name);
      return setselectedItems(newTagsList);
    }
    setselectedItems([...selectedItems, tag.name]);
  };

  const getSelected = (tag) => {
    if (selectedItems.length === 0) return false;
    if (selectedItems.includes(tag.name)) {
      return true;
    } else return false;
  };
  const setTags = () => {
    const tags = selectedItems.join(',');

    navigation.navigate('RandomRecipeScreen', { tags: tags });
  };

  return (
    <>
      <Background />
      <Text style={styles.screenTitle}>Random recipe</Text>
      <BackButton color={COLORS.darkLime} />
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          marginVertical: 20,
          marginHorizontal: 20,
        }}
      >
        <Text style={{ ...FONTS.body3, color: COLORS.gray, marginTop: 40 }}>
          Select at least one option of the above to start
        </Text>
        <Text style={styles.optionType}>DISH</Text>
        <View style={styles.tagsContainer}>
          {mealType.map((tag) => {
            return (
              <TagButton
                key={tag.id}
                buttonText={tag.name}
                onPress={() => handleOnPress(tag)}
                selected={getSelected(tag)}
              />
            );
          })}
        </View>
        <Text style={styles.optionType}>DIET</Text>
        <View style={styles.tagsContainer}>
          {diets.map((tag) => {
            return (
              <TagButton
                key={tag.id}
                buttonText={tag.name}
                onPress={() => handleOnPress(tag)}
                selected={getSelected(tag)}
              />
            );
          })}
        </View>
        <Text style={styles.optionType}>CUISINE</Text>
        <View style={styles.tagsContainer}>
          {cuisines.map((tag) => {
            return (
              <TagButton
                key={tag.id}
                buttonText={tag.name}
                onPress={() => handleOnPress(tag)}
                selected={getSelected(tag)}
              />
            );
          })}
        </View>

        <CustomButton
          buttonText="Random"
          buttonContainerStyle={styles.optionBtn}
          onPress={setTags}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  optionType: {
    ...FONTS.h3,
    color: COLORS.transparentBlack1,
    textAlign: 'right',
    marginRight: 10,
    marginTop: 5,
    borderTopWidth: 2,
    borderColor: COLORS.transparentBlack1,
  },
  optionBtn: {
    paddingVertical: 7,
    borderWidth: 2,
    borderColor: COLORS.lime,
    margin: 13,
    borderRadius: 23,
    backgroundColor: COLORS.transparentDarkGray,
  },
  screenTitle: {
    ...FONTS.h2,
    position: 'absolute',
    marginTop: 20,
    color: COLORS.darkLime,
    right: 30,
  },
  tagsContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
});
