import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import genderbirthScreen from './screen/genderbirth';
import heightScreen from './screen/height'; 
import SetWeightScreen from './screen/weight';
import SetBMItScreen from './screen/BMI';
import SetActivityLeveltScreen from './screen/activityLevel';
import SetfitnessGoaltScreen from './screen/fitnessGoals';
import SetWidthLossProgScreen from './screen/weigthLossProgress';
import SetActivitySummaryScreen from './screen/activitySummary';
import SetCaloresScreen from './screen/calorieCounter';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="genderbirthScreen" component={genderbirthScreen} />
        <Stack.Screen name="heightScreen" component={heightScreen} />
        <Stack.Screen name="SetWeightScreen" component={SetWeightScreen} />
        <Stack.Screen name="SetBMItScreen" component={SetBMItScreen} />
        <Stack.Screen name="SetActivityLeveltScreen" component={SetActivityLeveltScreen} />
        <Stack.Screen name="SetfitnessGoaltScreen" component={SetfitnessGoaltScreen} />
        <Stack.Screen name="SetWidthLossProgScreen" component={SetWidthLossProgScreen} />
        <Stack.Screen name="SetActivitySummaryScreen" component={SetActivitySummaryScreen} />
        <Stack.Screen name="SetCaloresScreen" component={SetCaloresScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
