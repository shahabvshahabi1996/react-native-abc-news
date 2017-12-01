import React , {Component} from 'react';
import {Text,TouchableOpacity} from 'react-native';
const Button  = (props)=>{
    return(
        <TouchableOpacity onPress={props.onPress} style={Styles.buttonStyle}>
            <Text style={Styles.buttonTextStyle}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const Styles = {
    buttonStyle : {
        flex : 1,
        alignSelf : 'stretch',
        backgroundColor : '#333',
        borderRadius : 5,
        borderWidth : 1,
        borderColor : '#333',
        marginLeft : 5,
        marginRight : 5
    },
    buttonTextStyle : {
        alignSelf : 'center',
        color : '#fafafa',
        fontSize : 16,
        padding : 10,
        fontFamily : 'RobotoSlab-Bold'
    }
};

export default Button;
