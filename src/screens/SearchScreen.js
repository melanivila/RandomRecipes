import React, { useState } from 'react';
import { Dimensions, Text, View, Platform, Button, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { recipesApi } from '../api/recipesApi';
import { BackButton } from '../components/common/BackButton';
import { Background } from '../components/common/Background';
import { Loading } from '../components/common/Loading';
import { RecipeSearchCard } from '../components/searchBar/RecipeSearchCard';
import { SearchInput } from '../components/searchBar/SearchInput';
import { COLORS, FONTS } from '../constants/theme';

const { width: screenWidth } = Dimensions.get('window');

export const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const [isFetching, setIsFetching] = useState(true);
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
    setIsFetching(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <Background />
      <SearchInput
        onDebounce={(value) => setTerm(value)}
        style={{
          position: 'absolute',
          // zIndex: 999,
          width: screenWidth - 40,
          marginHorizontal: 20,
          top: Platform.OS === 'ios' ? top : top + 10,
        }}
      />

      <Text
        style={{
          marginHorizontal: 30,
          marginVertical: 8,
          top: 10,
          textAlign: 'right',
          marginBottom: top + 80,
          ...FONTS.h2,
          color: COLORS.darkLime,
        }}
      >
        Search{term && `: "${term}"`}
      </Text>
      {recipesList && (
        <ScrollView>
          {recipesList?.map((item) => {
            return <RecipeSearchCard item={item} key={item.id} />;
          })}
        </ScrollView>
      )}
      <Button title="search" onPress={() => loadRecipes(term)} color={COLORS.darkLime} />
      <BackButton color={COLORS.darkLime} />
    </View>
  );
};
