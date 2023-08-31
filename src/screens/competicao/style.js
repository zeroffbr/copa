import { StyleSheet } from 'react-native';
import { colors } from '../../assets/global/color';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.cor6,
        paddingTop:50,
        paddingBottom:92
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
    dataTableTextFirst:{
        fontFamily: 'FIFA',
        fontSize: 18, 
        color:'white',
        width: 200,
    }, 

    dataTableText:{
        fontFamily: 'FIFA',
        fontSize: 18, 
        color:'white',
        width: 50,
        textAlign:'center',
    },

    text:{
        fontFamily: 'FIFA',
        fontSize: 25, 
        color:'white',
        textAlign:'center',
    }
});