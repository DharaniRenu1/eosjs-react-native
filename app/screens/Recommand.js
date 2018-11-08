import React from "react";
import { View, ScrollView, Image, TouchableOpacity,ToolbarAndroid,StyleSheet,TextInput } from "react-native";
import { Card ,Text } from "react-native-elements";
import { onSignOut } from "../auth";
import { CardItem, Left, Body, Right ,Form,Textarea} from 'native-base';
import {  Header,Container,Content,Item,Input,   Icon, Title,Button ,  Footer, FooterTab} from 'native-base';

const Post = [{
   name:"Alex",
   image:require('../images/avatar.png'),
   key:1,
   navi:"Message"
},
{
   name:"Alex",
   image:require('../images/avatar.png'),
   key:1,
   navi:"Message"
},
{
   name:"Alex",
   image:require('../images/avatar.png'),
   key:1,
   navi:"Message"
},
{
   name:"Alex",
   image:require('../images/avatar.png'),
   key:1,
   navi:"Message"
},
{
   name:"Alex",
   image:require('../images/avatar.png'),
   key:1,
   navi:"Message"
},

];
export default class Recommand extends React.Component {
  static navigationOptions = {
   
    header:null
  };
  render() {
    return (

 <Container  style={{backgroundColor:"#ffffff"}} >
    <View >
       <Text style={{fontSize:25,fontWeight:"500",color:"#000000",marginTop:40}}>
           Recommanded People to follow
        </Text>
        </View>
        <Content searchBar rounded style={{backgroundColor:"#ffffff"}}>
          
          <Button transparent>
           
          </Button>
          <Card >
         <View style={{ height:320,width:350}} >
         <ScrollView>
                    {Post.map(({ name, image,key,navi}) => (
       
            <CardItem key={key}>
                <Body>
                    <View >                       
                     <CardItem style={{ marginLeft:-20, marginTop:-10}}>
                        <Image 
                          source={image}
                            style={{ backgroundColor: "#56A2FF", width: 50, height: 50, borderRadius: 40 }}

                        />
                        
          <Text style={{ color: "#000000", fontSize: 22, marginLeft: 20 }} 
         
        >{name}</Text>
                   </CardItem>   
                    </View>
                </Body>
            </CardItem>

   

    ))}
    </ScrollView>
   </View>
</Card>
       <Body>
         <TouchableOpacity
         style={styles.button}  onPress={() =>this.props.navigation.navigate("SignedIn")}
        
       >
         <Text style={{   color:"white",
    fontSize:15}} > NEXT </Text>
       </TouchableOpacity>
        </Body>
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
  
    color:"white",
    fontSize:15,
    marginTop:25
 
    	
  }
})
