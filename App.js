import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import HomreScreen from './src/screens/HomreScreen';

export default function App() {
  return (
    <View style={styles.container}>
        <HomreScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
    // justifyContent: 'center',
    
  },
  });
