import React from "react";
import { View,Text,Image,StyleSheet,KeyboardAvoidingView, TextInput ,ScrollView} from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";
import Style from "../Styles/Style";


export default class FriendRef extends React.Component {
  static navigationOptions = {
   
    header:null
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: '#FFFFFF',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        behavior="padding"
      >
      <ScrollView>
    <View style={styles.container}>
        <Text style={styles.welcome}>
           For added safety we recommend you save your back-up phrase with two trusted friends. Enter their public keys below
        </Text>
        <View style={styles.formView}>
          <FormLabel labelStyle={styles.FormLabel}>FRIEND 1</FormLabel>
          <FormLabel labelStyle={styles.FormLabel}>NAME</FormLabel>
          <FormInput
            editable={false}
            placeholder="Friend 1 Name ..." />
          <FormLabel labelStyle={styles.FormLabel} >PRIVATE KEY</FormLabel>
          <FormInput 
            editable={false} 
            placeholder="Friend 1 Key ..." />
        </View>
         <View style={styles.formView}>
          <FormLabel labelStyle={styles.FormLabel}>FRIEND 2</FormLabel>
          <FormLabel labelStyle={styles.FormLabel}>NAME</FormLabel>
          <FormInput
            editable={false}
            placeholder="Friend 2 Name ..." />
          <FormLabel labelStyle={styles.FormLabel} >PRIVATE KEY</FormLabel>
          <FormInput 
            editable={false} 
            placeholder="Friend 2 Key ..." />
        </View>
       <View style={styles.formView}>
         <Button
            buttonStyle={{ marginTop: 10 }}
            backgroundColor="#56A2FF"
            title="NEXT"
            onPress={() => {
              onSignIn().then(() => this.props.navigation.navigate("Share"));
            }}
          />
        </View>
          <Text
             style={styles.Text1}
             onPress={() => {
              onSignIn().then(() => this.props.navigation.navigate("SignedIn"));
            }}
          >May be later</Text>
        </View>
        </ScrollView>
  </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Style.CARD_WIDTH,
    // height: Style.CARD_HEIGHT, 
    padding: Style.CARD_PADDING_X,
    paddingTop: Style.CARD_PADDING_Y,
    paddingBottom: Style.CARD_PADDING_Y,
    alignContent:'center',
    alignItems: "center",
    backgroundColor: '#FFFFFF',
  },
  header_text: {
    fontSize: Style.FONT_SIZE * 1.5 ,
    lineHeight: Style.FONT_SIZE * 1.5,
    color : '#000000'
  },
  formView: {
    marginLeft: Style.CARD_PADDING_X,
    fontSize: Style.FONT_SIZE ,
    lineHeight: Style.FONT_SIZE
  },
  FormLabel : {
      color : '#000000',
      fontWeight: '300'
    },
    CardView : {
      width:Style.CARD_WIDTH /2,
      alignItems:'center'
    },
    welcome: {
       fontSize: Style.FONT_SIZE_SMALLER,
        color: '#333333',
       textAlign: 'center',
       margin: 10,
     },
     Text1: {
      marginTop : 10,
      color: '#800080',
      alignSelf: 'center'
    }
})