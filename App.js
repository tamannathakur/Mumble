import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';

import HomeScreen from './HomeScreen';
import OutfitDetails from './OutfitDetails';
import PointsScreen from './PointsScreen';
import AddOutfitScreen from './AddOutfitScreen';
import ProfileScreen from './ProfileScreen';
import SavedOutfitsScreen from './SavedOutfitsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: () => <LogoTitle />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff',
            },
          }}
        />
        <Stack.Screen name="Points" component={PointsScreen} />
        <Stack.Screen name="OutfitDetails" component={OutfitDetails} />
        <Stack.Screen name="AddOutfit" component={AddOutfitScreen} />
        <Stack.Screen name="SavedOutfits" component={SavedOutfitsScreen} />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerTitle: () => <ProTitle />,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const LogoTitle = () => (
  <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#000' }}>Mumble</Text>
);

const ProTitle = () => (
  <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>Profile Section</Text>
);

export default App;
