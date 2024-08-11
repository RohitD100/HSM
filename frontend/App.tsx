import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styles} from './styles';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[backgroundStyle]}>
        <View
          style={[
            styles.box,
            {
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            },
          ]}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
