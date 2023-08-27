import React from 'react';
import { SafeAreaView, Text,View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {  Feather, Ionicons } from '@expo/vector-icons';
import { Appbar, DataTable } from 'react-native-paper';

//Importações
import {styles} from './style'
import { colors } from '../../assets/global/color';
import ButtonGeneric from '../../components/ButtonGeneric';
import Toolbar from '../../components/Toolbar';
import { Card } from 'react-native-paper';
import { Avatar, Header } from '@rneui/base';

export function FaseGrupoScreen(props) {  
  const { params }  = props.route; 
  const navegacao   = useNavigation();

  const [grupoAtual, setGrupoAtual] = React.useState('')

  //FlatList
  const [data, setData] = React.useState([
    { posicao:1, grupo_id:1, time_id:1, time_descricao:'Al Hilal', time_escudo: require('../../assets/imgs/alhilal.png'), pontos:0, partidas_jogadas:0, vitoria:0, empate:0, derrota:0, gols_marcados:0, gols_sofridos:0, gols_saldo:0},
    { posicao:2, grupo_id:1, time_id:1, time_descricao:'Vasco', time_escudo: null,  pontos:0, partidas_jogadas:0, vitoria:0, empate:0, derrota:0, gols_marcados:0, gols_sofridos:0, gols_saldo:0},
    { posicao:3, grupo_id:1, time_id:1, time_descricao:'Botafogo', time_escudo: null,  pontos:0, partidas_jogadas:0, vitoria:0, empate:0, derrota:0, gols_marcados:0, gols_sofridos:0, gols_saldo:0},
    { posicao:4, grupo_id:1, time_id:1, time_descricao:'Manchester City', time_escudo: null,  pontos:0, partidas_jogadas:0, vitoria:0, empate:0, derrota:0, gols_marcados:0, gols_sofridos:0, gols_saldo:0},
  ])

  const ComponenteClube = ({data})=>{
    const xImage = (data.time_escudo === null) ? require('../../assets/imgs/escudo_vazio.png') : data.time_escudo //{uri:`data:image/png;base64,${item.imagem}`};
    return (
      <View style={{flexDirection:'row', alignItems:'center'}}>
          <Avatar
            size={30}
            rounded
            source={xImage}
          />
          <Text style={{ fontFamily: 'FIFA',  color:'white', textAlign:'center', fontSize:18, marginLeft:3, flexWrap:'wrap'}} >{String(data.time_descricao).length > 18 ? String(data.time_descricao).substring(0, 18) + '\n' + String(data.time_descricao).substring(18) : data.time_descricao}</Text>
        </View>
    )
  }

  const keyExtractor    = React.useCallback((item) => String(`${item.posicao}`),[]);  
  const renderItem      = React.useCallback(
    ({item}) => 
    <DataTable.Row>
      {/* <DataTable.Cell style={{flex: 4}} textStyle={styles.dataTableTextFirst} >
        <ComponenteClube data={item}/>
      </DataTable.Cell> */}
      <DataTable.Cell style={{flex: 2}} numeric textStyle={styles.dataTableText} >{item.pontos}</DataTable.Cell>
      <DataTable.Cell style={{flex: 2}} numeric textStyle={styles.dataTableText} >{item.partidas_jogadas}</DataTable.Cell>
      <DataTable.Cell style={{flex: 2}} numeric textStyle={styles.dataTableText} >{item.vitoria}</DataTable.Cell>
      <DataTable.Cell style={{flex: 2}} numeric textStyle={styles.dataTableText} >{item.empate}</DataTable.Cell>
      <DataTable.Cell style={{flex: 2}} numeric textStyle={styles.dataTableText} >{item.derrota}</DataTable.Cell>
      <DataTable.Cell style={{flex: 2}} numeric textStyle={styles.dataTableText} >{item.gols_marcados}</DataTable.Cell>
      <DataTable.Cell style={{flex: 2}} numeric textStyle={styles.dataTableText} >{item.gols_saldo}</DataTable.Cell>
      <DataTable.Cell style={{flex: 2}} numeric textStyle={styles.dataTableText} >{item.gols_sofridos}</DataTable.Cell>
    </DataTable.Row>
  );
  
  function ComponentDataTableHeader(){
    return (
      <DataTable.Header style={{ fontSize: 18 }}>
        <DataTable.Title style={{flex: 2}} numeric textStyle={styles.dataTableText} >Pts</DataTable.Title>
        <DataTable.Title style={{flex: 2}} numeric textStyle={styles.dataTableText} >PJ</DataTable.Title>
        <DataTable.Title style={{flex: 2}} numeric textStyle={styles.dataTableText} >VIT</DataTable.Title>
        <DataTable.Title style={{flex: 2}} numeric textStyle={styles.dataTableText} >E</DataTable.Title>
        <DataTable.Title style={{flex: 2}} numeric textStyle={styles.dataTableText} >DER</DataTable.Title>
        <DataTable.Title style={{flex: 2}} numeric textStyle={styles.dataTableText} >GM</DataTable.Title>
        <DataTable.Title style={{flex: 2}} numeric textStyle={styles.dataTableText} >GC</DataTable.Title>
        <DataTable.Title style={{flex: 2}} numeric textStyle={styles.dataTableText} >SG</DataTable.Title>
      </DataTable.Header>
    )
  }


  React.useEffect(() => {
    setGrupoAtual('A')
  }, []);

  return (
    <>
      <Toolbar
        text={'Fase de Grupo'}
        textStyle={{color:colors.cor2}}
        centerContainerStyle={{}}
        leftComponent={<TouchableOpacity style={{margin:-5, }} onPress={() => {navegacao.goBack()}}><Ionicons name="chevron-back-circle-outline" size={32} color={'white'}/></TouchableOpacity>}
      />
      <SafeAreaView style={[styles.container, {paddingTop:10}]}>  

      <View style={{felx:1, flexDirection:'row', backgroundColor:colors.cor1, justifyContent:'space-between', alignItems:'center', height:60}}>
        <Appbar.Action icon="arrow-left" color='white' disabled onPress={() => {}} /> 
        <Appbar.Content titleStyle={styles.text} title={`Grupo ${grupoAtual}`} />
        <Appbar.Action icon="arrow-right" color='white' onPress={() => {}} />
      </View>

      {/* Componente da Tabela Fase de Grupo */}
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: 200 }}>
          
          <DataTable>
            <DataTable.Header style={{ fontSize: 18 }}>
              <DataTable.Title textStyle={[styles.dataTableText,{width:20}]}>#</DataTable.Title>
              <DataTable.Title style={{ width: 200 }} textStyle={styles.dataTableText}>Clube</DataTable.Title>
            </DataTable.Header>
            <FlatList
              data={data}
              keyExtractor={keyExtractor}
              renderItem={({ item }) => (
                <DataTable.Row>
                  <DataTable.Cell style={{flex: 1}} numeric textStyle={styles.dataTableText} >{item.posicao}</DataTable.Cell>
                  <DataTable.Cell style={{flex: 5}} textStyle={styles.dataTableTextFirst} >
                    <ComponenteClube data={item}/>
                  </DataTable.Cell>
                </DataTable.Row>
              )}
              showsVerticalScrollIndicator={false}
            />
          </DataTable>
        </View>
        
        {/* Parte com rolagem horizontal para as demais colunas */}
        <ScrollView horizontal>
          <DataTable>
            <ComponentDataTableHeader/>
            <FlatList
              data={data}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          </DataTable>
        </ScrollView>

      </View>
      
      <Text style={[styles.text,{ marginTop:5, fontSize:30}]}>Jogos</Text>    

      </SafeAreaView>
    </>
  );
}

