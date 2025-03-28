import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import chat from './screen/chat';
import update from './screen/Update'; 

import camera from './screen/camera';

import calls from './screen/calls';
import settings from './screen/settings';
import communities from './screen/community';
import search from './screen/search';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="chat" component={chat} />
        <Stack.Screen name="update" component={update} />
        <Stack.Screen name="camera" component={camera} />
        <Stack.Screen name="calls" component={calls} />
        <Stack.Screen name="settings" component={settings} />
        <Stack.Screen name="communities" component={communities} />
        <Stack.Screen name="search" component={search} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
