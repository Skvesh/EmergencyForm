import React from 'react'
import MainStack from './src/navigation';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    // <PaperProvider>
      <MainStack />
    // </PaperProvider>
  );
}
