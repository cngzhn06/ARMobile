import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screen/HomeScreen';
import SudokuScreen from './src/games/Sudoku';
import CatchAll from './src/games/CatchAll';
import Different from './src/games/Different';
import MultiSquare from './src/games/MultiSquare';
import Pyramid from './src/games/Pyramid';
import MemoryBoxes from './src/games/MemoryBoxes';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Sudoku" component={SudokuScreen} />
        <Stack.Screen name="Different" component={Different} />
        <Stack.Screen name="Pyramid" component={Pyramid} />
        <Stack.Screen name="CatchAll" component={CatchAll} />
        <Stack.Screen name="MultiSquare" component={MultiSquare} />
        <Stack.Screen name="MemoryBoxes" component={MemoryBoxes} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
