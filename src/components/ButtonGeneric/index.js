import { Text, TouchableOpacity } from 'react-native';
import { colors } from '../../assets/global/color';

export default function ButtonGeneric({
    title = '',
    subtitle = '',
    backgroundColor = colors.cor5,
    buttonStyle,
    textStyle,
    textSubtitleStyle,
    onPress,
}) {
    return (
        <TouchableOpacity 
            activeOpacity={0.8}
            style={[{
                backgroundColor:backgroundColor,
                height:(subtitle !== '' ?80:50),
                width:'90%',
                justifyContent:'center',
                alignSelf:'center',
                margin: 3,
                borderRadius:15
            },buttonStyle]}
            onPress={onPress}
        >
            
            {subtitle !== '' ? (
                <>
                    <Text style={[{ flex:0.8,textAlign:'center', fontSize: 30, color:colors.cor2, fontFamily: 'FIFA', textAlignVertical:'center', marginBottom:-10 }, textStyle]}>{title}</Text>
                    <Text style={[{ flex:0.2,textAlign:'center', fontSize: 16, color:colors.cor4, fontFamily: 'FIFA', margin:8, marginTop:0, marginBottom:10 }, textSubtitleStyle]}>{subtitle}</Text>
                </>
            ):(
                <Text style={[{ textAlign:'center', fontSize: 18, color:colors.cor2, fontFamily: 'FIFA'},textStyle]}>{title}</Text>
            )}
        </TouchableOpacity>
    );
}