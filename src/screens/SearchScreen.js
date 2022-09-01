import React, { useState } from 'react';
import { Dimensions, Text, View, Platform, Button, ScrollView, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { recipesApi } from '../api/recipesApi';
import { BackButton } from '../components/common/BackButton';
import { Background } from '../components/common/Background';
import { CustomButton } from '../components/common/CustomButton';
import { Loading } from '../components/common/Loading';
import { RecipeSearchCard } from '../components/searchBar/RecipeSearchCard';
import { SearchInput } from '../components/searchBar/SearchInput';
import { COLORS, FONTS } from '../constants/theme';

const { width: screenWidth } = Dimensions.get('window');

export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const [recipesList, setRecipesList] = useState([]);
  const [term, setTerm] = useState('');

  const loadRecipes = async (query) => {
    if (term.length === 0) {
      return setRecipesList([]);
    }
    if (term) {
      const res = await recipesApi.get(`/complexSearch?query=${query}&number=20`);
      setRecipesList(res.data.results);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Background />
      <SearchInput
        onDebounce={(value) => setTerm(value)}
        style={{ ...styles.searchInput, top: Platform.OS === 'ios' ? top : top + 10 }}
      />

      <Text style={{ ...styles.term, marginBottom: top + 80 }}>Search{term && `: "${term}"`}</Text>
      {recipesList && (
        <ScrollView showsVerticalScrollIndicator={false}>
          {recipesList?.map((item) => {
            return <RecipeSearchCard item={item} key={item.id} />;
          })}
        </ScrollView>
      )}
      <CustomButton
        buttonText="SEARCH"
        buttonContainerStyle={styles.searchBtn}
        onPress={() => loadRecipes(term)}
      />
      <BackButton color={COLORS.darkLime} />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBtn: {
    backgroundColor: COLORS.darkLime,
    height: 50,
    justifyContent: 'center',
  },
  searchInput: {
    position: 'absolute',
    width: screenWidth - 40,
    marginHorizontal: 20,
  },
  term: {
    marginHorizontal: 30,
    marginVertical: 8,
    top: 12,
    textAlign: 'right',

    ...FONTS.h3,
    color: COLORS.darkLime,
  },
});
