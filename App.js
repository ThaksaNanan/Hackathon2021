
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Styles from './src/styles';
import Navigation from './src/navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux'
import {Store} from './src/Redux/store'




export default function App({ navigation}) {
  console.log('TEST REDUX : ',Store)
  return (
    <Provider store={Store}>
    <SafeAreaProvider>
     <Navigation/>
    </SafeAreaProvider>
    </Provider>
  )
}
const styles = StyleSheet.create({
  BackgroundEX1: {
    backgroundColor: Styles.Excercise1,
},
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

