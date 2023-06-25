import { StyleSheet } from 'react-native';
import { colors } from '../../assets/global/color';
import styled from 'styled-components/native';
import {Animated} from 'react-native';

export const styles = StyleSheet.create({
    container:{ 
        alignItems: 'center', 
        backgroundColor:colors.corBackground,
        flex: 1, 
        justifyContent: 'center', 
    },
}); 

export const Container = styled.View`
    /* width:80px; */
    /* height:40px; */
    flex-direction:row;
    justify-content:space-between;
`;