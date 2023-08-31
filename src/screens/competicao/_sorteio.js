import React from 'react';
import { SafeAreaView, Text,View, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {  Feather, Ionicons } from '@expo/vector-icons';

//Importações
import {styles} from './style'
import { colors } from '../../assets/global/color';
import ButtonGeneric from '../../components/ButtonGeneric';
import Toolbar from '../../components/Toolbar';
import { Avatar } from '@rneui/base';
// import { Avatar, Card } from 'react-native-paper';

export function SorteioScreen(props) {  
  const { params }  = props.route; 
  const navegacao   = useNavigation() ;

  const ComponenteSorteio = ({data})=>{
    const xImage = (data.time === null) ? require('../../assets/imgs/BolaOceaunzLeague.png') : data.time //{uri:`data:image/png;base64,${item.imagem}`};
    return (
      <View style={{ marginHorizontal:10, marginVertical: 10 }}>
          <Avatar
            size={130}
            rounded
            source={xImage}
          />
          <Text style={{ fontFamily: 'FIFA',  color:'white', textAlign:'center', fontSize:18 }} >{data.participante === '' ? 'Participante' : data.participante}</Text>
        </View>
    )
  }

  //FlatList Sorteio
  const [data, setData] = React.useState([])
  const keyExtractor    = React.useCallback((item) => String(`${item.times_participante_id}`),[]);   
  const renderItem      = React.useCallback(
    ({item}) => 
      <>
        {data.length > 0 &&   
          // <Avatar.Image size={100} style={{backgroundColor:'red', }} source={require('../../assets/imgs/BolaOceaunzLeague.png')} />
          <ComponenteSorteio data={item}/>
        }
      </>
  );   
  

  React.useEffect(() => {
    setData([
      { times_participante_id:1, time_id:1, time: require('../../assets/imgs/alhilal.png'), participante_id:1, participante:'Adrian'},
      { times_participante_id:2, time_id:0, time: null, participante_id:0, participante:''},
      { times_participante_id:3, time_id:0, time: null, participante_id:0, participante:''},
      { times_participante_id:4, time_id:0, time: null, participante_id:0, participante:''}
    ])
  }, []);

  return (
    <>
      <Toolbar
        text={'Sorteio'}
        textStyle={{color:colors.cor2}}
        centerContainerStyle={{}}
        leftComponent={<TouchableOpacity style={{margin:-5, }} onPress={() => {navegacao.goBack()}}><Ionicons name="chevron-back-circle-outline" size={32} color={'white'}/></TouchableOpacity>}
      />
      <SafeAreaView style={[styles.container, {paddingTop:10}]}>  
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ alignItems: 'center' }}  
          windowSize={50} 
        />
      </SafeAreaView>
    </>
  );
}

