import React from "react";
import { View, ScrollView, Image, TouchableOpacity,ToolbarAndroid,StyleSheet,TextInput } from "react-native";
import { Card ,Text } from "react-native-elements";
import { onSignOut } from "../auth";
import { CardItem, Left, Body, Right ,Form,Textarea} from 'native-base';
import {  Header,Container,Content,Item,Input,   Icon, Title,Button ,  Footer, FooterTab} from 'native-base';
import SearchInput, { createFilter } from 'react-native-search-filter';

const Post = [{
   name:"Alex",
   image:require('../images/avatar.png'),
   key:1,
   navi:"Chat"
},
{
   name:"blex",
   image:require('../images/avatar.png'),
   key:1,
   navi:"Chat"
},
{
   name:"vlex",
   image:require('../images/avatar.png'),
   key:1,
   navi:"Chat"
},
{
   name:"slex",
   image:require('../images/avatar.png'),
   key:1,
   navi:"Chat"
},
{
   name:"ulex",
   image:require('../images/avatar.png'),
   key:1,
   navi:"Chat"
},

];
const KEYS_TO_FILTERS = ['name','image', 'key','navi'];
export default class Wish_search extends React.Component {
  constructor(props)
  {
    super(props)
    this.state={
 
            searchTerm: ''
 
    }
  }
  static navigationOptions = {
   
    header:null
  };
  handleChange = (e) => {
  this.setState({searchTerm: e});
}
 
  render() {
      const Posts = Post.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

    return (
      <Container  style={{backgroundColor:"#ffffff"}} >
    <Header  tabUnderlineStyle={{opacity:0}}  style={{backgroundColor:"#3B21FF"}} barStyle="light-content">
          <Left>
            <Button transparent onPress={() => {
         this.props.navigation.navigate("Wishper");
        }}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Search</Title>
          </Body>
          <Right>
          
          </Right>
        </Header>
 
        <Content searchBar rounded style={{backgroundColor:"#ffffff"}}>
          <SearchInput 
         
          style={styles.searchInput}
          placeholder="Type a message to search"
          onChangeText={(term) => { this.handleChange(term) }}
          />
          <Button transparent>
           
          </Button>
          <Card >
         <View style={{ height:370,width:350}} >
         <ScrollView>
                    {Posts.map(({ name, image,key,navi}) => (
            <CardItem key={key}>
                  
                <Body>
                    <View  onPress={() => this.props.navigation.navigate(navi)}>                       
                     <CardItem style={{ marginLeft:-20, marginTop:-10}} >
                      <TouchableOpacity  onPress={() => this.props.navigation.navigate(navi)}>
                        <Image 

                          source={image}
                            style={{ backgroundColor: "#56A2FF", width: 50, height: 50, borderRadius: 40 }}

                        /></TouchableOpacity>
                        
          <Text style={{ color: "#000000", fontSize: 22, marginLeft: 20 }} 
         onPress={() => this.props.navigation.navigate(navi)}
        >{name}</Text>

                   </CardItem>   
                    </View>
                </Body>
            </CardItem>

   

    ))}
    </ScrollView>
   </View>
</Card>
      
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
    marginTop:10,
    color:"white",
    fontSize:15,
    marginTop:30
 
    	
  },
   searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  }
})
