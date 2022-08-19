import {useNavigation} from '@react-navigation/native';
import {Button, StyleSheet, View} from 'react-native';
import React from 'react';

const MainScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Modal');
  };

  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={handlePress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default MainScreen;
