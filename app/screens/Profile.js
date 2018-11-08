import React from "react";
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import { Card,  Text } from "react-native-elements";
import { onSignOut } from "../auth";
import { CardItem, Left, Body, Right } from 'native-base';
import { onSetPvt, list_acc, onSetusername, getusername ,private_key} from "../auth";

 var user = [];
import { Container, Header, Title, Button, Icon, Content} from "native-base";
const Posts = [
    {
        key: 1,
        name: "Settings",
         navi:"Settings",
        userimg: require('../images/settings_cog.png'),
    },
    {
        key: 2,
        name: "Account Recovery",
        navi:"Account1",
        userimg: require('../images/account_recovery_icon.png'),
    },
    {
        key: 3,
        name: "Invite Friends",
         navi:"Share",
        userimg: require('../images/friends.png'),
    },
    // {
    //     key: 4,
    //     name: "Logout",
    //      navi:"SignedIn",
    //     userimg: require('../images/logout_logo.png'),
    // },  
];







export default class Profile extends React.Component {
  static navigationOptions = {
   
    header:null
  };
  

  componentDidMount()
 {
  getusername().then(res => {
     user = [{
    key:1,
    user:res,
    image:require('../images/avatar.png'),
    imagee:require('../images/camera.png'),
    follow:"34",
    following:"24",
    mur:"20",
    navi:"User"
}]
 })
}
  render() {
    return (
       <View style={{ flex: 1 ,backgroundColor:"#3B21FF"}}>
<Header tabUnderlineStyle={{opacity:0}}  style={{backgroundColor:"#3B21FF",height:80}} barStyle="light-content"   >
          <Left>
            <Button transparent onPress={() => {
          this.props.navigation.navigate("Home");
        }}>
              <Icon name='arrow-back' />
              

            </Button>
          </Left>
          <Body>
            <Title>Profile</Title>
          </Body>
           <Right>
            
            
          </Right>
          
        </Header>
  <Content >
  {user.map(({user,image,follow,following,mur,key,imagee,navi}) =>
  (
      <CardItem key={key}>
               
                    <View style={{ flex: 1}}>
                    <View  style={{flexGrow:1,
   
    alignItems: 'center',
    justifyContent:'center'}}>

                        <Image source={image}  style={{height: 150, width: 150,borderRadius:100,borderColor:'black',borderWidth:0.5}}/>
                        <Image
                            source={imagee} style={{height:30,width:50, flexGrow:1,
    alignItems: 'stretch',
    justifyContent:'center',marginTop:-38,marginRight:-150}}
                            
                        />
                       
                        </View> 
                    <Text>
                    
                     <Text style={{color: "#000000", fontSize: 23,fontWeight:'500'}}
                      onPress={() => {
              onSignOut().then(() =>this.props.navigation.navigate(navi));
            }}>
                         {'\n'}
                     {user}
                     {'\n'}
                     </Text>
                     <Text style={{color: "#000000", fontSize: 18}}>    
                     <Text style={{color: "#000000", fontSize: 18}}
                                           onPress={() => {
          this.props.navigation.navigate("Followers");
        }}>{follow} </Text>followers  <Text style={{color: "#000000", fontSize: 18}}
                                           onPress={() => {
              this.props.navigation.navigate("Following");}}>{following}</Text> following {mur}  
                      <Text style={{color: "#7C2289", fontSize: 18,fontWeight:'500'}}>
                         MUR
                      </Text>
                   </Text>
                    </Text>
                    </View>       
            </CardItem>   
    ))}

    {Posts.map(({ name, userimg, key,navi }) => (
       
            <CardItem key={key}>
                <Left>
                    <View >
                    <Text>
                        <Image
                            source={userimg}
                            style={{width: 50, height: 50}}
                        />
                        <Text style={{ color: "#000000", fontSize: 20 }} 
         onPress={() =>this.props.navigation.navigate(navi)}
        >{name}</Text>
                         
                        
                    </Text>
                    </View>
                </Left>
            </CardItem>
   

    ))}
    <CardItem>
                <Left>
                    <View >
                    <Text>
                        <Image
                            source={require('../images/logout_logo.png')}
                            style={{width: 50, height: 50}}
                        />
                        <Text style={{ color: "#000000", fontSize: 20 }} 
         onPress={() => {
          onSignOut().then(() => this.props.navigation.navigate("SignIn"));
        }}
        >Logout</Text>
                         
                        
                    </Text>
                    </View>
                </Left>
            </CardItem>

    </Content>

  </View>
      );
  }
}
