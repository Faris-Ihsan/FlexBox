import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}/>
      <View style={styles.box2}/>
      <View style={styles.box3}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexdirection: 'column'
  },
  box1: {
    flex: 1, // Größeverhältnisse (zwischen "Geschwistern")
    backgroundColor: 'cyan',
  },
  box2: {
    flex: 2,
    backgroundColor: 'magenta',
  },
  box3: {
    flex: 3,
    backgroundColor: 'yellow',
  },  
});
