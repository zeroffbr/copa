import React from 'react';
import { SafeAreaView, Text,View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {  Feather, Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
import { Avatar } from '@rneui/base';

//Importações
import {styles} from './style'
import { colors } from '../../assets/global/color';
import ButtonGeneric from '../../components/ButtonGeneric';
import Toolbar from '../../components/Toolbar';

export function EliminatoriaScreen(props) {  
  const { params }     = props.route; 
  const navegacao                     = useNavigation() ;

  const tournamentData = [
    {
      phase_id:1,
      name: "Quartas de Final",
      matches: [
        { player1: "Mancherter City", player2: "Jogador B" },
        { player1: "Jogador C", player2: "Jogador D" },
        { player1: "Jogador E", player2: "Jogador F" },
        { player1: "Jogador G", player2: "Al Hilal " },
      ],
    },
    {
      phase_id:2,
      name: "Semifinal",
      matches: [
        { player1: "Vencedor QF1", player2: "Vencedor QF2" },
        { player1: "Vencedor QF3", player2: "Vencedor QF4" },
      ],
    },
    {
      phase_id:3,
      name: "Final",
      matches: [
        { player1: "Vencedor SF1", player2: "Vencedor SF2" },
      ],
    },
    {
      phase_id:4,
      name: "Disputa pelo 3º Lugar",
      matches: [
        { player1: "A Confirmar", player2: "A Confirmar" },
      ],
    },
  ];

  const ComponenteEscudo = ({descricao, escudo = null})=>{
    const xImage = (escudo === null) ? require('../../assets/imgs/escudo_vazio.png') : escudo //{uri:`data:image/png;base64,${item.imagem}`};
    return (
      // <View style={{alignItems:'center', flex:0.30}}>
        <Avatar
          size={30}
          rounded
          source={xImage}
        />
      //   <Text style={{ fontFamily: 'FIFA',  color:'white', textAlign:'center', fontSize:18, marginLeft:3, flexWrap:'wrap'}} >{String(descricao).length > 18 ? String(descricao).substring(0, 18) + '\n' + String(descricao).substring(18) : descricao}</Text>
      // </View>
    )
  } 

  function Match({phase, style}){
    return (
      <View style={[styles2.bracket, style]}>
        <Text style={styles2.phaseName}>{phase.name}</Text>
        <View style={[styles2.matchesContainer,{justifyContent:'center', flex:1}]}>
          <View style={styles2.matchesContainer}>
            {phase.matches.map((match, index) => (
              <View key={index} style={styles2.match}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <View> 
                    <View style={{flexDirection:'row', marginVertical:2}}>
                      <ComponenteEscudo/>
                      <Text style={[styles2.phaseName, {fontSize:15}]}>{match.player1}</Text>
                    </View>
                    
                    <View style={{flexDirection:'row', marginVertical:2}}>
                      <ComponenteEscudo/>
                      <Text style={[styles2.phaseName, {fontSize:15}]}>{match.player2}</Text>
                    </View>
                  </View>
                  <View> 
                    <View style={{flexDirection:'row', marginVertical:2}}>
                      <Text style={[styles2.phaseName, {fontSize:15}]}>1</Text>
                    </View>
                    
                    <View style={{flexDirection:'row', marginVertical:2}}>
                      <Text style={[styles2.phaseName, {fontSize:15}]}>0</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    )
  }
  const Bracket = ({phase, style, thirdPlace=false}) => {
    return (
      <>
        {(!String(phase.name).includes('3º') && !thirdPlace) &&(
          <Match phase={phase} style={style}/>
        )}
      </>
    );
  };

  const keyExtractor    = React.useCallback((item) => String(`${item.phase_id}`),[]);  
  const renderItem      = React.useCallback(({item}) => (
        <Bracket phase={item} />
  ));

  return (
    <>
      <Toolbar
        text={'Eliminatória'}
        textStyle={{color:colors.cor2}}
        centerContainerStyle={{}}
        leftComponent={<TouchableOpacity style={{margin:-5, }} onPress={() => {navegacao.goBack()}}><Ionicons name="chevron-back-circle-outline" size={32} color={'white'}/></TouchableOpacity>}
      />
      <SafeAreaView style={[styles.container, {paddingTop:10}]}>  
        
        
      
    <View style={styles2.container}>
      {/* <ScrollView 
        contentContainerStyle={styles2.contentContainer} 
        // horizontal 
        showsHorizontalScrollIndicator={false} 
        showsVerticalScrollIndicator={false}
      >
        <Bracket tournament={tournamentData.phases} />
      </ScrollView> */}
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} >
        <FlatList
          data={tournamentData}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={[styles2.contentContainer]}  
          windowSize={50} 
        />
        
        {/* Renderiza a fase "Disputa pelo 3º Lugar" após todas as outras fases */}
        {tournamentData.filter(phase => phase.phase_id === 4).map(phase => (
          <Match style={{marginTop:-20}} key={phase.phase_id} phase={phase} />
        ))}
      </ScrollView>
    </View>

      </SafeAreaView>
    </>
  );
}

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: 40,
  },
  contentContainer: {
    flexDirection: "row",
  },
  
  bracket: {
    marginVertical: 20,
    alignItems: "center",
    width:250,
    marginHorizontal:10
  },
  phaseName: {
    fontSize: 18,
    fontWeight: "bold",
    // marginBottom: 10,
    marginVertical:5,
    fontFamily: 'FIFA',
    color:'white',
  },
  matchesContainer: {
    flexDirection: "column", // Visualização horizontal
    justifyContent: "space-between",
    width: "100%",
    margin:10
  },
  match: {
    width: "90%", // Distribuir espaço para os jogos
    padding: 15,
    borderColor: colors.cor1,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius:20,
  },
});

