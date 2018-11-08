
import React, { Component } from 'react';
import { Image,TouchableOpacity,View } from 'react-native';
import { Container, Header, Content, Accordion, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

const Posts = [
    {
        key: 1,
        userimg: require('../images/avatar.png'),
        name:"UserName",
        follow:"23",
        following:"23",
    }
];
const Post = [

    {

        key: 1,

        name: "avatar1",

        avatarimg: require('../images/avatar.png'),

        status: "Let's don't do it again and again, posting the same, saying the same and the same. It's pointless!",

        snoop: 4,

        yell: 8,
}, {

        key: 1,

        name: "avatar1",

        avatarimg: require('../images/avatar.png'),

        status: "Let's don't do it again and again, posting the same, saying the same and the same. It's pointless!",

        snoop: 4,

        yell: 8,
}];

export default class Follow extends React.Component {
  constructor(props)
  {
    super(props)
    this.state={
 
      text : 'Follow'
 
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
}
else
{
this.setState({

  text : 'Follow'

})
}
}
  render() {
    return (
      <Container>
 <Header  tabUnderlineStyle={{opacity:0}}  style={{backgroundColor:"#3B21FF"}} barStyle="light-content">
          <Left>
            <Button transparent onPress={() => {
         this.props.navigation.navigate("Search");
        }}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
           
          </Body>
          <Right>
          
          </Right>
        </Header>
  <Content>

 {Posts.map(({key,userimg,name,follow,following})=>(

 <CardItem key={key} style={{borderTopLeftRadius: 10, borderTopRightRadius: 10,borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                  <Left>
                  <Image source={userimg}  style={{height: 100, width: 100,borderRadius:100,borderColor:'black',borderWidth:0.5}}/>
                  <Text>
                  {'\n'}
                  <Text style={{marginBottom:30,fontFamily:'Roboto',fontSize:23,fontWeight:"500",marginLeft:15}}>
                     {name}</Text>

                  {'\n'}{'\n'}
                    </Text>
                    </Left>
                   <Text style={{marginTop:35,marginRight:10,marginLeft:-35}}>
                          {follow} Followers
                      </Text>
                  
                       
                      
                  

                 <Right>
                    <Text style={{marginTop:35,marginLeft:10}} >{following}Following</Text>
                     
                 </Right>
                 
                 

                
               </CardItem>


  ))}
 
               <CardItem style={{height:60,marginTop:-30}}>
              
                    <TouchableOpacity onPress={() => {
         this.props.navigation.navigate("Chat");
        }}>
           <Image source={require('../images/wishper.png')}
                           
                            style={{width: 40, marginLeft:150,height: 35,marginTop:20}}
                        />
                        
                    
            </TouchableOpacity>
                               
                 <Button  style={{backgroundColor:"#56A2FF",width:110,height:35,marginLeft:20,marginTop:5}}
                                onPress={this.ChangeButtonTitle} >
               <Text style={{color:"white",fontSize:13}}> {this.state.text}  </Text>
                </Button>
            
                </CardItem>
 {Post.map(({name, avatarimg, status, snoop, yell, key,})=>(
<CardItem key={key}>
             
               
                <Left>

                    <Image source={avatarimg} style={{height: 50, width: 50,marginBottom:90,borderColor:'black',borderRadius:50,borderWidth:0.5}}/>

                </Left>
                <Right>

                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#56A2FF', width: 250}}>{name}</Text>

                    <Text style={{ width: 250, flex: 1}}>{status}</Text>

                    <CardItem style={{ width: 250, flex: 1}}>

                      <Left>

                      <Text>                        
                          <Image source={require('../images/snoop.png')} style={{height: 20, width: 30,marginBottom:10}}/>

                          <Text>{snoop}</Text>

                       </Text>

                      </Left>

                      <Body style={{marginLeft:30}}>
                        <Text>
                       
                          <Image source={require('../images/yell.png')} style={{height: 20, width: 20,marginBottom:10,}}/>

                          <Text>{yell}</Text>
                          </Text>
                       

                      </Body>
                      <Right style={{marginLeft:-10}}>
                       <Text>
                       
                          <Image source={require('../images/comment.png')} style={{height: 20, width: 20,marginBottom:10}}/>

                          <Text>{yell}</Text>
                          </Text>
                      </Right>
                    </CardItem>
                  </Right>

             
</CardItem>

  ))}
        
              
        </Content>

      </Container>

      );
  }
}




  