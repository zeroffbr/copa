import React from 'react';
import { Image, SafeAreaView, View} from 'react-native';
import { useAutenticacaoContext } from '../../hooks/autenticacao';
import {  Feather, Ionicons } from '@expo/vector-icons';

//Importações
import { styles } from './style';
import { colors } from '../../assets/global/color';
import InputField from '../../components/Input';
import { Switch, Text } from 'react-native-paper';
import { CheckBox } from '@rneui/themed';
import DropDownPicker from 'react-native-dropdown-picker';
import ButtonGeneric from '../../components/ButtonGeneric';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function NovaCopa({onRequestClose}) {
  const [nome, setNome] = React.useState('');
  const [participantes, setParticipantes] = React.useState([]);
  const [times, setTimes] = React.useState([]);
  const [faseGrupo, setFaseGrupo] = React.useState(false);
  const [quantidade, setQuantidade] = React.useState('');

  const onToggleSwitch = () => setFaseGrupo(!faseGrupo);
  const renderItem = (item) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image source={item.image} style={{ width: 20, height: 20, marginRight: 10 }} />
      <Text>{item.descricao}</Text>
    </View>
  );

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
        <DropDownPicker
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
        />
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
