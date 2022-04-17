import React from 'react';
import {ScrollView, Text} from 'react-native';
import {NavigationBar} from 'navigation-react-native';

const World = () => (
  <>
    <NavigationBar title="World" />
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text>
        With the old React Native architecture, this text shows correctly below
        the navigation bar every time you see it.
      </Text>
    </ScrollView>
  </>
);

export default World;
