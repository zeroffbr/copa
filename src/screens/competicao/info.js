import React from 'react';
import { SafeAreaView, Text,View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {styles} from './style'
import { colors } from '../../assets/global/color';

export function CompeticaoInfoScreen(props) {  
  const { params }     = props.route; 
  const navegacao                     = useNavigation() ;
  const [copaModels, setCopaModels] = React.useState([])
  const list = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Copa 2022',
      desc_foto: 'Possivel descrição ou fotinha',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems:'center'}}>
        <Text style={{color:colors.cor4}}>Titutlo: {params.title}</Text>
        <Text style={{color:colors.cor4}}>Subtitulo: {params.subtitle}</Text>
      </View>
    </SafeAreaView>
  );
}

