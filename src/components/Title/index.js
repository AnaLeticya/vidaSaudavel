// bloco de exportações 
import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Title(){
    return(
        // titulo
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>App - Vida Saudável</Text>
        </View>
    );
}