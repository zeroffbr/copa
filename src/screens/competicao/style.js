import { StyleSheet } from 'react-native';
import { colors } from '../../assets/global/color';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.cor6,
        paddingTop:50,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    item:{
        // alignItems: 'center',
        backgroundColor: colors.cor_secundaria,
        borderRadius: 10,
        // flex: 1,
        height: 90,
        justifyContent: 'center',
        margin: 4,    
        textAlign:'center',  
        // width: '95%',
        
    },
});