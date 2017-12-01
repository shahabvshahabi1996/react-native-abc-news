import React , {Component} from 'react';
import {Text,View} from 'react-native';


const Header = (props)=>{
    return(
        <View style={Styles.headerContainer}>
            <Text style={Styles.textStyle}>{props.headerText}</Text>
        </View>
    );
};

const Styles = {
    textStyle : {
        fontSize : 20,
        color : '#eee',
        fontFamily : 'RobotoSlab-Regular'
    },
    headerContainer : {
        backgroundColor : '#333',
        justifyContent : 'center',
        alignItems : 'center',
        height : 60,
        paddingTop : 15,
        paddingBottom : 15,
        borderBottomColor : 'rgba(238, 238, 238,0.2)',
        borderBottomWidth : 1,
        elevation : 2,
        position : 'relative'
    }
};

export default Header;
