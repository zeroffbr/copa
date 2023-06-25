import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from 'expo-local-authentication';

import {  mensagem } from "../assets/global/function";

class LocalStorageController {

  //Parametros
  async getParametrizacao(type) {
    try {
      const Json  = JSON.parse(String(await AsyncStorage.getItem("@Parametrizacao")))
      const elementExists = Object.keys(Json).includes(String(type).slice(1));
      if (type === "@token") {
        return (elementExists?Json.token:{});
      } else if (type === "@config") {
        return (elementExists?Json.config:{});
      } else {
        return "Tipo inválido";
      }
    } catch (error) {
      mensagem('', 'Erro ao carregar parametros');
      throw error;
    }
  }

  //@token_forcavenda
  async getTokenInfo() {
    try {
      const Json  = JSON.parse(String(await AsyncStorage.getItem("@token")))
      return Json;
    } catch (error) {
      mensagem('', 'Erro ao carregar informações do usuario');
      throw error;
    }
  }
  async updateTokenInfo(newJson) {
    try {
      await AsyncStorage.setItem("@token", JSON.stringify(newJson));
      const updatedDav = await this.getTokenInfo();
      return String(updatedDav);
    } catch (error) {
      mensagem('', 'Erro ao atualizar token');
      throw error;
    }
  }  
  async deleteTokenInfo() {
    try {
      AsyncStorage.removeItem("@token") 
    } catch (error) {
      mensagem('', 'Erro ao excluir token');
      throw error;
    }
  }

  //@config_forcavenda
  async getConfig() {
    try {
      const Json  = JSON.parse(String(await AsyncStorage.getItem("@config")))
      return Json;
    } catch (error) {
      mensagem('', 'Erro ao carregar configurações');
      throw error;
    }
  }
  async updateConfig(newJson) {
    try {
      await AsyncStorage.setItem("@config", JSON.stringify(newJson));
      const updatedDav = await this.getConfig();
      return String(updatedDav);
    } catch (error) {
      mensagem('', 'Erro ao atualizar configuração');
      throw error;
    }
  } 

  //Biometria
  async loginBiometrico() {
    try {
      const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();
  
      if (!isBiometricAvailable) {
        console.log('Biometria não está disponível neste dispositivo.');
        return;
      }
  
      const isEnrolled = await LocalAuthentication.isEnrolledAsync();
  
      if (!isEnrolled) {
        console.log('Nenhuma biometria está configurada neste dispositivo.');
        return;
      }
  
      const { success } = await LocalAuthentication.authenticateAsync();
  
      if (success) {
        console.log('Login bem-sucedido!');
        // Faça o redirecionamento para a próxima tela ou execute outras ações pós-login.
      } else {
        console.log('Falha na autenticação biométrica.');
      }
    } catch (error) {
      console.log('Ocorreu um erro durante a autenticação biométrica:', error);
    }
  }

  async logout(){
    const storagedUser  = await this.getTokenInfo()
    console.log(storagedUser)   
    if (storagedUser.lembrar){
        storagedUser.logout = true  
        this.updateTokenInfo(storagedUser)                     
    }else{
      this.deleteTokenInfo()      
    }  
  }
}

export default LocalStorageController;