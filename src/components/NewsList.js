import React , {Component} from 'react';
import {Text,View,ScrollView} from 'react-native';
import axios from 'axios';
const Albums = require('../albums.json');
import NewsDetail from './NewsDetail';
class NewsList extends Component{
    state = {
        news : [{}]
    }
    componentWillMount(){
        axios.get("https://newsapi.org/v2/everything?sources=abc-news&apiKey=d05738bf1c0a4de48e5f6758ab35c892")
        .then(response => this.setState({news : response.data.articles}))
    }
    get renderNews(){        
       return this.state.news.map((news , key) => <NewsDetail key={key} news={news} /> )
    }
    render(){
        return(
            <ScrollView>
                {this.renderNews}
            </ScrollView>
        );
    }
};

const Styles = {
};

export default NewsList;
