// import React from "react";
// import { View,Image, StyleSheet, Clipboard } from "react-native";
// import { Container, Item, Input, Content, Button, Text, Form, Label } from 'native-base';
// import { getKeyAccounts, getAcc } from '../EOS_example.js';
// import { iscreateAccount, israndomKey, iscreateAcc } from "../auth";

// var key_name = ''


// export default class KeyPair extends React.Component {

//     constructor(props){
//         super(props);
//         this.state = {
//             "mnemonic": '',
//             "privatekey": '',
//             "publickey": '',
//           };
//     }

//   static navigationOptions = {
//     header:null
//   };

  
//   key_gen() 
//   {
//     if(key_name.length == 12){
//       // getAcc(key_name)
//       iscreateAccount(key_name, this.state.publickey).then(c => console.log("Data :"+ c) ).catch(err => console.log("Error :"+ err))
//   //iscreateAcc(key_name, this.state.publickey)//.then((c) => { console.log(c); }).catch(err => console.log("Error in signup :"+ err))
//     }
//   }

//   componentDidMount()
//   {
//     console.log("KeyPair")
//     israndomKey()  
//       .then(res => {
        
//         this.setState({
//             "publickey": res.PublicKey,
//             "privatekey": res.PrivateKey,
//             "mnemonic": res.mnemonic,
//           })

//         })
//       .catch(err => alert("An error occurred"));
//   }

//   render() {
//     return (
//         <Container>
//           <View
//             style={{
//               // backgroundColor: "#bcbec1",
//               alignItems: "center",
//               justifyContent: "center",
//               width: 60,
//               height: 60,
//               borderRadius: 60,
//               alignSelf: "center",
//               marginTop: 20,
//               paddingTop:10
//             }}
//           >
//         <Image
//             source={require('../images/murmur_logo.png')}
//             style={{width: 40, height: 40}}
//           />
//         </View>
//           <Content padder>
//           <View
//             style={{
//               // backgroundColor: "#bcbec1",
//               alignItems: "center",
//               justifyContent: "center",
//               borderRadius: 60,
//               alignSelf: "center",
              
//             }}
//           >
//             <Label>Key Pair Generation</Label>
//             </View>
//             <Form>

//               <Item floatingLabel style={{
//                 paddingTop:10
//               }}>
//                 <Label>mnemonic</Label>
//                 <Input type="text" name="mnem" value={this.state.mnemonic} />
//               </Item>

//               <Item floatingLabel style={{
//                 paddingTop:10
//               }}>
//                 <Label>PrivateKey</Label>
//                 <Input type="text" name="pri" value={this.state.privatekey} />
//               </Item>

//               <View
//                 style={{
//                   // backgroundColor: "#bcbec1",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   borderRadius: 60,
//                   alignSelf: "center",
                  
//                   paddingTop:20
//                 }}
//               >
//                 <Button dark onPress={() => {
//                   console.log(this.state)
//                   Clipboard.setString( JSON.stringify(this.state) );
//                 }}><Text> Copy </Text></Button>
//               </View>
              

//               <Item floatingLabel style={{
//                 paddingTop:10
//               }}>
//                 <Label>Enter Account Name</Label>
//                 <Input type="text" name="acc_name" onChangeText={e => {
//                   key_name = e;
//                     // console.log(getAcc(e));
                    
//                 }} />
//               </Item>

//               <View
//                 style={{
//                   // backgroundColor: "#bcbec1",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   borderRadius: 60,
//                   alignSelf: "center",
//                   marginTop: 3,
//                   paddingTop:30
//                 }}
//               >
//               <Button dark onPress={() => {
//                 this.key_gen();
//                 this.props.navigation.navigate("SignIn")
//               }}><Text> Create </Text></Button>
//             </View>
              
//             </Form>
            
//           </Content>
//         </Container>        
              
//       );
//   }
// }

// var styles = StyleSheet.create({

// Text1: {
//       marginTop : 10,
//       color: '#800080',
//       alignSelf: 'center'
//     },
//     Text2: {
//       color: '#800080',
//       alignSelf: 'center'
//     },
//     FormLabel : {
//       color : '#000000',
//       fontWeight: '300'
//     }

// });



import React from "react";
import { View, Image, StyleSheet, KeyboardAvoidingView, Clipboard ,ScrollView} from "react-native";
import { Button, FormLabel, FormInput } from "react-native-elements";
import * as eos from './eosconfig';

var key_name = ''


export default class KeyPair extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            "mnemonic": '',
            "privatekey": '',
            "publickey": '',
          };
    }

  static navigationOptions = {
    header:null
  };

  
  key_gen() 
  {
    // alert(key_name)
    if(key_name.length == 12){
      eos.murmurSignup(key_name, this.state.publickey)
      this.props.navigation.navigate("SignIn")
    }
  }

  componentDidMount()
  {
    console.log("KeyPair")
    eos.generateMnemonic().then(mnem => {
      eos.generateSeedPrivKey(mnem).then(pri => {
        eos.fromPrivToPub(pri).then(pub => {
          this.setState({
            "publickey": pub,
            "privatekey": pri,
            "mnemonic": mnem,
          })
          console.log("Done: "+mnem+" "+pri+" "+pub)
        }).catch(err => alert("An error occurred"));
      }).catch(err => alert("An error occurred"));
    }).catch(err => alert("An error occurred"));

  }

  render() {
    return (

  <KeyboardAvoidingView
        style={{
          backgroundColor: '#FFFFFF',
         
          alignItems: 'center',
         
        }}
        
      >
    <View><ScrollView>
  <View style={{width:350,height:450,marginTop:60 }}>
 
      <View
          style={{
            // backgroundColor: "#bcbec1",
            
            width: 40,
            height: 40,
            borderRadius: 40,
            alignSelf: "center",
          
          }}
        >
      <Image
          source={require('../images/murmur_logo.png')}
          style={{width: 40, height: 40}}
        />
      </View>
      <FormLabel
        labelStyle={styles.FormLabel}
      >MNEMONIC</FormLabel>
      <FormInput value={this.state.mnemonic}  editable={false}  />
      <FormLabel
        labelStyle={styles.FormLabel}
      >PRIVATE KEY</FormLabel>
      <FormInput  value={this.state.privatekey}  editable={false} />
      
      <Button
        buttonStyle={{ marginTop: 10 }}
        backgroundColor="#56A2FF"
        title="COPY"
        onPress={() => {
          Clipboard.setString( JSON.stringify(this.state) );
        }}
      />
   
      <FormLabel
      labelStyle={styles.FormLabel}
      >ACCOUNT NAME</FormLabel>
      <FormInput  name="acc_name"  placeholder="Accont_Name..." onChangeText={e => { key_name = e; }}/>
      
      <Button
        buttonStyle={{ marginTop: 10 }}
        backgroundColor="#56A2FF"
        title="CREATE"
        onPress={() => {
          this.key_gen()
        }}
      />
     
  </View>
  </ScrollView></View>
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




