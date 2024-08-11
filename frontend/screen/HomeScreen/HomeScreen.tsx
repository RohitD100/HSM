import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {HomeScreenProps} from './types';
import {styles} from './styles';

export function HomeScreen({navigation}: HomeScreenProps) {
  return (
    <View style={[styles.container]}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
