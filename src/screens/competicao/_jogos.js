import React from 'react';
import { SafeAreaView, Text,View, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {  Feather, Ionicons } from '@expo/vector-icons';
import { Card } from 'react-native-paper';

//Importações
import {styles} from './style'
import { colors } from '../../assets/global/color';
import ButtonGeneric from '../../components/ButtonGeneric';
import Toolbar from '../../components/Toolbar';
import { zeroEsquerda } from '../../assets/global/function';
import { Avatar } from '@rneui/base';

export function JogosScreen(props) {  
  const { params }     = props.route; 
  const navegacao = useNavigation() ;

  const matchesData = [
    {
      phase_id:1,
      name: "Fase de Grupo",
      round: [
        {
          round_id: 1, 
          matches: [
            { player1: "Mancherter City", player2: "Jogador B" },
            { player1: "Jogador C", player2: "Jogador D" },
          ],
        },
        {
          round_id: 2, 
          matches: [
            { player1: "Jogador E", player2: "Jogador F" },
            { player1: "Jogador G", player2: "Al Hilal " },
          ],
        }
      ]
    },
  ];

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

  function Matches({item}){
    return (
      <Card mode='outlined' style={{marginHorizontal:10, marginVertical:5, backgroundColor:colors.cor6, borderColor:colors.cor1}}>
        <Card.Title title={`Jogo ${zeroEsquerda(item.round_id, 2)}`} titleStyle={{textAlign:'center', fontFamily: 'FIFA', fontSize:20, color:'white'}} />
        <Card.Content style={{flexDirection:'row', justifyContent:'center', marginTop:-10}} >
          {/* <ComponenteEscudo descricao={item.time_casa_descricao} escudo={item.time_casa_escudo} />
          <View style={{justifyContent:'center', marginHorizontal:25, flex:0.4}}>
            <Text style={{ fontFamily: 'FIFA', color:'white', textAlign:'center', fontSize:25, marginLeft:3, flexWrap:'wrap'}} > {item.gols_casa} X {item.gols_visitante} </Text>
          </View>
          <ComponenteEscudo descricao={item.time_visitante_descricao} escudo={item.time_visitante_escudo} /> */}
        </Card.Content>
      </Card>
    )
  }
  const keyExtractor    = React.useCallback((item) => String(`${item.phase_id}`),[]);  
  const renderItem      = React.useCallback(({item}) => (
    <View style={{alignItems:'center'}}>
      <Text style={{
      fontSize:25,  
      fontWeight: "bold",
      // marginBottom: 10,
      marginVertical:5,
      fontFamily: 'FIFA',
      color:'white',
    }}>{item.name}</Text>
    {/* {item['round'] &&(
      <>
        {item.round.match.map((phase, index) => (
          <Text key={index}>aqui</Text>
        ))}
        <Text style={{color:'red'}}>aqui {matchesData[0].round.length}</Text>
      </>
    )} */}

      {/* // <Matches phase={item.round} /> */}


    </View>
  ));
  
  const [dataJogos, setDataJogos] = React.useState([
    {"jogo_id": 1, "campeonato_id": 1, "time_casa_id": 1, "time_visitante_id": 2, "gols_casa": 3, "gols_visitante": 0, "time_casa_escudo": require('../../assets/imgs/alhilal.png'), "time_visitante_escudo": null, "time_casa_descricao": "Al Hilal", "time_visitante_descricao": "Vasco"},
    {"jogo_id": 2, "campeonato_id": 1, "time_casa_id": 3, "time_visitante_id": 4, "gols_casa": 3, "gols_visitante": 3, "time_casa_escudo":null, "time_visitante_escudo": null, "time_casa_descricao": "Botafogo", "time_visitante_descricao": "Manchester City"},
    {"jogo_id": 3, "campeonato_id": 1, "time_casa_id": 1, "time_visitante_id": 3, "gols_casa": 2, "gols_visitante": 1, "time_casa_escudo": require('../../assets/imgs/alhilal.png'), "time_visitante_escudo": null, "time_casa_descricao": "Al Hilal", "time_visitante_descricao": "Botafogo"},
    {"jogo_id": 4, "campeonato_id": 1, "time_casa_id": 2, "time_visitante_id": 4, "gols_casa": 2, "gols_visitante": 1, "time_casa_escudo": null, "time_visitante_escudo": null, "time_casa_descricao": "Vasco", "time_visitante_descricao": "Manchester City"},
    {"jogo_id": 5, "campeonato_id": 1, "time_casa_id": 1, "time_visitante_id": 4, "gols_casa": 1, "gols_visitante": 2, "time_casa_escudo": require('../../assets/imgs/alhilal.png'), "time_visitante_escudo": null, "time_casa_descricao": "Al Hilal", "time_visitante_descricao": "Manchester City"},
    {"jogo_id": 6, "campeonato_id": 1, "time_casa_id": 2, "time_visitante_id": 3, "gols_casa": 0, "gols_visitante": 2, "time_casa_escudo": null, "time_visitante_escudo": null, "time_casa_descricao": "Vasco", "time_visitante_descricao": "Botafogo"},
])

  function ItemJogos({item}){
    return (
      <>
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
      </>
    );
  }  
      

  return (
    <>
      <Toolbar
        text={'Jogos'}
        textStyle={{color:colors.cor2}}
        centerContainerStyle={{}}
        leftComponent={<TouchableOpacity style={{margin:-5, }} onPress={() => {navegacao.goBack()}}><Ionicons name="chevron-back-circle-outline" size={32} color={'white'}/></TouchableOpacity>}
      />
      <SafeAreaView style={[styles.container, {paddingTop:10}]}>  
        {/* <FlatList
          data={matchesData}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          // contentContainerStyle={{ alignItems: 'center' }}  
          windowSize={50} 
        /> */}
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >
          <Text style={{ fontSize:20, fontWeight: "bold", marginVertical:5, fontFamily: 'FIFA', color:'white', alignSelf:'center'}}>Fase de Grupos - Rodada 1 de 3</Text>
          <ItemJogos item={dataJogos[0]} />
          <ItemJogos item={dataJogos[1]} />
          <Text style={{ fontSize:20, fontWeight: "bold", marginVertical:5, fontFamily: 'FIFA', color:'white', alignSelf:'center'}}>Fase de Grupos - Rodada 2 de 3</Text>
          <ItemJogos item={dataJogos[2]} />
          <ItemJogos item={dataJogos[3]} />
          <Text style={{ fontSize:20, fontWeight: "bold", marginVertical:5, fontFamily: 'FIFA', color:'white', alignSelf:'center'}}>Fase de Grupos - Rodada 3 de 3</Text>
          <ItemJogos item={dataJogos[4]} />
          <ItemJogos item={dataJogos[5]} />
          <Text style={{ fontSize:20, fontWeight: "bold", marginVertical:5, fontFamily: 'FIFA', color:'white', alignSelf:'center'}}>Quartas de Final</Text>
          <ItemJogos item={dataJogos[4]} />
          <ItemJogos item={dataJogos[5]} />
          <ItemJogos item={dataJogos[5]} />
          <ItemJogos item={dataJogos[5]} />
          <Text style={{ fontSize:20, fontWeight: "bold", marginVertical:5, fontFamily: 'FIFA', color:'white', alignSelf:'center'}}>Semifinal</Text>
          <ItemJogos item={dataJogos[4]} />
          <ItemJogos item={dataJogos[5]} />
          <Text style={{ fontSize:20, fontWeight: "bold", marginVertical:5, fontFamily: 'FIFA', color:'white', alignSelf:'center'}}>Terceiro Lugar</Text>
          <ItemJogos item={dataJogos[5]} />
          <Text style={{ fontSize:20, fontWeight: "bold", marginVertical:5, fontFamily: 'FIFA', color:'white', alignSelf:'center'}}>Final</Text>
          <ItemJogos item={dataJogos[4]} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

