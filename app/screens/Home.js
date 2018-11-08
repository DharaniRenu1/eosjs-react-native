 
import React from "react";
import { View, ScrollView, Image, TouchableOpacity,RefreshControl } from "react-native";
import { Card,  Text } from "react-native-elements";
import { onSignOut } from "../auth";
import { CardItem, Left, Body, Right} from 'native-base';
import { Container, Header, Title, Button, Icon, Content, Footer, FooterTab, Badge} from "native-base";

 
 import {Snoop,Yell,Comments} from './eos';

import { onSetPvt, list_acc, onSetusername, getusername ,private_key} from "../auth";


var Murmurs = [];

var Object_result = []; 
var Object_tx_id = [];
var snoop_count_arr = [];
var exact_snoop_arr = [];

var comment_c = 0;
var yell_c  = 0;
var snoop_c  = 0;
var refresh_len = 0;
 var keyindex = 0;



 var name;  
 var length1;


export default class Home extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            author: '',
            content: '',
            visiblity: 1,
            refreshing: false,
            Murmurs:[],
            Initial_len : 0,
          };
        
       
    }
componentDidMount()
{
   
this.fun();
getusername().then(res => {

      this.setState({author : res});
})

};




 fun = async()=>
{
  var a = 0;
 getusername().then(res => {
         name= res


        
    fetch('http://murmurjungleapi.wandx.co/api/murmurTimeline',
     {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
                 
                  "account_name" : name
                
          })

    }) .then((res) => {
      res.json().then(resJson=>{
       let as=Object.keys(resJson)
          a = Object.values(resJson).length;
         
          console.log(resJson);

          this.setState({Initial_len : a - 1});
        
       
          console.log("length" + a);



     



           
           
          
           for(var i = 0;i<a - 1;i++)
            {

             
             
                comment_c = (typeof Object.values(resJson)[i].comment_count === 'undefined') ? 0 : Object.values(resJson)[i].comment_count;
                snoop_c = (typeof Object.values(resJson)[i].snoop_count === 'undefined') ? 0 : Object.values(resJson)[i].snoop_count;
                yell_c = (typeof Object.values(resJson)[i].yell_count === 'undefined') ? 0 : Object.values(resJson)[i].yell_count;


                 Murmurs.push({
                    key: keyindex,
                    username: Object.values(resJson)[i].account_name ,
                    message: Object.values(resJson)[i].message,
                    transid:Object.keys(resJson)[i],
                    snoop: snoop_c,
                    yell: yell_c,
                    comments: comment_c,
                })
                 
                keyindex++;





            }



              this.setState({

      Murmurs: Murmurs

    });

            


      }).catch(err => console.log(err))
    }).catch((error) => {
        console.error(error);
    });
     })
}

PostYell = (id) =>{
    
  

  Yell(this.state.author, Murmurs[id].transid,"worst guys",1);
}

  refresh = async() => {

  
    this.Update_check().then(() => {this.setState({refreshing: false})});
    this.setState({refreshing: true});
    
  }

  

  Update_check = async() => {
    var a = 0;

    fetch('http://murmurjungleapi.wandx.co/api/murmurTimeline',
     {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
                 
                  "account_name" : this.state.author
                
          })

    }) .then((res) => {
      res.json().then(resJson=>{
       let as=Object.keys(resJson)
          a = Object.values(resJson).length;
          length1 = a;
          console.log(resJson);


          console.log("length" + length1);
           

          if(length1 > this.state.Initial_len){
            refresh_len = length1 - this.state.Initial_len;

            for(var i=0;i<refresh_len;i++){

                 comment_c = (typeof Object.values(resJson)[i + this.state.Initial_len].comment_count === 'undefined') ? 0 : Object.values(resJson)[i + this.state.Initial_len].comment_count;
                snoop_c = (typeof Object.values(resJson)[i + this.state.Initial_len].snoop_count === 'undefined') ? 0 : Object.values(resJson)[i + this.state.Initial_len].snoop_count;
                yell_c = (typeof Object.values(resJson)[i + this.state.Initial_len].yell_count === 'undefined') ? 0 : Object.values(resJson)[i + this.state.Initial_len].yell_count;


                Murmurs.push({
                    key: keyindex + 1,
                    username: Object.values(resJson)[i + this.state.Initial_len].account_name ,
                    message: Object.values(resJson)[i + this.state.Initial_len].message,
                    transid:Object.keys(resJson)[i + this.state.Initial_len],
                    snoop: snoop_c,
                    yell: yell_c,
                    comments: comment_c,
                })

                keyindex++;
            }



this.setState((previousState) => ({

      Murmurs: (previousState.Murmurs,Murmurs)
    }));
this.setState({Initial_len : this.state.Initial_len + length1});


          }
       
 
          
      }).catch(err => console.log(err))
    }).catch((error) => {
        console.error(error);
    });

      
  }



postSnoop = (id) =>
{

   
    Snoop(this.state.author,Murmurs[id].transid,1);
    
}


// checkSnoop = (id) => {

//         fetch('http://murmurjungleapi.wandx.co/api/getSnoopsForMurmur',
//      {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
                 
//                   "murmur_id" : Murmurs[id].transid
                
//           })

//     }) .then((res) => {
//       res.json().then(resJson=>{
//        let as=Object.keys(resJson)
//           a = Object.values(resJson).length;
//           //length1 = a;
//           console.log(resJson);


       
 
          
//       }).catch(err => console.log(err))
//     }).catch((error) => {
//         console.error(error);
//     });

// }
  static navigationOptions = {
   
    header:null
  };
  render() {

    return (

      <Container>
           
        <Header tabUnderlineStyle={{opacity:0}} transparent style={{backgroundColor:"#3B21FF"}} barStyle="light-content"   >
          <Left>
            <Button transparent onPress={() => {
         this.props.navigation.navigate("Profile");
        }}>
              <Icon name='menu'/>
            </Button>
          </Left>
          <Body>
            <Title>Murmur</Title>
          </Body>
          <Right>
            
            
            <TouchableOpacity onPress={() => {
         this.props.navigation.navigate("Create");
        }}>
           <Image   source={require('../images/plus.png')}
                           style={{width: 40, height: 35}}/>
                        
            </TouchableOpacity>
          </Right>
        </Header>
      <Content
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.refresh}
          />
        }
      >

       {this.state.Murmurs.map(({key, username, message, snoop, yell, comments,transid  }) => (

         <CardItem key={key} style={{ marginTop: 0, marginBottom: -15 }}>

            <Body>

                <CardItem style={{ marginLeft: -20, marginTop: -10}}>
                <Image

                            source={require('../images/avatar.png')}

                            style={{ backgroundColor: "#56A2FF", width: 35, height: 35, borderRadius: 40 }}

                        />

                        <Text style={{ color: "#56A2FF", fontSize: 16, marginLeft: 20 }}>{username}</Text>

                   

                </CardItem>

                <CardItem style={{ marginLeft: 40, marginTop: -20 }}>

                    <Body style={{ marginLeft: -5, marginTop: -10 }}>

                        

                        <Text style={{ color: "black", fontSize: 14, marginRight: -15 }}>{message}</Text>

                        <CardItem >

                            <TouchableOpacity onPress={() => {this.postSnoop(key)}} style={{height: 20, width: 55, marginLeft: -25}} >

                                <Image source={require('../images/snoop.png')} style={{height: 20, width: 35, marginLeft: 15}}
                                />

                            </TouchableOpacity>

                            <Text style={{ color: "black", fontSize: 14, marginLeft: 10 }}>{snoop}</Text>



                            <TouchableOpacity onPress={() => {this.PostYell(key)}} style={{height: 20, width: 55, marginLeft: 10}}>

                                <Image source={require('../images/yell.png')} style={{height: 20, width: 20, marginLeft: 20}}/>

                            </TouchableOpacity>

                            <Text style={{ color: "black", fontSize: 14, marginLeft: -5 }}>{yell}</Text>



                            <TouchableOpacity onPress={() => {
           this.props.navigation.navigate("Comments",{transid:transid});
        }} style={{height: 20, width: 55, marginLeft: 10}}>

                                <Image source={require('../images/comment.png')} style={{height: 20, width: 20, marginLeft: 20}}/>

                            </TouchableOpacity>

                            <Text style={{ color: "black", fontSize: 14, marginLeft: -5 }}>{comments}</Text>



                        </CardItem>

                       



                        <Body>

                            

                      
                        </Body>



                    </Body>

                </CardItem>

            </Body> 

        </CardItem>

        

    ))} 
     
    </Content>      
          <Footer >
          <FooterTab  style={{backgroundColor:"#ffffff"}}   >
            <Button transparent onPress={() => {
this.props.navigation.navigate("Home");
        }}>
              <Image
          source={require('../images/murmur_logo.png')}
          style={{width: 30, height: 30}}
        />
            </Button>
            <Button  onPress={() => {
         this.props.navigation.navigate("Search");
        }}>
              <Image
          source={require('../images/search.png')}
          style={{width: 30, height: 30}}
        />
            </Button>
            <Button transparent onPress={() => {
          this.props.navigation.navigate("Wishper");
        }}>
              <Image
          source={require('../images/wishper.png')}
          style={{width: 40, height: 40}}
        />
            </Button>
            
           
          </FooterTab>
        </Footer>

      </Container>
      );
  }
}

