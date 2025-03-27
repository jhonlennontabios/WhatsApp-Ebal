import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeFile from './screen/HomeFile';
import IMGgalary from './screen/ImgGalary'; 
import vidios from './screen/Vidios';
import APK from './screen/APK';
import favorate from './screen/Favorate';
import Audeo from './screen/audeo';
import Document from './screen/Document';
import compress from './screen/Compress';
import Download from './screen/Download';
import internal from './screen/internalStorage';
import Sdcard from './screen/SDcard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeFile" component={HomeFile} />
        <Stack.Screen name="IMGgalary" component={IMGgalary} />
        <Stack.Screen name="vidios" component={vidios} />
        <Stack.Screen name="APK" component={APK} />
        <Stack.Screen name="favorate" component={favorate} />
        <Stack.Screen name="Audeo" component={Audeo} />
        <Stack.Screen name="Document" component={Document} />
        <Stack.Screen name="compress" component={compress} />
        <Stack.Screen name="Download" component={Download} />
        <Stack.Screen name="internal" component={internal} />
        <Stack.Screen name="Sdcard" component={Sdcard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
