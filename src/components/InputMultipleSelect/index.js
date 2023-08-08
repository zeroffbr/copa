import React from 'react';
import {View} from 'react-native';
import { colors } from '../../assets/global/color';
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'

export default function InputMultipleSelect({
  label,
  data,
  selectedValues,
  onMultiSelect,
  onTapClose,
  isMulti = false,
  fontStyle,
  containerStyle,
  styleView
}) {
  return (
    <View style={styleView}>
      <SelectBox
        label={label}
        multiOptionContainerStyle={{
          backgroundColor:colors.cor1,
          overflow: 'hidden'
        }} 
        options={data}
        selectedValues={selectedValues}
        onMultiSelect={onMultiSelect}
        onTapClose={onTapClose}
        isMulti={isMulti}
  
        labelStyle={{ ...containerStyle, ...fontStyle, borderTopLeftRadius:10, borderTopRightRadius:10 }}    
        multiListEmptyLabelStyle={fontStyle}
        multiOptionsLabelStyle={fontStyle} 
        containerStyle={containerStyle}
        inputFilterStyle={fontStyle}  
        optionsLabelStyle={fontStyle}  
        inputFilterContainerStyle={containerStyle} 
        optionContainerStyle={containerStyle}  
      />
    </View>
  );
}