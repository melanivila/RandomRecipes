import React, { useEffect, useState } from 'react';
import { View, Dimensions } from 'react-native';
import { recipesApi } from '../api/recipesApi';
import { CustomButton } from '../components/common/CustomButton';
import { COLORS } from '../constants/theme';
import { RandomRecipeCard } from '../components/randomRecipe/RandomRecipeCard';
import { BackButton } from '../components/common/BackButton';
import { Background } from '../components/common/Background';
import { Loading } from '../components/common/Loading';

const { width } = Dimensions.get('window');

const cardWidth = width - 60;

const RandomRecipeScreen = ({ navigation, route }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [recipesList, setRecipesList] = useState();

  const getRecipes = async () => {
    const { tags } = route.params;

    try {
      setIsFetching(true);
      const res = await recipesApi.get(`/random?number=1&tags=${tags}`);
      setRecipesList(res.data.recipes[0]);
      setIsFetching(false);
      // console.log(tags);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      <Background />
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
          justifyContent: 'space-around',
        }}
      >
        {isFetching ? (
          <Loading />
        ) : (
          <View style={{ alignItems: 'center', bottom: 10 }}>
            <RandomRecipeCard
              key={recipesList?.id}
              recipeItem={recipesList}
              onPress={() => navigation.navigate('Recipe', { id: recipesList?.id })}
              getRecipes={getRecipes}
            />
            <CustomButton
              buttonText="Go to the recipe"
              buttonContainerStyle={{
                paddingVertical: 8,
                borderRadius: 20,
                margin: 10,
                backgroundColor: COLORS.lime,
                width: cardWidth,
              }}
              onPress={() => navigation.navigate('Recipe', { id: recipesList?.id })}
            />
          </View>
        )}
      </View>
      <BackButton color={COLORS.darkLime} />
    </>
  );
};

export default RandomRecipeScreen;
