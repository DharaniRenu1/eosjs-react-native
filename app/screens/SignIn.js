import React from "react";
import { View, Text, Image, StyleSheet,  KeyboardAvoidingView,ScrollView } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSetlist,onSetPvt } from "../auth";;
import * as eos from './eosconfig';

var Pri_key = ''

export default class SignIn extends React.Component {

  static navigationOptions = {
    header:null
  };
 constructor(props){
    super(props);
    this.state = {
        "key": true,
        "text": ''
      };
  }
  
   mnem_acc() 
  {
    if(this.state.text != '' && (this.state.text).split(" ").length == 12)
    {
      eos.generateSeedPrivKey(this.state.text).then(pri => {
        this.setState({"text":pri})
        this.key_acc();
      }).catch(err => alert("An error occurred"));
    }
    else
      alert("Invalid Mnemonic Phrase")
  }

  key_acc() 
  {
    Pri_key = this.state.text;

    // alert(Pri_key)
    eos.isPrivKeyValid(Pri_key).then(res => {
      if(res)
      {
        eos.fromPrivToPub(Pri_key).then(pub => {
          console.log("pub_key: "+ pub)
          eos.getAccountNamesFromPubKeyP(pub).then(acc => {
            let list_arr = acc["account_names"];
            console.log("Accounts: "+list_arr)
            if (list_arr.length > 0) {
              onSetlist(list_arr)
              this.props.navigation.navigate("SelectAcc");
            }
            else
            {
              alert("There is no registered Accounts")
            }
          })
        })
      }
      else
      {
        alert("Enter the Valid Key")
      }
    })
  }

  render() {
    return (
      <KeyboardAvoidingView
            style={{
              backgroundColor: '#FFFFFF',
              flex: 1,
             
              justifyContent: 'center',
            }}
          
          >
        <View>
          
      <View>
          <View
              style={{
                // backgroundColor: "#bcbec1",
                alignItems: "center",
                justifyContent: "center",
                width: 100,
                height: 100,
                borderRadius: 40,
                alignSelf: "center",
                marginTop: 0
              }}
            >
          <Image
              source={require('../images/murmur_logo.png')}
              style={{width: 50, height: 50}}
            />
          </View>
            <FormLabel
            labelStyle={styles.FormLabel}
          >{this.state.key ? "PRIVATE KEY" : "MNEMONIC PHRASE"}</FormLabel>
          <FormInput placeholder= {this.state.key ? "Enter Private_key..." : "Enter Mnemonic..."} name="pri" 
              value = {this.state.text}
              onChangeText={e => {
                this.setState({"text":e})
              }} />


          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#56A2FF"
            title="SIGN IN"
          onPress={() => { 
              this.state.key ? this.key_acc() : this.mnem_acc()
            }}
          />
          
      </View>
      <View>
      <ScrollView>
         <View>
          <Text
            style={styles.Text1}
            onPress={() => { this.state.key ? this.setState({'key': false}) : this.setState({'key': true}) ; this.setState({"text":''}) }}
            >{this.state.key ? "Using mnemonic to login" : "Using Private key to login"}</Text>
      </View>
      <View>
          <Text
            style={styles.Text1}
            onPress={() => this.props.navigation.navigate("SignUp")}
            >Create an Murmur Account</Text>
      </View>
             </ScrollView>
      </View>
     
      </View>
      </KeyboardAvoidingView>
    );
  }
}

var styles = StyleSheet.create({

    Text1: {
      marginTop : 10,
      color: '#800080',
      alignSelf: 'center'
    },
    Text2: {
      color: '#800080',
      alignSelf: 'center'
    },
    FormLabel : {
      color : '#000000',
      fontWeight: '300'
    }

});