import * as React from "react";

// Importações
import { styles, Container } from "./styles";
import { ActivityIndicator, Text, View } from "react-native";
import { colors } from "../../assets/global/color";
  
export function LoadingScreen () {   
    return (
        <View style={styles.container}>
            <ActivityIndicator size={60} color={colors.cor2} style={{}} />
            <Text style={{fontSize:18, color:colors.cor2}}>Configurando App</Text>
            <Container>
                <Text style={{fontSize:18, color:colors.cor2}}>Aguarde </Text>
            </Container>
        </View>
    );
}