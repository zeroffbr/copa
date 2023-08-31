import React, { useCallback } from 'react';
import { Dimensions, FlatList, SafeAreaView, ScrollView, Text, TouchableHighlight, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';
import { IconButton, MD3Colors } from 'react-native-paper';

import {styles} from './style'
import { colors } from '../../assets/global/color';
import { Avatar, Divider } from '@rneui/themed';
import ButtonGeneric from '../../components/ButtonGeneric';
import LocalStorageController from '../../class/LocalStorageController';
import { useAutenticacaoContext } from '../../hooks/autenticacao';

export function UsuarioScreen() {  
  const { setUsuario, setImagemUsuario } = useAutenticacaoContext();

  function FieldGeneric({icon='',field = undefined, value = undefined, fontColor = '', onPress}){
    const color = ()=>{
      return (fontColor == ''?colors.cor2:fontColor)
    }
    return(
      <TouchableOpacity
        activeOpacity={1}
        style={{
          // backgroundColor:colors.cor5,
          margin:20,
          // height: 70,
          // borderRadius:25,
          // justifyContent:'center',
          
        }}
        onPress={onPress}
      >
        <View style={{flexDirection:'row'}}>
          <IconButton icon={icon} iconColor={MD3Colors.secondary60} containerColor={colors.cor5} size={40} />
          <View style={{justifyContent:'space-around', flex:1, marginLeft:5, marginTop:10}}>
            <Text style={{ textAlign:'left', fontSize: 25, color:color(), fontFamily: 'FIFA'}}>{field}</Text>
            <Text style={{ textAlign:'left', fontSize: 18, color:colors.cor4, fontFamily: 'FIFA'}}>{value}</Text>
            <Divider width={1} color={colors.cor5} style={{marginTop:10, marginRight:40}} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  

  async function logout() {
    const localStorage = new LocalStorageController();
    const storagedUser  = await localStorage.getTokenInfo()   
    if (storagedUser.lembrar){
      storagedUser.logout = true  
      localStorage.updateTokenInfo(storagedUser)                     
    }else{
      localStorage.deleteTokenInfo()      
    }  
    setUsuario(null);  
    setImagemUsuario(null);  
  }

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{flex:1,justifyContent:'space-between'}}>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} >
        <View>
          <Avatar
              size={150}
              rounded
              source={{ uri: 'https://inmagazine.ig.com.br/public/assets/img/postagens/post_34888.jpeg?5' }}
              title="Bj"
              containerStyle={{ backgroundColor: 'grey', alignSelf:'center' }}
              activeOpacity={0.8}
              onPress={()=>{ console.log('mudar avatar') }}
            >
              <Avatar.Accessory size={30} style={{margin:10}} activeOpacity={0.8} />
          </Avatar>
          {/* <Image
            style={{width: 150, height: 150, borderRadius:100, alignSelf:'center', marginTop:10}}
            source={{uri: '',}}
          /> */}
          <Text style={{ textAlign:'center', fontSize: 18, fontFamily: 'FIFA', margin:10, color:colors.cor2 }}> Atual campeão</Text>
          <FieldGeneric
            icon={'account-outline'}
            field={'Nome'}
            value={'Lionel Messi'}
          />
          <FieldGeneric
            icon={'instagram'}
            field={'Instagran'}
            value={'@leomessi'}
          />
          <FieldGeneric
            icon={'phone-outline'}
            field={'Telefone'}
            value={'(954) 9294-267'}
          />
        </View>
          
        </ScrollView>
        <View>
          <ButtonGeneric
            title='Atualizar Dados'
            backgroundColor='#4682B4'
          />
          <ButtonGeneric
            title='Sair'
            backgroundColor='red'
            buttonStyle={{
              marginBottom:100,
            }}
            onPress={logout}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

