import React from 'react';
import { FlatList, SafeAreaView, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {styles} from './styles'
import {Toolbar} from '../../assets/components/Toolbar'
import { Card } from 'react-native-elements';

export function HistoricoScreen() {
  const [campeonatosModels, setCampeonatosModels] = React.useState([])
  const list = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Copa 2021',
      desc_foto: 'Possivel descrição ou fotinha',
    },
    {
      id: 'cd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Copa 2022',
      desc_foto: 'Possivel descrição ou fotinha',
    },
    {
      id: 'dd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Copa Pistão',
      desc_foto: 'Possivel descrição ou fotinha',
    },
    {
      id: 'ed7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Copa UEFA',
      desc_foto: 'Possivel descrição ou fotinha',
    },
  ];

  return (
    <View style={styles.container}>
      <Toolbar title="Copa" back></Toolbar>
      <View style={{ flex: 1}}>  
        <FlatList
            style={styles.flatList}
            data={list}
            keyExtractor={(m) => String(m.id)}
            renderItem={({item}) => (
                <>
                  {list.length > 0 &&                    
                    <Card containerStyle={{ marginTop: 15, marginBottom:10 }}>
                      <Card.Title>{item.title}</Card.Title>
                      <Card.Divider />
                      <TouchableHighlight 
                        style={styles.item} 
                        underlayColor='rgba(82,131,146,1)' 
                        // onPress={() => { navegacao.navigate('navegacao', {screen: 'copa',params: { dados: item },}); }}
                      >
                        <Text style={{color:'white', paddingLeft:10}}>{item.desc_foto}</Text>
                      </TouchableHighlight> 
                    </Card>
                  }
                </>
            )} 
        />
      </View>   
    </View>
  );
}