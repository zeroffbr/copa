import { StyleSheet } from 'react-native';
import { colors } from '../../assets/global/color';

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.corBackground, 
        paddingBottom:10
    },
    button:{
        justifyContent:'center',
        marginTop:10,
        marginBottom:60,
        marginLeft:25,
        marginRight:25,
        backgroundColor: colors.cor_button,
    },
    containerInput:{

        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInputField:{
        width: '75%',
        flexDirection: 'column',
        marginTop: '5%',
    },
    input:{
        
    },
    logo:{
        alignItems: 'center',
        flex:1,   
        // marginTop: 10,
    },
    item: {
        flex: 1,
        width:250, 
        height:250,
    },
    error:{
        color:"red", 
        fontSize: 11, 
        textAlign: 'center', 
        marginBottom: 5, 
        marginTop: -15 
    },
    touchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        // top: 30,
        backgroundColor : '#00485F',
        borderRadius : 100
      },
});