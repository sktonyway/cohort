import { View, Text, StyleSheet } from 'react-native';

export default function TabScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World ❤️</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
});