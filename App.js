import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { LoginScreen } from './src/screens/login';
import * as Font from 'expo-font';
import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { MainNavigator } from './src/routes';
import { AutenticacaoProvider, IpServerProvider } from './src/hooks/autenticacao';

export default function App() {
  const [fontsLoaded] = Font.useFonts({
    'FIFA': require
    ('./src/assets/fonts/fifa.ttf'),
  });
  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      // await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  return (
      <AutenticacaoProvider>
        <IpServerProvider>
          <StatusBar style='dark'  backgroundColor="transparent"/>
          <MainNavigator/>
        </IpServerProvider>
      </AutenticacaoProvider>
  );
}
