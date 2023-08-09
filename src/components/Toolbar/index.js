import React from 'react';
import { colors } from '../../assets/global/color';
import { Header } from '@rneui/base';

export default function Toolbar({
    backgroundColor=colors.cor5,
    containerStyle,
    centerContainerStyle,
    leftComponent,
    leftContainerStyle,
    rightComponent,
    rightContainerStyle,
    placement = 'center',
    text,
    textStyle,
}) {
  return (
    <Header
        barStyle='dark-content'
        backgroundColor={backgroundColor}
        containerStyle={[{borderBottomColor:'transparent'}, containerStyle]}   
        centerComponent={{
            text: text,
            style: [{ color: "#fff", fontFamily: 'FIFA', fontSize:28, textAlign:'center', width:'100%', flex:1}, textStyle]
        }}
        centerContainerStyle={centerContainerStyle}
        leftComponent={leftComponent}
        leftContainerStyle={leftContainerStyle}
        rightComponent={rightComponent}
        rightContainerStyle={rightContainerStyle}
        placement={placement}
    />
  );
}
