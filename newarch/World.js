import React from 'react';
import {ScrollView, Text} from 'react-native';
import {NavigationBar} from 'navigation-react-native';

const World = () => (
  <>
    <NavigationBar title="World" />
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text>
        This text shows correctly below the navigation bar the first time you
        see it. But if you go back and press the button again then the text
        shows wrongly behind the navigation bar.
      </Text>
    </ScrollView>
  </>
);

export default World;
