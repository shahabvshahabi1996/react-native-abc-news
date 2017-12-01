import React , {Component} from 'react';
import {Text,View,Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'
const NewsDetail  = (props)=>{
    return(
        <Card>
            <CardSection style={Styles.headerStyle}>
                <View>
                    <Image style={Styles.thumbNailStyle} source={{uri : 'https://i.pinimg.com/736x/df/a4/b5/dfa4b52094e56df3bf8690f4887ceef2--abc-new-shows-fall-tv-shows.jpg'}}/>
                </View>
                <View style={Styles.headerStyle}>
                    <Text style={{fontFamily : 'RobotoSlab-Regular'}}>{props.news.author ? props.news.author : 'ABC News' }</Text>
                </View>
            </CardSection>
            <CardSection>
                <Text style={Styles.headerTextStyle}>{props.news.title}</Text>
            </CardSection>
            <CardSection>
                <Image style={{width : null,height : 300,flex : 1,borderRadius : 3}} source={{uri : props.news.urlToImage ? props.news.urlToImage : 'http://a1771.phobos.apple.com/us/r30/Purple/v4/cd/b1/70/cdb170d9-5d9b-962b-4610-96f1d921a138/mzl.gdpdqkuc.png' }}/>
            </CardSection>
            <CardSection>
                <Text style={{fontSize : 20,fontFamily : 'RobotoSlab-Regular' ,textAlign : 'left',color : '#333'}}>{props.news.description}</Text>
            </CardSection>
            <CardSection>
                <Button onPress={()=>Linking.openURL(props.news.url)} text="Read More"/>
            </CardSection>
        </Card>
    );
};

const Styles = {
    headerStyle:{
        flexDirection : 'column',
        justifyContent : 'flex-start',
        padding : 10
    },
    headerTextStyle : {
        fontSize : 15,
        color : '#252525',
        fontFamily : 'RobotoSlab-Bold'
    },
    thumbNailStyle : {
        width: 50, 
        height: 50,
        borderRadius : 3
    }

};

export default NewsDetail;
