import React from 'react';
import { SafeAreaView} from 'react-native';
import { colors } from '../../assets/global/color';
import { useAutenticacaoContext } from '../../hooks/autenticacao';
import LocalStorageController from '../../class/LocalStorageController';
import ButtonGeneric from '../../components/ButtonGeneric';
import { styles } from './style';

export default function HomeScreen() {
  const { setUsuario, setImagemUsuario } = useAutenticacaoContext();
  return (
    <SafeAreaView style={styles.container}>
        <ButtonGeneric 
          title={'Novo Campeonato'}
          subtitle={'Crie seu próprio campeonato'}
          textStyle={{
            color:colors.cor1
          }}
          onPress={()=>{
            console.log('aqui')
          }} 
        />
        <ButtonGeneric 
          title={'Histórico'}
          subtitle={'Resultado de competições anteriores'}
          // onPress={() => { navegacao.navigate('historico'); }}
          // onPress={() => { navegacao.navigate('competicao'); }}
        />
        <ButtonGeneric 
          title={'Copa 2022'}
          subtitle={'Resultado da competição'}
          // onPress={() => { navegacao.navigate('competicao_info',{'competicao_id':1}); }}
        />
        <ButtonGeneric 
          title={'spinoff "é mais de 8000"'}
          subtitle={'Resultado da competição'}
          onPress={()=>{
            console.log('aqui')
          }} 
        />
        <ButtonGeneric title={'spinoff "é mais de 8000"'} subtitle={'Resultado da competição'} />
        <ButtonGeneric title={'spinoff "é mais de 8000"'} subtitle={'Resultado da competição'} />
    </SafeAreaView>
  );
}
