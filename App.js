import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';

const App = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      transition: 'background-color 0.5s ease-in-out', // Smooth theme transition
    },
  });

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </View>
    </Provider>
  );
};
export default App;
