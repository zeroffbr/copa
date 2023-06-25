
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginScreen } from '../screens/login';
import HomeScreen from '../screens/home';
import { createStackNavigator, CardStyleInterpolators  } from "@react-navigation/stack";
import LocalStorageController from '../class/LocalStorageController';
import { useAutenticacaoContext } from '../hooks/autenticacao';
import React from 'react';
import { LoadingScreen } from '../screens/loading';
import { colors } from '../assets/global/color';
import { IconButton, MD3Colors } from 'react-native-paper';
import { UsuarioScreen } from '../screens/usuario';
import { CompeticaoScreen } from '../screens/competicao';
import { CompeticaoInfoScreen } from '../screens/competicao/info';

const StackPrincipal = createStackNavigator();
const TabBottom      = createBottomTabNavigator();
const StackCompeticoes = createStackNavigator();

export function MainNavigator(){
    const { usuario, setUsuario, setImagemUsuario }   = useAutenticacaoContext();     
    const [isLoading, setIsLoading] = React.useState(true);  

    React.useEffect(() => {
        // Verificar se o usuário já está autenticado
        const checkUserToken = async () => {
            try {
                const localStorage = new LocalStorageController();
                const token  = await localStorage.getTokenInfo() 
                if (token === null){
                    setUsuario('');
                    setImagemUsuario('');
                }else{
                    if (typeof token === 'object' && token.login && token.logout !== undefined) {
                        const xUsuario = token.logout === true ? '' : token.login;
                        const xImagem = token.logout === true ? '' : token.imagem;
                        setUsuario(xUsuario);
                        setImagemUsuario(xImagem);
                    } else { 
                        setUsuario(''); 
                        setImagemUsuario('');
                    }
                }
                setIsLoading(false);
            } catch (error) {
                mensagem('', 'Erro ao validar token, entre em contato com o suporte técnico!');
                setUsuario('');
                setImagemUsuario('');
                setIsLoading(false);
            }
        };
    
        checkUserToken();
    }, []);

    if (isLoading) {
        // Renderizar um componente de carregamento enquanto estiver verificando o token do usuário
        return <LoadingScreen/>;
    }

    function state(){
        return ((usuario === null) || (usuario === undefined || usuario === ''))
    }

    return (
        <NavigationContainer>
            <StackPrincipal.Navigator screenOptions={{headerShown: false}} initialRouteName="login">              
                {state() ? (
                    <StackPrincipal.Screen name="login" component={LoginScreen}  options={{
                        title: 'Sign in',
                        // When logging out, a pop animation feels intuitive
                        // You can remove this if you want the default 'push' animation
                        // animationTypeForReplace: state() ? 'pop' : 'push',
                      }} />
                ) : (
                    <StackPrincipal.Screen 
                        name="app" 
                        component={BottomNavigate} 
                        options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,}}
                    />
                )}  
            </StackPrincipal.Navigator>
        </NavigationContainer>

    )
}

function BottomNavigate() {
    const borderRadius = 50;
    const option = {
        tabBarActiveBackgroundColor:colors.cor5, 
        tabBarShowLabel:false,
    };
    return (
        <TabBottom.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel:false,
                tabBarStyle:{
                    borderTopWidth: 0, 
                    margin:20,
                    backgroundColor:MD3Colors.secondary20,
                    height: 70,
                    borderRadius:borderRadius,
                    position: 'absolute',
                }
            }} 
            backBehavior='history' 
            initialRouteName='home'
        >
            <TabBottom.Screen 
                name="home" 
                component={HomeScreen}
                options={{   
                    ...option,
                    tabBarIcon:({size, color}) => (
                        <IconButton  icon="home" iconColor={MD3Colors.secondary60} />
                    ),
                    tabBarLabel:'Home', 
                    tabBarItemStyle: {
                        borderTopLeftRadius: borderRadius,
                        borderBottomLeftRadius: borderRadius,
                    },
                }} 
            />
            <TabBottom.Screen 
                name="campeonatoHome" 
                component={BottomNavigateCompeticoes}
                options={{   
                    ...option,
                    tabBarIcon:({size, color}) => (
                        <IconButton  icon="soccer" iconColor={MD3Colors.secondary60} />
                    ),
                    tabBarLabel:'Campeonato', 
                }} 
            />
            <TabBottom.Screen 
                name="usuario" 
                component={UsuarioScreen}
                options={{   
                    ...option,
                    tabBarIcon:({size, color}) => (
                        <IconButton  icon="account" iconColor={MD3Colors.secondary60} />
                    ),
                    tabBarLabel:'Usuario', 
                    tabBarItemStyle: {
                        borderTopRightRadius: borderRadius,
                        borderBottomRightRadius: borderRadius,
                    },
                }} 
            />
        </TabBottom.Navigator>
    );
}

export const BottomNavigateCompeticoes = () => (
    <StackCompeticoes.Navigator screenOptions={{headerShown: false}} initialRouteName='competicao'>
        <StackCompeticoes.Screen 
            name="competicao"           
            component={CompeticaoScreen}        
            // options={{cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,}}     
        />
        <StackCompeticoes.Screen 
            name="competicao_info"           
            component={CompeticaoInfoScreen}     
            options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,}}        
        />
        <StackCompeticoes.Screen 
            name="historico" 
            component={CompeticaoScreen}       
            options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,}}
        />
    </StackCompeticoes.Navigator>
)