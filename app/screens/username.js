
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Accordion, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { getusername } from "../auth";

var Posts = [
    {
        key: 1,
        userimg: require('../images/avatar.png'),
        name:"Username",
        follow:"23",
        following:"23",
    }
];

var a;
var length1;

var Post = [];

export default class User extends React.Component {

      constructor(props){

            super(props);

            this.state = {

                author : '',
                Post : []
            }

      }


componentDidMount(){

getusername().then(res => {

    var name = res;

  this.setState({author : res});

  


  fetch('http://murmurjungleapi.wandx.co/api/getMurmursByAccountName',
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

        var keyindex = 0;
       

          console.log(resJson);
          console.log(Object.values(resJson)[1][0]);
          console.log(Object.values(resJson)[1].length);
          a = Object.values(resJson)[1].length;
          length1 = a;

          for(var i=0;i<Object.values(resJson)[1].length;i++){

              Post.push({

                  key : keyindex,
                  name : Object.values(resJson)[1][i].account_name,
                  avatarimg : require('../images/avatar.png'),
                  status : Object.values(resJson)[1][i].message,
                  snoop : 4,
                  yell : 8




              })

              keyindex++;

          }


          this.setState({Post : Post});

            


      }).catch(err => console.log(err))

    }).catch(err => console.log(err));

})





}



 componentWillUnmount() 

 {

  i=0;

  for(j=0;j<length1;j++)

  {

       this.state.Post.pop();

  }

}



  static navigationOptions = {
   
    header:null
  };
  render() {
    return (
      <Container>
  <Header  tabUnderlineStyle={{opacity:0}}  style={{backgroundColor:"#3B21FF"}} barStyle="light-content">
          <Left>
            <Button transparent onPress={() => {
          navigation.navigate("Profile");
        }}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
           
          </Body>
          <Right>
          
          </Right>
        </Header>
  <Content style={{marginTop:2}}>

 {Posts.map(({key,userimg,name,follow,following})=>(

 <CardItem key={key} style={{marginTop:10, borderTopLeftRadius: 10, borderTopRightRadius: 10,borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                  <Left>
                  <Image source={userimg}  style={{height: 100, width: 100,borderRadius:100,borderColor:'black',borderWidth:0.5}}/>
                  <Text>
                  {'\n'}
                  <Text style={{marginBottom:20,fontFamily:'Roboto',fontWeight:'bold',fontSize:20,fontWeight:"500",marginLeft:15}}>
                  {this.state.author}</Text>
                  {'\n'}{'\n'}
                   <Text>
                          {follow} Followers
                      </Text>
                    </Text>
                  </Left>           
                      
                  

                 <Right>
                    <Text style={{marginTop:68}} >{following}Following</Text>
                 </Right>
                
               </CardItem>


  ))}
  <CardItem style={{backgroundColor:'#56A2FF',height:30}}>

                    <Text style={{color:'white',fontFamily:'Roboto',fontSize:18}}>
                         All activity
                    </Text>
                      <CardItem style={{width:500,height:30,marginLeft:10}}>
                      </CardItem>
                </CardItem>
       
 {this.state.Post.map(({name, avatarimg, status, snoop, yell, key,})=>(
<CardItem key={key}>
             

               
                <Left>

                    <Image source={avatarimg} style={{height: 50, width: 50,marginBottom:30,borderColor:'black',borderRadius:50,borderWidth:0.5}}/>

                </Left>
                <Right>

                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#56A2FF', width: 250}}>{name}</Text>

                    <Text style={{ width: 250}}>{status}</Text>

                    <CardItem style={{ width: 250}}>

                      <Left>

                      <Text>                        
                          <Image source={require('../images/snoop.png')} style={{height: 20, width: 30}}/>

                          <Text>{snoop}</Text>

                       </Text>

                      </Left>

                      <Body>
                        <Text>
                       
                          <Image source={require('../images/yell.png')} style={{height: 20, width: 20}}/>

                          <Text>{yell}</Text>
                          </Text>
                       

                      </Body>

                    </CardItem>
                  </Right>

             
</CardItem>

  ))}
        
              
        </Content>

      </Container>
      );
  }
}



