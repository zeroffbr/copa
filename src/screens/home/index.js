import React from 'react';
import { Alert, Modal, Pressable, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import { colors } from '../../assets/global/color';
import { useAutenticacaoContext } from '../../hooks/autenticacao';
import LocalStorageController from '../../class/LocalStorageController';
import ButtonGeneric from '../../components/ButtonGeneric';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { Header } from '@rneui/base';
import {  Feather, Ionicons } from '@expo/vector-icons';
import NovaCopa from './novaCopa';
import Toolbar from '../../components/Toolbar';

export default function HomeScreen() {
  const navegacao = useNavigation() ;
  const { setUsuario, setImagemUsuario } = useAutenticacaoContext();
  const [modalVisible, setModalVisible] = React.useState(false);
  const HeaderComponent = {
    ButtonComponent:{
        color:"black", 
        size:32
    }
  }
  return (
    <SafeAreaView style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => { setModalVisible(!modalVisible); }}
        >
          <Toolbar
            text={'Nova Competição'}
            centerContainerStyle={{}}
            leftComponent={<TouchableOpacity style={{margin:-5}} onPress={() => setModalVisible(!modalVisible)}><Ionicons name="close-circle-outline" size={32} color={'white'}/></TouchableOpacity>}
          />
          <NovaCopa onRequestClose={() => { setModalVisible(!modalVisible); }}/>
        </Modal>
        
        <ButtonGeneric 
          title={'Novo Campeonato'}
          subtitle={'Crie seu próprio campeonato'}
          textStyle={{
            color:colors.cor1
          }}
          onPress={()=>{
            setModalVisible(true)
          }} 
        />
        <ButtonGeneric 
          title={'Histórico ( Em breve! )'}
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
