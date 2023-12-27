import React, { useCallback } from 'react';
import { Dimensions, FlatList, SafeAreaView, ScrollView, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import { IconButton, MD3Colors } from 'react-native-paper';

import {styles} from './style'
import { colors } from '../../assets/global/color';
import ButtonGeneric from '../../components/ButtonGeneric';
import TConnectionFB from '../../class/connection/TFirebaseConnection';

export function CompeticaoScreen() {  
  const navegacao       = useNavigation() ;
  const [data, setData] = React.useState([])
  const [descricao, setDescricao]   = React.useState('')   
  const [loading, setLoading]       = React.useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  
  const conexaoFB = new TConnectionFB();

  React.useEffect(()=>{
    // navegacao.addListener('focus', () => {
      // setDescricao('')
      loadAPI('', 1, true)
    // });
  }, [])
  
  async function loadAPI(description='descricao', pag='page', clear=false){
    try {
        if (loading) return;
        setLoading(true)    
        
        // if (await conexaoDB.listTables('produto')){
          const response = await conexaoFB.open('campeonato');
          if (response && response.hasOwnProperty('docs')){
            if (!clear){
              setData([...data, ...response.docs]);
            }else{
              setData(response.docs);
            }
            // setPage(response.page + 1)
            // setEndPage(response.pages)
            // setTotal(response.total) 
          }else{
            // mensagem("Força de Vendas",'Não foi possivel realizar a pesquisa!')
          }
        // } else {
        //   setData([])
        //   conexaoDB.close()
        //   mensagem("Força de Vendas","Sincronização não localizada!")
        //   navegacao.navigate('Sincronizar')
        //   return
        // }
        // conexaoDB.close()
        setLoading(false)
    } catch (error) {
      // mensagem("Força de Vendas",'Não foi possivel realizar a pesquisa!')
    }
  }

  const keyExtractor  = React.useCallback((item) => String(item.id),[]);
  const renderItem    = React.useCallback(
    ({item}) => 
      <>
        {data.length > 0 &&
          <ButtonGeneric 
            title={item.descricao}
            subtitle={item.observacao}
            onPress={()=>{ navegacao.navigate('competicao_info',{title:item.descricao, subtitle:item.observacao}) }} 
          />                  
          // <Product 
          //   data={item} 
          //   onPress={() => {navegacao.navigate('ProdutoItem',{'produto_id':item.produto_id})}}
          // />
        }
      </>
  );  
  const refresh = async (dados) => {  
    setData([])
    loadAPI(descricao,1, true)
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} > */}
        <FlatList 
          data={data}
          // estimatedItemSize={111}
          // keyExtractor={keyExtractor}
          // ListFooterComponent={<FooterList load={loading} />}
          // onEndReached={()=>{ loadAPI(descricao,'page') }}
          // onEndReachedThreshold={0.5}
          onRefresh={refresh}
          refreshing={refreshing}
          renderItem={renderItem}
          // showsVerticalScrollIndicator={false}
          // windowSize={50}
        />
        {/* <ButtonGeneric 
          title={'Copa 2022'}
          subtitle={'Resultado da competição'}
          onPress={()=>{ navegacao.navigate('competicao_info',{title:'Copa 2022', subtitle:'Resultado da competição'}) }} 
        />
        <ButtonGeneric 
          title={'spinoff "é mais de 8000"'}
          subtitle={'Resultado da competição'}
          onPress={()=>{ navegacao.navigate('competicao_info',{title:'spinoff "é mais de 8000"', subtitle:'Resultado da competição'}) }} 
        /> */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

