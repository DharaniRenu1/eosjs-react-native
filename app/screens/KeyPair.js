import React from "react";
import { View,Text,Image,StyleSheet,KeyboardAvoidingView, TextInput,  ScrollView } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";
import Style from "../Styles/Style";
import { createStackNavigator } from 'react-navigation';

export default class KeyPair extends React.Component {
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
        <Text style={styles.header_text}>
           KeyPair Generated
        </Text>
        <View style={styles.formView}>
          <FormLabel labelStyle={styles.FormLabel}>PUBLIC KEY</FormLabel>
          <FormInput
            editable={false}
            placeholder="0XgagkjlahXXXXXXXXXXXXXX" />
          <FormLabel labelStyle={styles.FormLabel} >PRIVATE KEY</FormLabel>
          <FormInput 
            editable={false} 
            placeholder="0XgagkjlahXXXXXXXXXXXXXX" />
          <FormLabel labelStyle={styles.FormLabel} >Back-up pharse </FormLabel>
        </View>
        <View style={{marginTop:5,justifyContent:'center',alignItems:'center'}}>
          <Card>
             <TextInput style={styles.CardView}
             multiline={true}
             numberOfLines={2}
             editable={false}
             value="Orange  Ball Thread live ass fly point nose little cute big hand "/>
            </Card>
          </View>
        <View style={{marginTop:10,justifyContent:'center',alignItems:'center'}}>
          <Image source={require('../images/caution.png')} style={{height: 30, width:30}}/>
        </View>
        <View style={{marginTop:10,alignItems:'center',justifyContent:'center'}}>
            <Text> Please note down the backup. Phrase somewhere safe. it is the Only way of recovering your account. We will not store this Phrase anywhere else.</Text>
        </View>
       <View style={styles.formView}>
         <Button
            buttonStyle={{ marginTop: 10 }}
            backgroundColor="#56A2FF"
            title="NEXT"
         
             onPress={() => this.props.navigation.navigate('SignUp')}
          />
        </View>
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
    }
})