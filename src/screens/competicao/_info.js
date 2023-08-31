import React from 'react';
import { SafeAreaView, Text,View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {  Feather, Ionicons } from '@expo/vector-icons';

//Importações
import {styles} from './style'
import { colors } from '../../assets/global/color';
import ButtonGeneric from '../../components/ButtonGeneric';
import Toolbar from '../../components/Toolbar';
import { Card } from 'react-native-paper';

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
    <>
      <Toolbar
        text={'Infomações'}
        textStyle={{color:colors.cor2}}
        centerContainerStyle={{}}
        leftComponent={<TouchableOpacity style={{margin:-5, }} onPress={() => {navegacao.goBack()}}><Ionicons name="chevron-back-circle-outline" size={32} color={'white'}/></TouchableOpacity>}
      />
      <SafeAreaView style={[styles.container, {paddingTop:10}]}>  
      
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} >
      <Card style={{marginHorizontal:20, backgroundColor:colors.cor1}}>
        <Card.Title 
          title={params.title}
          titleStyle={{
            fontFamily:'FIFA',
            fontSize:24,
            textAlign:'center'
          }}           
        />
        <Card.Content>
          <Text variant="bodyMedium" style={{fontFamily:'FIFA', fontSize:18,}}>{params.subtitle}</Text>
        </Card.Content>
      </Card>      
        <ButtonGeneric 
          title={'Sortear Times'}
          subtitle={'Sortear times para os participantes'}
          textStyle={{ color:colors.cor1 }}
          buttonStyle={{marginVertical:10}}
          onPress={()=>{ navegacao.navigate('sorteio') }} 
        />

        <ButtonGeneric 
          title={'Tabela da Competição'}
          subtitle={'lorem ipsum'}
          buttonStyle={{marginVertical:10}}
          onPress={()=>{ navegacao.navigate('fase_grupo') }} 
        />
        
        <ButtonGeneric 
          title={'Eliminatórias'}
          subtitle={'lorem ipsum'}
          buttonStyle={{marginVertical:10}}
          onPress={()=>{ navegacao.navigate('eliminatoria') }} 
        />
        
        <ButtonGeneric 
          title={'Jogos'}
          subtitle={'lorem ipsum'}
          buttonStyle={{marginVertical:10}}
          onPress={()=>{ navegacao.navigate('jogos') }} 
        />
        
        <ButtonGeneric 
          title={'Titulos e Troféus'}
          subtitle={'lorem ipsum'}
          buttonStyle={{marginVertical:10}}
          onPress={()=>{ navegacao.navigate('premiacoes') }} 
        />
      </ScrollView>  
      </SafeAreaView>
    </>
  );
}

