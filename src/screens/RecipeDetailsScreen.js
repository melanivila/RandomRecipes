import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { recipesApi } from '../api/recipesApi';
import { BackButton } from '../components/common/BackButton';
import { Background } from '../components/common/Background';
import { GradientImage } from '../components/common/GradientImage';
import { Loading } from '../components/common/Loading';
import { DietIcons } from '../components/recipesDetails/DietIcons';
import { IngredientsList } from '../components/recipesDetails/IngredientsList';
import { RecipeDetails } from '../components/recipesDetails/RecipeDetails';
import { RecipeInstructions } from '../components/recipesDetails/RecipeInstructions';
import { COLORS } from '../constants/theme';

const Recipe = ({ route }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [recipeDetails, setRecipeDetails] = useState();

  const getRecipeDetails = async (id) => {
    try {
      const res = await recipesApi.get(`/${id}/information?includeNutrition=false`);
      setRecipeDetails(res.data);
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let { id } = route.params;
    getRecipeDetails(id);
    // console.log(id);
  }, []);

  const steps = recipeDetails?.analyzedInstructions[0].steps;

  return (
    <>
      <Background />
      {isFetching ? (
        <Loading />
      ) : (
        <ScrollView
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <GradientImage headTitle={recipeDetails?.title} headImage={recipeDetails?.image} />

            <DietIcons diet={recipeDetails} />

            <RecipeDetails recipeDetails={recipeDetails} />

            <IngredientsList recipeDetails={recipeDetails} />

            <RecipeInstructions steps={steps} />

            <View style={{ height: 50 }} />
          </View>
          <BackButton />
        </ScrollView>
      )}
    </>
  );
};

export default Recipe;
