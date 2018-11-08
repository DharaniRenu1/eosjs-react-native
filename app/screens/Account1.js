import React from "react";  
import { View,Text,Image,StyleSheet,KeyboardAvoidingView,TouchableHighlightm,TouchableOpacity } from "react-native";
import { Card,  FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";
import { Container,Content,CardItem,Header,Body,Right,Left,Title,Icon,Button } from 'native-base';

export default class Account1 extends React.Component {
  static navigationOptions = {
   
    header:null
  };
  render() {
    return (
      <Container  style={{backgroundColor:"#ffffff"}} >
    <Header  tabUnderlineStyle={{opacity:0}}  style={{backgroundColor:"#3B21FF"}} barStyle="light-content">
          <Left>
            <Button transparent onPress={() => {
          this.props.navigation.navigate("Profile");
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
        <Content>
          <Content style={{marginTop:1,padding: 7}}>
                <Card style={{borderColor: 'black' ,borderRadius: 10}}>

                     <CardItem  style={{backgroundColor:'yellow',borderBottomLeftRadius: 10, borderBottomRightRadius: 10,borderWidth:1,borderColor:"#000000" }}>
                          <Text style={{fontSize:16,color:"#000000"}}>
                              Delagated Friends
                          </Text>
                    </CardItem>

         
                  

                      <Card>
                      <Text style={{marginLeft:40}}>FRIEND1</Text>

                       <FormLabel>NAME:</FormLabel>
                      <FormInput placeholder="SAM" ></FormInput>

                      <FormLabel >PUBLIC KEY:</FormLabel>
                      <FormInput placeholder="EOS00000000000000xxxxxx"></FormInput>
                          
                  
                   
                         </Card>    
                       
                           <Card>
                      <Text style={{marginLeft:40}}>FRIEND2</Text>

                       <FormLabel>NAME:</FormLabel>
                      <FormInput placeholder="ALX"></FormInput>

                      <FormLabel >PUBLIC KEY:</FormLabel>
                      <FormInput placeholder="EOS00000000000000xxxxxx"></FormInput>
                          
                </Card>    
                   
                  </Card>

                <View style={{marginTop:5}}>
                    
                    <Text style={{marginTop:8,fontSize:16}}>
                            If you are ever locked out, you can always use your back-up phrase to 
                            recover your account, which you have noted own manually.
                    </Text>                
                    
                </View>
               
          </Content>
          <TouchableOpacity
         style={styles.button}  onPress={() => this.props.navigation.navigate("Account2")}
        
       >
         <Text style={{   color:"white",
    fontSize:15}} > NEXT </Text>
       </TouchableOpacity>
        </Content>

  </Container>
      );
  }
}


 const styles = StyleSheet.create({
 
  button: {
    alignItems: 'center',
    backgroundColor: '#56A2FF',
    padding: 10,
    width:100,
    height:40,
    marginLeft:125,
    color:"white",
    fontSize:15,
   
    
      
  }
})
