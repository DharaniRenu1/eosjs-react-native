import React from "react";  
import { View,Text,Image,StyleSheet,KeyboardAvoidingView,TouchableHighlight } from "react-native";
import { Card,  FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";
import { CardItem,Header,Body,Right,Left,Title,Icon,Button } from 'native-base';

const Posts = [
    {
        key: 1,
        navi:"Profile",
        private1:"",
    }
];
export default class Settings extends React.Component {
  static navigationOptions = {
   
    header:null
  };
  render() {
    return (
      <View style={{ flex: 1 ,backgroundColor:"#ffffff"}}>
   <Header  tabUnderlineStyle={{opacity:0}}  style={{backgroundColor:"#3B21FF"}} barStyle="light-content">
          <Left>
            <Button transparent onPress={() => {
         this.props.navigation.navigate("Profile");
        }}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Settings</Title>
          </Body>
          <Right>
          
          </Right>
        </Header>

      <View style={{height: 45}}>
   
      </View>
     <TouchableHighlight style={styles.button} onPress={() => alert("Private key")}
      underlayColor='#99d9f4'>
         <Text style={styles.buttonText}>View private key</Text>
        </TouchableHighlight>

      <FormLabel
        labelStyle={styles.FormLabel}
      >PASSWORD</FormLabel>
      <FormInput secureTextEntry placeholder="Enter the Password..." />
      
       {Posts.map(({ private1, key,navi }) => (
       
            <CardItem key={key}>
               <View 
          style={{height: 45,width:300}}>
                            
                        <Text style={{ color: "#000000", fontSize: 20,textAlign:"center"}} >  
                                      Private Key</Text>
                        <Text style={{ color: "#000000", fontSize: 20,textAlign:"center" }} >
                        {private1}</Text>
                    
                    </View>
            </CardItem>
                ))}
    
  </View>
      );
  }
}


var styles = StyleSheet.create({
  button: {
     height: 36,
     width:350,
     backgroundColor: '#f1f442',
     borderColor: '#111100',
     borderWidth: 2,
     borderRadius: 15,
     alignSelf: 'center',  
   },    
   buttonText: {
     fontSize: 18,
     color: '#111100',
     alignSelf: 'center',
   },
Text1: {
      color: '#800080',
      alignSelf: 'center'
    },
    Text2: {
      color: '#800080',
      alignSelf: 'center'
    },
    FormLabel : {
      color : '#000000',
      fontWeight: '300',
      fontSize:16
    }

});