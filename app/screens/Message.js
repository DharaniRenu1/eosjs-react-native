
import React from "react";
import { View, ScrollView, Image, TouchableOpacity,ToolbarAndroid,StyleSheet,TextInput } from "react-native";
import { Card ,Text } from "react-native-elements";
import { onSignOut } from "../auth";
import { CardItem, Left, Body, Right ,Form,Textarea} from 'native-base';
import {  Header, Item,Icon, Title,Button ,  Footer, FooterTab} from 'native-base';


  const Posts =[{
  	key:1,
  	name:"UserName",
  	img:require('../images/avatar.png'),
  	comm:"Hey...",
  }];
  const to=[{
    key:1,
    to:"Alex"
  }];


export default class Message extends React.Component {

static navigationOptions = {
   
    header:null
  };  render() {
    return (
      <View>
        <Header tabUnderlineStyle={{opacity:0}}  style={{backgroundColor:"#3B21FF"}} barStyle="light-content">
          <Left>
            <Button transparent onPress={() => {
         this.props.navigation.navigate("Wish_search");
        }}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
           
          </Body>
          <Right>
          
          </Right>
        </Header>
{to.map(({key,to }) => (
       
            <CardItem key={key} >
                <Left>
                <Item style={{height:50,width:350}}>
                   <Text style={{fontSize:20,color:"gray"}}>To: </Text>
                    <Text style={{fontSize:20,color:"#000000",padding:10}}>{to}</Text>
               </Item>  
               </Left>        
             </CardItem>

 
    ))}

 {Posts.map(({ name, img, key,comm }) => (
       
           
         
            <CardItem key={key}>
             <Body>
                                <CardItem >

                         

                                      <Image

                                            source={img}

                                            style={{ backgroundColor: "#000000", width: 50, height: 50, borderRadius: 40 }}

                                      />
<Form>  
                                      <Text style={{ color: "#000000", fontSize: 16, }}>    {name}
                                      {'\n'}
                                        </Text>

                                       
                                     
                                      <Textarea style={{ width:260, marginLeft:10}} rowSpan={3} bordered placeholder="Textarea" />

                                 

                   <TouchableOpacity
         style={styles.button} onPress={()=>alert("ok")}
        
       >
         <Text style={{   color:"white",
    fontSize:15,}}  > WISHPER </Text>
       </TouchableOpacity>
                                    
                 
                          
     </Form>
                                </CardItem>
               </Body>                 
       </CardItem>

 
    ))}
      </View>

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
    marginTop:10,
    color:"white",
    fontSize:15,
    marginLeft:60

    	
  }
})