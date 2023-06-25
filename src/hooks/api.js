import Axios from 'axios';
import base64 from 'react-native-base64'

const token        = base64.encode('testserver' + ":" + 'testserver');

export const api = (dynamicBaseURL, authorization = token) => {
  const axiosInstance = Axios.create({
    baseURL: `http://${dynamicBaseURL}`, 
    // timeout : 5000,
    headers:{
        'Authorization': 'Basic ' + authorization,
        'Content-Type': 'application/json; charset=utf-8',
        'Accept-Encoding': 'gzip,br'
    }
  });  
  return axiosInstance;
};