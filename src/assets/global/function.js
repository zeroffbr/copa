import { Alert, Platform, ToastAndroid } from "react-native";

export function round(value, exp) {
    if (typeof exp === 'undefined' || +exp === 0) return Math.round(value); value = +value; exp = +exp;
    
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) return NaN;
    
    value = value.toString().split('e'); value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));
    
    value = value.toString().split('e'); return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}

export function mensagem(title,descricao){
    if (Platform.OS == "android")
        ToastAndroid.show(descricao, ToastAndroid.SHORT)
    else
        Alert.alert(title,descricao)  
}

export function mensagemPersonalizada(descricao){
    if (Platform.OS == "android")
        ToastAndroid.show(descricao, ToastAndroid.SHORT)
    else
        Alert.alert("", descricao, [{text: "OK", style: "cancel",}])  
}
export function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function zeroEsquerda(value, size) {
    while (String(value).length < size){
        value = `0${value}`
    }
    return value;
}