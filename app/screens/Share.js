import React from "react";
import { View,Text,Image,StyleSheet,Keyboard, KeyboardAvoidingView,ScrollView, Platform } from "react-native";
import { Card, FormLabel, FormInput,FormValidationMessage, Input } from "react-native-elements";
import { onSignIn } from "../auth";
import { CardItem, Left, Body, Right ,Header,Title,Icon,Button} from 'native-base';
const Posts = [
    {
        key: 1,
        name: "Whatspp",
         navi:"Account1",
        userimg: require('../images/whatsapp_logo.png'),
    },
    {
        key: 2,
        name: "Telegram",
        navi:"Isrecovery",
        userimg: require('../images/telegram.png'),
    },
    {
        key: 3,
        name: "e-mail",
         navi:"Share",
        userimg: require('../images/email.png'),
    },
    {
        key: 4,
        name: "Contacts",
        navi:"SignIn",
        userimg: require('../images/sms_logo.png'),
    },  
];
const Post = [
    {
        key: 1,
        name: "Invite some friends !",  
    }  
];
const Pos = [
    {
        key: 1,
        navi:"SignedIn",
        name: "May Be Later !",    
    }  
];
 
export default class Share extends React.Component {
  static navigationOptions = {
   
    header:null
  };
  render() {
    return (
      <View style={{ flex: 1,backgroundColor:"#ffffff"}}>
<Header  tabUnderlineStyle={{opacity:0}}  style={{backgroundColor:"#3B21FF"}} barStyle="light-content">
          <Left>
            <Button transparent onPress={() => {
          this.props.navigation.navigate("Profile");
        }}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Invite Friends</Title>
          </Body>
          <Right>
          
          </Right>
        </Header>
<ScrollView>
 {Post.map(({ name, key }) => (
       
            <CardItem key={key}>
       <View >
                   
        <Text style={{ fontWeight:"500",fontSize:25,color:"#000000",textAlign:"justify" }}>         {name}</Text>
                    </View>
     
            </CardItem>
   ))}
      {Posts.map(({ name, userimg, key,navi }) => (
       
            <CardItem key={key}>
            <View >
                    <Text>
                        <Image
                            source={userimg}
                            style={{width: 50, height: 50}}
                        />
                        <Text style={{ color: "#000000", fontSize: 20 }} 
         onPress={() => this.props.navigation.navigate(navi)}
        >{name}</Text>
                         
                        
                    </Text>
                    </View>
             
            </CardItem>
 ))}
     {Pos.map(({ name,key,navi }) => (
       
            <CardItem key={key}>
                <View >
                    <Text>
                     
                    </Text>
                </View>
            </CardItem>
   ))}

<Text style={{ color: "#000000",fontSize:20,textDecorationLine: 'underline',textAlign:'center'}}          onPress={() => navigation.navigate(navi)}
      onPress={() => {
              onSignIn().then(() => this.props.navigation.navigate("Recommand"));
            }}  >May Be Later</Text>
        </ScrollView>
 </View>
      );
  }
}



  
