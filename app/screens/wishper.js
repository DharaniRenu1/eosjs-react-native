import React from "react";

import { View, ScrollView, Image, TouchableOpacity } from "react-native";

import { Card,  Text } from "react-native-elements";

import { onSignOut } from "../auth";

import { CardItem, Left, Body, Right} from 'native-base';
import { Container, Header, Title, Button, Icon, Content,
 Footer, FooterTab, Badge} from "native-base";

import eosjs from './eosclient';

const Posts = [

    {
        key:1,
        name:"Alex",
        image:require("../images/avatar.png"),
        time:"10",
        status:"Im cool",
        navi:"Chat",
    },
];

function wishper()
{
   
alert("hai")
    fetch('http://murmurjungleapi.wandx.co/api/getPostDetails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
       body: JSON.stringify({

                "query" : {

                      "from" : "6138737650354913280",
                      "to" : "6138737650354929664"
                  }

          })
   
        
    }) .then((res) => res.json())
    .then((resJson) => {
        var keyindex = 0;         
            
            
    })
    .catch((error) => {
        console.error(error);
    });
}

export default class Wishper extends React.Component {
  static navigationOptions = {
   
    header:null
  };
  render() {
    return (
       <Container>
           
        <Header tabUnderlineStyle={{opacity:0}} transparent style={{backgroundColor:"#3B21FF"}} barStyle="light-content"   >
          <Left>
            <Button transparent onPress={() => {
          this.props.navigation.navigate("Profile");
        }}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Wishper</Title>
          </Body>
          <Right>
            
            
            <TouchableOpacity onPress={() => {
          this.props.navigation.navigate("Wish_search");
        }}>
           <Image source={require('../images/wishper.png')}
                           
                            style={{width: 40, marginLeft:70,height: 30}}
                        />
                        
                         
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
           {Posts.map(({ name, image, status, key, time }) => (

        <TouchableOpacity key={key} onPress={() => {
           this.props.navigation.navigate("Chat");
        }}>

        

        <CardItem key={key} style={{ marginTop: 0, marginBottom: -15 }}>

            <Body>

                <CardItem style={{ marginLeft: -20, marginTop: -10}}>

                        

                        <Image

                            source={image}

                            style={{ backgroundColor: "#56A2FF", width: 35, height: 35, borderRadius: 40 }}

                        />
                         <TouchableOpacity onPress={() => {
           this.props.navigation.navigate("Chat");
        }}>
            <Text style={{ color: "#56A2FF", fontSize: 16, marginLeft: 20 }}>{name}</Text>

                         
            </TouchableOpacity>
                       
                        <Right>
                         <Text>{time} Hours ago</Text>
                        </Right>

                </CardItem>

                <CardItem style={{ marginLeft: 40, marginTop: -20 }}>

                    <Body style={{ marginLeft: -5, marginTop: -10 }}>
                         <Text style={{ color: "black", fontSize: 14, marginRight: -15 }}>{status}</Text>
                   </Body>
                </CardItem>
                </Body>
        </CardItem>
        </TouchableOpacity>        
  ))}
        </Content>
            <Footer >
          <FooterTab  style={{backgroundColor:"#ffffff"}}   >
            <Button transparent onPress={() => {
this.props.navigation.navigate("Home");
        }}>
              <Image
          source={require('../images/murmur_logo.png')}
          style={{width: 30, height: 30}}
        />
            </Button>
            <Button  onPress={() => {
         this.props.navigation.navigate("Search");
        }}>
              <Image
          source={require('../images/search.png')}
          style={{width: 30, height: 30}}
        />
            </Button>
            <Button transparent onPress={() => {
          this.props.navigation.navigate("Wishper");
        }}>
              <Image
          source={require('../images/wishper.png')}
          style={{width: 40, height: 40}}
        />
            </Button>
            
           
          </FooterTab>
        </Footer>

      </Container>
      );
  }
}

   
