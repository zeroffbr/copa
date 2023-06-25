import React, { useCallback } from 'react';
import { Dimensions, FlatList, SafeAreaView, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import { IconButton, MD3Colors } from 'react-native-paper';

import {styles} from './style'
import { colors } from '../../assets/global/color';
import ButtonGeneric from '../../components/ButtonGeneric';

export function CompeticaoScreen() {  
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
      <ButtonGeneric 
        title={'Copa 2022'}
        subtitle={'Resultado da competição'}
        onPress={()=>{ navegacao.navigate('competicao_info',{title:'Copa 2022', subtitle:'Resultado da competição'}) }} 
      />
      <ButtonGeneric 
        title={'spinoff "é mais de 8000"'}
        subtitle={'Resultado da competição'}
        onPress={()=>{ navegacao.navigate('competicao_info',{title:'spinoff "é mais de 8000"', subtitle:'Resultado da competição'}) }} 
      />
    </SafeAreaView>
  );
}

