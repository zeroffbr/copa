import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { colors } from '../../assets/global/color';
import { TextInput } from 'react-native-paper';

export default function InputField({
  activeOpacity = 1,
  autoCapitalize,
  editable,
  disabled,
  fieldButtonFunction,
  fieldButtonLabel,
  iconLeft,
  iconRight,
  secureTextEntry,
  keyboardType,
  label,
  onChance,
  onPress,
  value,
  stylePersonalizado={},
  multiline=false
}) {
  return (
    <TouchableOpacity activeOpacity={activeOpacity} onPress={onPress}>
    <View
      style={[{
        flexDirection: 'row',
        marginBottom: 10,
        marginLeft:25,
        marginRight:25,
        alignItems:'center'
      },stylePersonalizado]}
      onPressIn={onPress}
    >      
      <TextInput
        left={iconLeft&&<TextInput.Icon disabled icon={() => iconLeft}/>}
        right={iconRight&&<TextInput.Icon disabled icon={() => iconRight}/>}
        editable={editable}
        disabled={disabled}
        autoCapitalize={autoCapitalize}
        placeholder={label}
        keyboardType={keyboardType}
        style={{flex: 1, paddingVertical: 0, backgroundColor:colors.cor5, borderRadius:10, borderTopStartRadius:10, borderTopEndRadius:10}}
        contentStyle={{fontFamily: 'FIFA'}}
        activeUnderlineColor={colors.cor2}
        placeholderTextColor={colors.cor4}
        textColor={colors.cor4}
        secureTextEntry={secureTextEntry}
        multiline={multiline}
        onChangeText={onChance}
        value={value}
      />
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style={{color: colors.cor4, fontWeight: '700', fontFamily: 'FIFA'}}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
      </TouchableOpacity>
  );
}