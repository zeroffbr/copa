import {StyleSheet} from 'react-native'
import { colors } from '../../assets/global/color'

export const styles = StyleSheet.create({
    badge:{
        backgroundColor: colors.cor_secundaria,
        position:'absolute',
        left:15
    },
    touchableOpacity:{
        paddingLeft:10,

    }
})

export const HeaderComponent = {
    ButtonComponent:{
        color:"black", 
        size:32
    }
}