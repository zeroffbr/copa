import React from 'react';
import { SafeAreaView, Text,View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {  Feather, Ionicons } from '@expo/vector-icons';
import { Appbar, Button, DataTable } from 'react-native-paper';

//Importações
import {styles} from './style'
import { colors } from '../../assets/global/color';
import ButtonGeneric from '../../components/ButtonGeneric';
import Toolbar from '../../components/Toolbar';
import { Card } from 'react-native-paper';
import { Avatar, Header } from '@rneui/base';
import { zeroEsquerda } from '../../assets/global/function';

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


  //FlatList jogos
  const [dataJogos, setDataJogos] = React.useState([
    {"jogo_id": 1, "campeonato_id": 1, "time_casa_id": 1, "time_visitante_id": 2, "gols_casa": 3, "gols_visitante": 0, "time_casa_escudo": require('../../assets/imgs/alhilal.png'), "time_visitante_escudo": null, "time_casa_descricao": "Al Hilal", "time_visitante_descricao": "Vasco"},
    {"jogo_id": 2, "campeonato_id": 1, "time_casa_id": 1, "time_visitante_id": 3, "gols_casa": 2, "gols_visitante": 1, "time_casa_escudo": require('../../assets/imgs/alhilal.png'), "time_visitante_escudo": null, "time_casa_descricao": "Al Hilal", "time_visitante_descricao": "Botafogo"},
    {"jogo_id": 3, "campeonato_id": 1, "time_casa_id": 1, "time_visitante_id": 4, "gols_casa": 1, "gols_visitante": 2, "time_casa_escudo": require('../../assets/imgs/alhilal.png'), "time_visitante_escudo": null, "time_casa_descricao": "Al Hilal", "time_visitante_descricao": "Manchester City"},
    {"jogo_id": 4, "campeonato_id": 1, "time_casa_id": 2, "time_visitante_id": 3, "gols_casa": 0, "gols_visitante": 2, "time_casa_escudo": null, "time_visitante_escudo": null, "time_casa_descricao": "Vasco", "time_visitante_descricao": "Botafogo"},
    {"jogo_id": 5, "campeonato_id": 1, "time_casa_id": 2, "time_visitante_id": 4, "gols_casa": 2, "gols_visitante": 1, "time_casa_escudo": null, "time_visitante_escudo": null, "time_casa_descricao": "Vasco", "time_visitante_descricao": "Manchester City"},
    {"jogo_id": 6, "campeonato_id": 1, "time_casa_id": 3, "time_visitante_id": 4, "gols_casa": 3, "gols_visitante": 3, "time_casa_escudo":null, "time_visitante_escudo": null, "time_casa_descricao": "Botafogo", "time_visitante_descricao": "Manchester City"}
])
  const keyExtractorJogos    = React.useCallback((item) => String(`${item.jogo_id}`),[]);   
  const renderItemJogos      = React.useCallback(
    ({item}) => 
      <>
        {data.length > 0 &&   
          // <Text style={{ fontFamily: 'FIFA',  color:'white', textAlign:'center', fontSize:18, marginLeft:3, flexWrap:'wrap'}} >aqui</Text>
          <Card mode='outlined' style={{marginHorizontal:10, marginVertical:5, backgroundColor:colors.cor6, borderColor:colors.cor1}}>
            <Card.Title title={`Jogo ${zeroEsquerda(item.jogo_id, 2)}`} titleStyle={{textAlign:'center', fontFamily: 'FIFA', fontSize:20, color:'white'}} />
            <Card.Content style={{flexDirection:'row', justifyContent:'center', marginTop:-10}} >
              <ComponenteEscudo descricao={item.time_casa_descricao} escudo={item.time_casa_escudo} />
              <View style={{justifyContent:'center', marginHorizontal:25, flex:0.4}}>
                <Text style={{ fontFamily: 'FIFA', color:'white', textAlign:'center', fontSize:25, marginLeft:3, flexWrap:'wrap'}} > {item.gols_casa} X {item.gols_visitante} </Text>
              </View>
              <ComponenteEscudo descricao={item.time_visitante_descricao} escudo={item.time_visitante_escudo} />
            </Card.Content>
          </Card>
        }
      </>
  );

  const ComponenteEscudo = ({descricao, escudo = null})=>{
    const xImage = (escudo === null) ? require('../../assets/imgs/escudo_vazio.png') : escudo //{uri:`data:image/png;base64,${item.imagem}`};
    return (
      <View style={{alignItems:'center', flex:0.30}}>
          <Avatar
            size={50}
            rounded
            source={xImage}
          />
          <Text style={{ fontFamily: 'FIFA',  color:'white', textAlign:'center', fontSize:18, marginLeft:3, flexWrap:'wrap'}} >{String(descricao).length > 18 ? String(descricao).substring(0, 18) + '\n' + String(descricao).substring(18) : descricao}</Text>
        </View>
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
      <View style={{ flex: 1 }}>
        <View style={{felx:1, flexDirection:'row', backgroundColor:colors.cor1, justifyContent:'space-between', alignItems:'center', height:60}}>
          <Appbar.Action icon="arrow-left" color='white' disabled onPress={() => {}} /> 
          <Appbar.Content titleStyle={styles.text} title={`Grupo ${grupoAtual}`} />
          <Appbar.Action icon="arrow-right" color='white' onPress={() => {}} />
        </View>
        
        {/* Componente da Tabela Fase de Grupo */}
        <View style={{ flexDirection: 'row', marginHorizontal:10 }}>
          <View style={{ width: 200 }}>
            <DataTable>
              <DataTable.Header style={{ fontSize: 18 }}>
                <DataTable.Title textStyle={[styles.dataTableText,{width:15}]}>#</DataTable.Title>
                <DataTable.Title style={{ width: 200 }} textStyle={styles.dataTableText}>Clube</DataTable.Title>
              </DataTable.Header>
              <FlatList
                data={data}
                keyExtractor={keyExtractor}
                renderItem={({ item }) => (
                  <DataTable.Row>
                    <DataTable.Cell style={{flex: 0.7}} numeric textStyle={[styles.dataTableText, {width:30}]} >111{item.posicao}</DataTable.Cell>
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
        
        <Text style={[styles.text,{ marginVertical:5, fontSize:30}]}>Jogos do Grupo</Text>    
        
        <FlatList
          data={dataJogos}
          keyExtractor={keyExtractorJogos}
          renderItem={renderItemJogos}
          showsVerticalScrollIndicator={false}
          // contentContainerStyle={{ alignItems: 'center' }}  
          windowSize={50} 
        />

      </View>
      </SafeAreaView>
    </>
  );
}

