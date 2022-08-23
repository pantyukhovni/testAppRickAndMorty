import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Spinner } from '@app/common/components/Spinner';
import { RootNavigation } from '@app/navigation/RootNavigation';
import { persistor, store } from '@app/store';
import { Container } from '@app/ui/components/Container';

const App = () => {
  return (
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <Provider store={store}>
        <NavigationContainer>
          <Container component={SafeAreaView}>
            <RootNavigation />
          </Container>
        </NavigationContainer>
      </Provider>
    </PersistGate>
  );
};

export { App };
