import React from "react";
import { View, ScrollView, Image, TouchableOpacity,ToolbarAndroid,StyleSheet,TextInput } from "react-native";
import { Card ,Text } from "react-native-elements";
import { onSignOut } from "../auth";
import { CardItem, Left, Body, Right ,Form,Textarea} from 'native-base';
import {  Header,   Icon, Title,Button ,  Footer, FooterTab} from 'native-base';
import {getusername} from "../auth";
import Toast from 'react-native-simple-toast';



import{postMurmur} from './eos';

var Posts =[];

 
  export default class Create extends React.Component {
  static navigationOptions = {
   
    header:null
  };

  constructor(props) {
    super(props);
    this.state = {
      author: '',
      content: '',
      visiblity: 1,
    };
  }


 
  handleChange = e => {
    var value = e.nativeEvent.text;
    this.setState({content: value});
    
}

    


createPosts = () => {
   postMurmur(this.state.author,this.state.content,"dummy_url",1).then(c => {

          if(c === true){
            this.setState({content : ''});
            Toast.show('The murmur is posted successfully', Toast.LONG);
            this.props.navigation.navigate("Home")
          }
   }).catch(err => {

          if(err === false){
              Toast.show('Network Error', Toast.LONG);
          }
   })
   
   
}

 componentDidMount()
 {

  getusername().then(res => {


    Posts=[{
      key:1,
      name:res,
      img:require('../images/avatar.png'),
      comm:"Hey...",
      }];
        this.setState({author:res});
    


  })
  
 }




  render() {
   
    return (
     
<View>


        <Header  tabUnderlineStyle={{opacity:0}}  style={{backgroundColor:"#3B21FF"}} barStyle="light-content">
          <Left>
            <Button transparent onPress={() => {
          this.props.navigation.navigate("Home");
        }}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
           
          </Body>
          <Right>
          
          </Right>
        </Header>

 {Posts.map(({ name, img, key,comm }) => (     
            <CardItem key={key}>
             <Body>
                                <CardItem >
                                <Image source={img}  style={{ backgroundColor: "#000000", width: 50, height: 50, borderRadius: 40 }}

                                      />
<Form>  
                                      <Text style={{ color: "#000000", fontSize: 16, }}>    {name}
                                      {'\n'}
                                        </Text>

                                      <Textarea style={{ width:260, marginLeft:10}} rowSpan={3} bordered placeholder="Textarea"
                                      onChange={this.handleChange} />
           <TouchableOpacity
         style={styles.button} 
        >
         <Text style={{   color:"white",
    fontSize:15,}} onPress={() => {this.createPosts();}} > MURMUR </Text>
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