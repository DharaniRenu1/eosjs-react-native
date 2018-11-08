import React from "react";
import { View, ScrollView, Image, TouchableOpacity,ToolbarAndroid,StyleSheet,TextInput } from "react-native";
import { Card ,Text } from "react-native-elements";
import { onSignOut } from "../auth";
import { CardItem, Left, Body, Right ,Form,Textarea} from 'native-base';
import {  Header,Container,Content,Item,Input,   Icon, Title,Button ,  Footer, FooterTab} from 'native-base';
import SearchBar from 'react-native-search-bar';
import SearchInput, { createFilter } from 'react-native-search-filter';
import eos from './eos';
import { getusername} from "../auth";

const Post = [{
   name:"Alex",
   image:require('../images/avatar.png'),
   key:1,
   navi:"Follow"
},
{
   name:"blex",
   image:require('../images/avatar.png'),
   key:2,
   navi:"Follow"
},
{
   name:"clex",
   image:require('../images/avatar.png'),
   key:3,
   navi:"Follow"
},
{
   name:"dlex",
   image:require('../images/avatar.png'),
   key:4,
   navi:"Follow"
},{
   name:"flex",
   image:require('../images/avatar.png'),
   key:5,
   navi:"Follow"
},{
   name:"glex",
   image:require('../images/avatar.png'),
   key:6,
   navi:"Follow"
},{
   name:"flex",
   image:require('../images/avatar.png'),
   key:7,
   navi:"Follow"
},{
   name:"hlex",
   image:require('../images/avatar.png'),
   key:8,
   navi:"Follow"
},{
   name:"ilex",
   image:require('../images/avatar.png'),
   key:9,
   navi:"Follow"
},{
   name:"llex",
   image:require('../images/avatar.png'),
   key:10,
   navi:"Follow"
},{
   name:"Alex",
   image:require('../images/avatar.png'),
   key:11,
   navi:"Follow"
},{
   name:"olex",
   image:require('../images/avatar.png'),
   key:12,
   navi:"Follow"
},{
   name:"plex",
   image:require('../images/avatar.png'),
   key:13,
   navi:"Follow"
},{
   name:"slex",
   image:require('../images/avatar.png'),
   key:14,
   navi:"Follow"
},{
   name:"tlex",
   image:require('../images/avatar.png'),
   key:15,
   navi:"Follow"
},
];
const KEYS_TO_FILTERS = ['name','image', 'key','navi'];
export default class Following extends React.Component {
 constructor(props)
  {
    super(props)
    this.state={
 
      text : 'Follow',
         searchTerm: '',
         from : '',
         to : 'sriramkumar1'
 
    }
  }
  static navigationOptions = {
   
    header:null
  };
  ChangeButtonTitle=()=>
{
if(this.state.text=='Follow')
{
this.setState({

  text : 'Following'

})

this.FollowToSomeOne()
}
else
{
this.setState({

  text : 'Follow'

})
}
}

componentDidMount()
 {
  getusername().then(res => {
 
    this.setState({from :res});
  });
 }

  GetSearchname = () =>
  {
  //alert(id);
      // alert(name+" "+message);
      fetch('http://10.10.0.23:3000/api/postSnoop', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              "query" : {"from" : "balavignesh",
                       "murmur_id" : Murmurs[id].transid,
                       "likestype" : "1"}
          })
      })
        .then((response) => response.json())
        .then((responseJson) => {
          alert("finished");
          })
        .catch((error) => {
          console.error(error);
        });
  
        //setTimeout(()=> getSnoop(id),6000);
        //getSnoop(id);
  }
handleChange = (e) => {
  this.setState({searchTerm: e});
}
 

//Function for click to follow
FollowToSomeOne = () =>{

        eos.Follow(this.state.from,this.state.to);

        console.log(this.state.from,this.state.to);
}


  render() {
            const Posts = Post.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

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
            <Title>Following</Title>
          </Body>
          <Right>
          
          </Right>
        </Header>
      
        <Content>
         <SearchInput 
         
          style={styles.searchInput}
          placeholder="Type a message to search"
          onChangeText={(term) => { this.handleChange(term) }}
          />
          <Button transparent>
           
          </Button>
    

          {Posts.map(({ name, image,key,navi}) => (
       
            <CardItem key={key}>
                <Body>
                    <View >
                  
                         
                     <CardItem style={{ marginLeft: -20, marginTop: -10}}>

                        <Image
                          source={image}
                            style={{ backgroundColor: "#56A2FF", width: 50, height: 50, borderRadius: 40 }}
                        />
                        <Text style={{ color: "#000000", fontSize: 22, marginLeft: 20 }}
                         onPress={() => this.props.navigation.navigate(navi)}>{name}</Text>
                   </CardItem>   
                  
                    </View>
                </Body>
                
                <Button   style={{backgroundColor:"#56A2FF",width:95,height:35,marginTop:5}}
                                onPress={this.ChangeButtonTitle} >
               <Text style={{color:"white",fontSize:15,padding:10}}> {this.state.text}  </Text>
                </Button>
            
            </CardItem>

   

    ))}

        </Content>
        
      </Container>

      );
  }
}



const styles = StyleSheet.create({

  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  }
});