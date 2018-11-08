import React from "react";



import { View, ScrollView, Image, TouchableOpacity ,StyleSheet} from "react-native";



import { Card,  Text } from "react-native-elements";



import { onSignOut ,getusername} from "../auth";



import { CardItem, Left, Body, Right,Header ,Button,Icon,Textarea} from 'native-base';


import eosjs from './eosclient';


var j=0;



var i=0;



var hidden = true; 



var length1;
var id;



var comments;

var Murmur=[];



var Murmurs = [];

  function messagechange (event)

  {

    comments = event.nativeEvent.text;

  }



var trans;


// fun()

// function fun(id)
// {
//   //alert("abi")


//      fetch('http://murmurjungleapi.wandx.co/api/getCommentsByMurmurId', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//        body: JSON.stringify({

//              "murmur_id" : id

//           })
   
        
//     }) .then((res) => res.json())
//     .then((resJson) => {
//         var keyindex = 0;


//         //alert(resJson[0].commentDatas.length)

        

//         // length1=resJson[0].commentDatas.length;

           
          

//             a = Object.values(resJson).length;

//             console.log(a);
          

//         for(var i=0;i<a;i++)

//               {    

                  

//                  Murmurs.push({

//                     c_key: keyindex,

//                     from: Object.values(resJson)[i].account_name,

//                     comment: Object.values(resJson)[i].comment

//                 })

//             // console.log(Object.values(resJson)[i].account_name);
//             // console.log(Object.values(resJson)[i].comment);


//                 keyindex++;



//               }
            
//     })
//     .catch((error) => {
//         console.error(error);
//     });
// }


export default class Comments extends React.Component {



  constructor(props)

  {

    super(props);

    this.state = {key: '',

                    address: '',

                    message: '',

                    yell:'',

                    snoop: '',

                    comments:'',

                    Murmurs:[],

                    comment : '',

                    author : ''
                };

  }

 static navigationOptions = {

   

    header:null

  };

 componentWillUnmount() 

 {

  i=0;

  for(j=0;j<length1;j++)

  {

       this.state.Murmurs.pop();

  }

}

 

handleChange = e => {
    var value = e.nativeEvent.text;
    this.setState({comment: value});
    
}


comment = (id) => {
    eosjs.transaction(this.state.author,'comment', {
        from: this.state.author,
        murmur_id: id,
        comment: this.state.comment
       })
}


fun = (id) => {

     fetch('http://murmurjungleapi.wandx.co/api/getCommentsByMurmurId', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
       body: JSON.stringify({

             "murmur_id" : id

          })
   
        
    }) .then((res) => res.json())
    .then((resJson) => {
        var keyindex = 0;


        //alert(resJson[0].commentDatas.length)

        

        // length1=resJson[0].commentDatas.length;

           
          

            a = Object.values(resJson).length;
            length1 = a;
            console.log(a);
          

        for(var i=0;i<a;i++)

              {    

                  

                 Murmurs.push({

                    c_key: keyindex,

                    from: Object.values(resJson)[i].account_name,

                    comment: Object.values(resJson)[i].comment

                })

            // console.log(Object.values(resJson)[i].account_name);
            // console.log(Object.values(resJson)[i].comment);


                keyindex++;



              }

              this.setState({Murmurs : Murmurs});
            
    })
    .catch((error) => {
        console.error(error);
    });
}

componentDidMount(){

  this.fun(id);

  getusername().then(res => {

      this.setState({author : res});
  });
}

  render() {

        const { navigation } = this.props;



const transid = navigation.getParam('transid', '');

id = transid;






    return (

  

  <View style={{ backgroundColor:"#ffffff"}} >

    <Header  tabUnderlineStyle={{opacity:0}}  style={{backgroundColor:"#3B21FF"}} barStyle="light-content">

          <Left>

            <Button transparent onPress={() => {

          this.props.navigation.navigate("SignedIn");

        }}>

              <Icon name='arrow-back'  />

            </Button>

          </Left>

          <Body>

           

          </Body>

          <Right>

          

          </Right>

        </Header>

  <ScrollView>

  <CardItem key={this.state.key} style={{ marginTop: 0, marginBottom: -15 }}>



            <Body>




                <CardItem style={{ marginLeft: 35, marginTop: -20 }}>



                    <Body style={{ marginLeft: -5, marginTop: -10 }}>


                        <Body>

                          {this.state.Murmurs.map(({ c_key, from, comment}) => (



                            <CardItem key={c_key}>



                                <Body>



                                    <CardItem style={{ marginLeft: -20, marginTop: -10}}>

                                         <Image



                                                source={require('../images/avatar.png')}



                                                style={{ backgroundColor: "#56A2FF", width: 20, height: 20, borderRadius: 40 }}



                                            />



                                            <Text style={{ color: "#56A2FF", fontSize: 16, marginLeft: 15 }}>{from}</Text>



                                    



                                    </CardItem>



                                    <CardItem style={{ marginLeft: 30, marginTop: -10, marginBottom: -20 }}>



                                        <Body style={{ marginLeft: -15, marginTop: -10 }}>




                                            <Text style={{ color: "black", fontSize: 14, marginRight: -20 }}>{comment}</Text>

                                            

                                        </Body>



                                    </CardItem>



                                </Body> 



                            </CardItem>



                            ))}

                          </Body>

                        <CardItem>

                              <Textarea style={{ width:200,marginTop:-35,height:40}} rowSpan={2} bordered placeholder="comments here.."

                                  onChange={this.handleChange}    />

                             <TouchableOpacity

                             style={styles.button} onPress={()=>{this.comment(id);this.props.navigation.navigate("Home")}}

                             >

                            <Text style={{   color:"white",padding:5,

                           fontSize:15,}}  > Comment </Text>

                            </TouchableOpacity>



                         </CardItem>

                   </Body>



                </CardItem>



            </Body> 



        </CardItem>

     </ScrollView>



  </View>

      );

  }

}

const styles = StyleSheet.create({

 

  button: {

    alignItems: 'center',

    backgroundColor: '#56A2FF',

    width:80,

    height:30,

    color:"white",

    marginTop:45,

    marginLeft:-50  

  }

})
