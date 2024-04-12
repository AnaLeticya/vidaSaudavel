import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   boxTitle:{
    alignItems: "center", // centraliza os intens horizontalmente 
    justifyContent: "center", // centraliza verticalmente
    padding: 10, 
   },
   textTitle:{
    color: "#FF0043", // cor do texto
    fontSize: 24, // tamanho da fonte
    fontWeight: "bold",
   }
});

export default styles // exporta o styles para que outros componentes usem esse estilo