import * as React from 'react';
import { SafeAreaView, View } from 'react-native';

import SelectEX from './SelectEX';
import FormEX from './FormEX';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#F9F9F9', padding: 24 }}>
      <SelectEX />
    </SafeAreaView>
  );
}
