import { StyleSheet } from "react-native";
import ResultImc from ".";
//estilo do resulte imc
const styles = StyleSheet.create({
    resultImc: {
         flex: 1,
         marginTop: 15,
        marginTop: 60, 
        borderRadius: 50,
        alignItems: "center",
        width: "100%",
    },
    information: {
        fontSize: 18,
        color: "#FF0043",
        fontWeight: "bold",
    },
    numberImc:{
        fontSize: 48,
        color: "#FF0043",
        fontWeight: "bold",
    }
});

export default styles