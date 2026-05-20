import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';
import { appTheme } from './src/styles/theme';

export default function App() {
  return (
    <PaperProvider theme={appTheme}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <HomeScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2E8DC',
  },
});
