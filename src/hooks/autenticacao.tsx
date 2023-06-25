import * as React from 'react';
import LocalStorageController from '../class/LocalStorageController';

export const AutenticacaoContext = React.createContext<{usuario?:string, setUsuario?:any, imagemUsuario?:string, setImagemUsuario?:any}>({})
export const IpServerContext     = React.createContext<{ipServer?:string, setIpServer?:any}>({})

export function AutenticacaoProvider (props: any) {

    const [ usuario, setUsuario ] = React.useState('');  
    const [ imagemUsuario, setImagemUsuario ] = React.useState('');  
    React.useLayoutEffect(() => {  
        async function loadStorageData() {
            const localStorage = new LocalStorageController();
            const storagedUser  = await localStorage.getTokenInfo();
            if (storagedUser != '' && storagedUser != null ) {
                if (!storagedUser.logout) {                
                    var login = storagedUser.login       
                    var imagem = storagedUser.imagem
                    setUsuario(login);  
                    setImagemUsuario(imagem);  
                }  
            }
        }
        loadStorageData();
      });

    return (
        <AutenticacaoContext.Provider value={{usuario, setUsuario, imagemUsuario, setImagemUsuario}}>
            {props.children}
        </AutenticacaoContext.Provider>
     );
}

export function IpServerProvider (props: any) {

    const [ ipServer, setIpServer ] = React.useState('');  
    React.useLayoutEffect(() => {
        async function loadStorageData() {
            const localStorage = new LocalStorageController();
            const configuracao  = await localStorage.getConfig();
            if (configuracao != '' && configuracao != null) {      
                var ip = configuracao.ipServer //+ ':' + configuracao.portServer
                setIpServer(ip);    
            }
        }
        loadStorageData();
      });

    return (
        <IpServerContext.Provider value={{ipServer, setIpServer}}>
            {props.children}
        </IpServerContext.Provider>
     );
}

export const useAutenticacaoContext = () => React.useContext(AutenticacaoContext);
export const useIPServerContext     = () => React.useContext(IpServerContext);