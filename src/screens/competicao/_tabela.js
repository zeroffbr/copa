import React from 'react';
import { SafeAreaView, Text,View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {  Feather, Ionicons } from '@expo/vector-icons';

//Importações
import {styles} from './style'
import { colors } from '../../assets/global/color';
import ButtonGeneric from '../../components/ButtonGeneric';
import Toolbar from '../../components/Toolbar';
import { Card } from 'react-native-paper';

export function FaseGrupoScreen(props) {  
  const { params }     = props.route; 
  const navegacao                     = useNavigation() ;
  return (
    <>
      <Toolbar
        text={'Fase de Grupo'}
        textStyle={{color:colors.cor2}}
        centerContainerStyle={{}}
        leftComponent={<TouchableOpacity style={{margin:-5, }} onPress={() => {navegacao.goBack()}}><Ionicons name="chevron-back-circle-outline" size={32} color={'white'}/></TouchableOpacity>}
      />
      <SafeAreaView style={[styles.container, {paddingTop:10}]}>  

      </SafeAreaView>
    </>
  );
}

