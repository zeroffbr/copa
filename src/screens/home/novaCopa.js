import React from 'react';
import { Image, SafeAreaView, View} from 'react-native';
import { useAutenticacaoContext } from '../../hooks/autenticacao';
import {  Feather, Ionicons } from '@expo/vector-icons';
import { xorBy } from 'lodash'

//Importações
import { styles } from './style';
import { colors } from '../../assets/global/color';
import InputField from '../../components/Input';
import { Switch, Text } from 'react-native-paper';
import { CheckBox } from '@rneui/themed';
import ButtonGeneric from '../../components/ButtonGeneric';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import InputMultipleSelect from '../../components/InputMultipleSelect';

export default function NovaCopa({onRequestClose}) {
  const [nome, setNome] = React.useState('');
  const [participantes, setParticipantes] = React.useState([]);
  const [times, setTimes] = React.useState([]);
  const [faseGrupo, setFaseGrupo] = React.useState(false);
  const [quantidade, setQuantidade] = React.useState('');

  const K_OPTIONS = [
    {
      item: 'Juventus',
      id: 'JUVE',
    },
    {
      item: 'Real Madrid',
      id: 'RM',
    },
  ]
  const [selectedParticipantes, setSelectedParticipantes] = React.useState([])
  function onMultiChangeParticipante() {
    return (item) => setSelectedParticipantes(xorBy(selectedParticipantes, [item], 'id'))
  }
  const [selectedTimes, setSelectedTimes] = React.useState([])
  function onMultiChangeTime() {
    return (item) => setSelectedTimes(xorBy(selectedTimes, [item], 'id'))
  }
  return (
    <SafeAreaView style={styles.container}>
      <InputField
        label={'Nome Competição'}
        inputType="nome"
        onChance={text => { setNome(text)}}
        value={nome}
      />
      <View 
        style={{
          marginHorizontal: 25, // Defina a margem horizontal desejada
        }}
      >
      <InputMultipleSelect 
        label='Selecione os participantes...'
        fontStyle={{
          fontFamily: 'FIFA', 
          fontSize:18, 
          color:'white',
        }}
        containerStyle={{
          paddingLeft:5,
          backgroundColor:colors.cor5
        }}
        data={K_OPTIONS}
        selectedValues={selectedParticipantes}
        onMultiSelect={onMultiChangeParticipante()}
        onTapClose={onMultiChangeParticipante()}
        isMulti
        styleView={{
          marginBottom: 10
        }}
      />
      <InputMultipleSelect 
        label='Selecione os times...'
        fontStyle={{
          fontFamily: 'FIFA', 
          fontSize:18, 
          color:'white',
        }}
        containerStyle={{
          paddingLeft:5,
          backgroundColor:colors.cor5
        }}
        data={K_OPTIONS}
        selectedValues={selectedTimes}
        onMultiSelect={onMultiChangeTime()}
        onTapClose={onMultiChangeTime()}
        isMulti
        styleView={{
          marginBottom: 10
        }}
      />
      
      {/* <SelectBox
        label='Selecione os times...'
        options={K_OPTIONS}
        selectedValues={selectedTeams}
        onMultiSelect={onMultiChange()}
        onTapClose={onMultiChange()}
        isMulti
      /> */}
        {/* <DropDownPicker
          placeholder='Selecione os participantes...'
          items={participantes}
          renderItem={renderItem}
          language='PT'
          style={{marginVertical:10, backgroundColor:colors.cor5, borderColor:'transparent'}}
          textStyle={{fontFamily: 'FIFA', fontSize:18, color:'white'}}          
          theme="DARK"
          onChangeItem={(item)=>{}}          
        />

        <DropDownPicker
          placeholder='Selecione os times...'
          items={times}
          renderItem={renderItem}
          language='PT'
          style={{marginVertical:10,backgroundColor:colors.cor5, borderColor:'transparent'}}
          textStyle={{fontFamily: 'FIFA', fontSize:18, color:'white'}}
          theme="DARK"
          onChangeItem={(item)=>{}}
        /> */}
      </View>      
      <BouncyCheckbox
          text="Fase Grupo?"
          size={25}
          fillColor={colors.cor2}
          textStyle={{ textDecorationLine: "none", fontFamily: 'FIFA', color:'white'}}
          iconStyle={{ marginLeft:25}}
          style={{marginTop:10, marginBottom:10}}
          iconInnerStyle={{ borderWidth: 2 }}
          onPress={(isChecked) => {setFaseGrupo(isChecked)}}
      />
      {faseGrupo &&(
        <InputField
          label={'Quantidade de Grupos'}
          keyboardType={'numeric'}
          inputType="quantidade"
          onChance={text => { setQuantidade(text)}}
          value={quantidade}
        />
      )}
      <ButtonGeneric
        title='Iniciar Competição'
        backgroundColor='#4682B4'
        textStyle={{color:colors.cor4}}
        onPress={()=>{
          //salva os dados
          onRequestClose()
        }}
      />
    </SafeAreaView>
  );
}
