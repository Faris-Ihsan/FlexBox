import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, {backgroundColor: 'cyan'}]}/>
      <View style={[styles.box, {backgroundColor: 'magenta'}]}/>
      <View style={[styles.box, {backgroundColor: 'yellow'}]}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Ausrichtung der Hauptsache 
    justifyContent: 'space-evenly', // Anordnung der Elemente auf der Hauptachse
    alignItems: 'center', // Anordnung auf Querachse
  },
  box:{
    width: 100,
    height: 100,
  },
});

// Jede View ist bereits ein FlexContainer und hat das FLexbox-Layout

// Flexbox-Layout - wichtige Styling-Eigenschaften:

// flexDirection legt Ausruchtung der Hautachse fest
// flexDirection: 'row' | 'column' | 'row-reverse' | 'column - reverse'
// flexDirection hat 'column' als default

// justifyContent legt Anordnung der Elements auf der Hauptachse fest
// justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
// justifyContent hat 'flex-start' als Default

// alignItems: Anordnung auf der Querachse (senkrecht zur Hauptachsel)
// alignItems: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
// alignItems hat 'stretch' als Default