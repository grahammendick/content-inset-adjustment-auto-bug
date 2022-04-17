import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {NavigationBar} from 'navigation-react-native';

const World = () => (
  <>
    <NavigationBar title="World" />
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.view} />
    </ScrollView>
  </>
);

const styles = StyleSheet.create({
  view: {
    height: 100,
    backgroundColor: 'orange',
  },
});

export default World;
