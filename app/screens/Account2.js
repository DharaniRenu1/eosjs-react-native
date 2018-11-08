import React from "react";  
import { View,Text,Image,StyleSheet,KeyboardAvoidingView,TouchableHighlight } from "react-native";
import { Card,  FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";
import { CardItem,Header,Body,Right,Left,Title,Icon,Button,Content,Container } from 'native-base';


export default class Account2 extends React.Component {
  static navigationOptions = {
   
    header:null
  };
  render() {
    return (
       <Container  style={{backgroundColor:"#ffffff"}} >
    <Header  tabUnderlineStyle={{opacity:0}}  style={{backgroundColor:"#3B21FF"}} barStyle="light-content">
          <Left>
            <Button transparent onPress={() => {
          this.props.navigation.navigate("Acoount1");
        }}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Acoount Recovery</Title>
          </Body>
          <Right>
          
          </Right>
        </Header>
      
           <Content style={{marginTop:20,padding: 7}}>
                <Card style={{borderColor: 'black' ,borderRadius: 10}}>

                    <CardItem style={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                            <Text style={{fontSize:16}}>
                                We highly recommend you save your back-up phrase
                                with two truested friends,by entering their public keys.
                            </Text>
                    </CardItem>
         
                  
                   
                   <CardItem  style={{backgroundColor:'yellow',borderBottomLeftRadius: 10, borderBottomRightRadius: 10,borderWidth:1,borderColor:"#000000"}}>
                          <Text style={{fontSize:16}}>
                              Delagate Friends
                          </Text>
                    </CardItem>
                  
                </Card>

                <View style={{marginTop:220}}>
                  
                    <Text style={{fontSize:16}}>
                            If you are ever locked out, you can always use your back-up phrase to 
                            recover your account, which you have noted own manually.
                    </Text>                
                    
                </View>
               
          </Content>


  </Container>
 
      );
  }
}




 