import * as React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const SelectEX = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text>
          Edit SelectEX.tsx to change this screen.
          Edit SelectEX.tsx to change this screen.
          Edit SelectEX.tsx to change this screen.
          Edit SelectEX.tsx to change this screen.
          Edit SelectEX.tsx to change this screen.
          Edit SelectEX.tsx to change this screen.
          Edit SelectEX.tsx to change this screen.
          Edit SelectEX.tsx to change this screen.
          Edit SelectEX.tsx to change this screen.
        </Text>
    </ScrollView>
    </View>
  );
};

// export default SelectEX;

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Your content goes here */}
        <Text>
          Edit SelectEX.tsx to change this screen.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'black',
    maxHeight: 200, // Set the maximum height here
  },
  content: {
    // flex: 1,
    backgroundColor: 'red',
  },
});

export default SelectEX;
