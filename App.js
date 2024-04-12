// importa os componentes necessarios do react native
import { StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title';
import Form from './src/components/Form';
//Define a função 
export default function App() {
  return (
    <View style={styles.container}>
      <Title></Title>
      <Form/>
    </View>
  );
}
// Define os estilos 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80,
   
  },
});