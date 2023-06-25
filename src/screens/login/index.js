import * as React from 'react';
import { View, Text, Image,SafeAreaView } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {  Feather } from '@expo/vector-icons';
import base64 from 'react-native-base64';


import { styles } from './styles';
import InputField from '../../components/Input';
import { colors } from '../../assets/global/color';
import ButtonGeneric from '../../components/ButtonGeneric';
import { useAutenticacaoContext, useIPServerContext } from '../../hooks/autenticacao';
import { mensagem } from '../../assets/global/function';
import LocalStorageController from '../../class/LocalStorageController';
import LogoImg from '../../../assets/icon.png'

export function LoginScreen (props) {    
    const [carregou, setCarregou] = React.useState(false);
    const { setUsuario, setImagemUsuario } = useAutenticacaoContext();
    const { ipServer,setIpServer }  = useIPServerContext();

    const [user, setUser] = React.useState(''); 
    const [server, setServer] = React.useState('');     
    const [password, setPassword] = React.useState('');
    const [checked, setChecked] = React.useState(false);
    const [error_user, setError_User] = React.useState(false);
    const [error_server, setError_Server] = React.useState(false);
    const [error_password, setError_Password] = React.useState(false);

    const Permissoes = async () => {
    }

    function validar(){     
        setError_Server(false);
        setError_User(false);
        setError_Password(false);
        var retorno = true

        if (server == ''){ setError_Server(true); retorno =  false; }
        if (user == ''){ setError_User(true); retorno =  false; }
        if (password == ''){ setError_Password(true); retorno =  false; }
        if(!retorno){return false}else{return true}
    }
    async function Logar(){      
        if (validar()){ 
            try {
                if (server && server != null) { 
                //     const usuarioService = new TUsuarioService();
                //     const xResponse = await usuarioService.postTUsuario(server, user, password)
                //     if (!xResponse){
                //         mensagem('Força de Vendas','Não foi possivel conectar no servidor!')
                //     } else if (!xResponse.hasOwnProperty('mensagem')){
                        const configuracao  = {
                            "ipServer": server
                        };
                        const usuario = {
                            'usuario_id': 1,//xResponse.usuario_id,
                            "entidade_id": 1,//xResponse.entidade_id,
                            'imagem':null,//:xResponse.imagem,
                            'login':user,
                            'senha':base64.encode(password),
                            'lembrar':checked, 
                            'logout':false
                        }
                        setUsuario(usuario.login)
                        setImagemUsuario(usuario.imagem)
                        setIpServer(server)
    
                        const localStorage = new LocalStorageController();
                        localStorage.updateTokenInfo(usuario)  
                        localStorage.updateConfig(configuracao); 
                    // }else{
                    //     mensagem('Usuario', xResponse.mensagem)    
                    // }
                }else{
                    mensagem('Força de Vendas','Necessário definir uma conexão!')
                }
            } catch (error) {
                console.log(error)
            }
        }
    }

    async function buscarNome(){
    }

    React.useLayoutEffect(() => {
    });
    
    React.useEffect(() => {
    }, []);

    return (
        <SafeAreaView style={[styles.container,{justifyContent:'center'}]}>        
                <InputField
                    label={'Servidor'}
                    iconLeft={ <Feather name="globe" size={22} color={colors.cor4} style={{marginRight: 5}} /> }
                    onChance={text => { setServer(text); setError_Server(!(text != ''))}}
                    value={server}
                />
                {(error_server === true) && <Text style={styles.error}>Servidor não pode ser vazio!</Text>}

                <InputField
                    label={'Usuário'}
                    autoCapitalize={"characters"}
                    activeOpacity={0.5}
                    iconLeft={ <Feather name="user" size={22} color={colors.cor4} style={{marginRight: 5}} onPress={()=>{}}/> }  
                    iconRight={ <Feather name="search" size={22} color={colors.cor4} style={{marginRight: 5}} /> }               
                    onChance={text => { setUser(text); setError_User(!(text != '')) }}
                    onPress={buscarNome}
                    value={user}
                />
                {(error_user === true) && <Text style={styles.error}>Usuário não pode ser vazio!</Text>}
                <InputField
                    label={'Senha'}
                    iconLeft={ <Feather name="lock" size={22} color={colors.cor4} style={{marginRight: 5}} /> }
                    inputType="password"
                    onChance={text => { setPassword(text); setError_Password(!(text != '')) }}
                    value={password}
                />
                {(error_password === true) && <Text style={styles.error}>Senha não pode ser vazio!</Text>}
                <BouncyCheckbox
                    text="Lembrar Usuário"
                    size={25}
                    fillColor="green"
                    textStyle={{ textDecorationLine: "none", fontFamily: 'FIFA'}}
                    iconStyle={{ marginLeft:25 }}
                    iconInnerStyle={{ borderWidth: 2 }}
                    onPress={(isChecked) => {setChecked(isChecked)}}
                />
                <ButtonGeneric
                    title={'Entrar'}
                    backgroundColor={colors.cor2}
                    textStyle={{
                        color:colors.cor4
                    }}
                    buttonStyle={{
                        marginTop: 10,
                        marginBottom: 5,
                    }}
                    onPress={Logar}
                />
                <Text style={{textAlign:'center', color:colors.cor4, marginTop:10, marginBottom:10, fontFamily: 'FIFA'}}>
                    Não tem uma conta? <Text style={{color:colors.cor2}} onPress={()=>{console.log('vai criar uma conta')}}>Crie agora!</Text>
                </Text>
        </SafeAreaView>
    );
}
