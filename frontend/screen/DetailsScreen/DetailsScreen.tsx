import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {DetailsScreenProps} from './types';
import {styles} from './styles';

export function DetailsScreen({navigation}: DetailsScreenProps) {
  return (
    <View style={[styles.container]}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}
