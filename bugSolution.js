import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//Solution:
// 1. Clean npm cache: npm cache clean --force
// 2. Clear Expo cache: expo prebuild --clean
// 3. Reinstall dependencies: expo install
// 4. Check for compatible versions of expo and react-native
// 5. If problem persists create new project
// 6. Check if your internet connection is stable.