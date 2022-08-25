import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Spinner } from '@app/common/components/Spinner';
import { RootNavigation } from '@app/navigation/RootNavigation';
import { client } from '@app/services/api';
import { persistor, store } from '@app/store';
import { Container } from '@app/ui/components/Container';

import { toastConf } from './toast.conf';

const App = () => {
  return (
    <PersistGate loading={<Spinner />} persistor={persistor}>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <NavigationContainer>
            <Container component={SafeAreaView}>
              <RootNavigation />
              <Toast config={toastConf} />
            </Container>
          </NavigationContainer>
        </ApolloProvider>
      </Provider>
    </PersistGate>
  );
};

export { App };
