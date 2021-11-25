import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React, { useState } from 'react';

import { fontFiles } from './src/constants/theme';
import { Home } from './src/screens';

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <AppLoading
        onError={console.log('error')}
        startAsync={loadAsync}
        onFinish={() => setLoading(false)}
      />
    );
  }

  async function loadAsync() {
    return Font.loadAsync(fontFiles);
  }

  return <Home />;
}
