import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './navigation';
import { persistor, store } from './store';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

export default () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    );
  }
}
