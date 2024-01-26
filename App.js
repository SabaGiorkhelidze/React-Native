import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Splash from './Screens/Auth/Splash/index'
import SignUp from './Screens/Auth/Sign Up/SingUp';
export default function App() {
  return (
    <SafeAreaView  >
      {/* <Splash /> */}
      <SignUp />
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
    
//   },
// });
