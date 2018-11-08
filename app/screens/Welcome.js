
import React from "react";
import { View,Text,Image,StyleSheet,Keyboard, KeyboardAvoidingView,ScrollView, Platform } from "react-native";
import { Card, Button, FormLabel, FormInput,FormValidationMessage, Input } from "react-native-elements";
import { onSignIn } from "../auth";
import { createStackNavigator } from 'react-navigation';

export default class Welcome extends React.Component {
  static navigationOptions = {
   
    header:null
  };
  render() {
    return (
      <KeyboardAvoidingView
        style={{
          backgroundColor: '#FFFFFF',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        behavior="padding"
      >
  <View style={{ paddingVertical: 0,alignItems:'center',justifyContent:'center' }}>
      <View
          style={{
            // backgroundColor: "#bcbec1",
            alignItems: "center",
            justifyContent: "center",
           
           
            alignSelf: "center",
           
          }}
        >
        <Text style={{ fontSize: 35,fontStyle:'normal',color:'black',fontWeight:'400'}} >
             Welcome to Murmur!</Text>
      <Image
          source={require('../images/murmur_logo.png')}
          style={{width: 80, height: 80,marginTop:10}}
        />
      </View>
      <Button
        buttonStyle={{ marginTop: 20, width:110 }}
        backgroundColor="#56A2FF"
        title="Login"
          onPress={() => this.props.navigation.navigate('SignIn')}
       
      />
  <Button
        buttonStyle={{ marginTop: 20, width:110 }}
        backgroundColor="#56A2FF"
        title="Register"
         onPress={() => this.props.navigation.navigate('SignUp')}
      />
    
       
     
  </View> 
        </KeyboardAvoidingView>
    );
  }
}
