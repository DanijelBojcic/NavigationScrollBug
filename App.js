/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainScreen from './src/MainScreen';
import ModalScreen from './src/ModalScreen';

const Stack = createStackNavigator();

const basicScreenPreset = {
  gestureEnabled: true,
  headerShown: false,
  presentation: 'transparentModal',
  cardOverlayEnabled: true,
};

const modal = {
  headerShown: false,
  presentation: 'transparentModal',
  cardOverlayEnabled: true,
  ...TransitionPresets.ModalSlideFromBottomIOS,
  cardStyleInterpolator: props => ({
    ...CardStyleInterpolators.forVerticalIOS(props),
    overlayStyle: {
      opacity: props.current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.6],
      }),
    },
  }),
};

const App = () => {
  return (
    <GestureHandlerRootView style={styles.ghRoot}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={basicScreenPreset}>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Modal" component={ModalScreen} options={modal} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  ghRoot: {
    flex: 1,
  },
});

export default App;
