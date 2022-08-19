import {SectionList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const generateSections = () =>
  Array(10)
    .fill(null)
    .map((_, i) => ({
      title: `Section ${i}`,
      data: Array(10)
        .fill(null)
        .map((__, j) => `Item ${i}${j}`),
    }));

const ModalScreen = () => {
  const renderHeader = ({section: {title}}) => (
    <Text style={styles.text}>{title}</Text>
  );

  const renderItem = ({item}) => <Text style={styles.text}>{item}</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.header}>
          <Text style={styles.text}>Header</Text>
        </View>
        <SectionList
          sections={generateSections()}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
          renderHeader={renderHeader}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    height: '80%',
    width: '100%',
    backgroundColor: '#111111',
  },
  header: {
    height: 100,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  text: {
    color: '#fff',
  },
});

export default ModalScreen;
