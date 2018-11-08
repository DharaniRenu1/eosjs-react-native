import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0
import "prop-types"; // 15.6.2

import eosjs from './eos';
import { getusername } from "../auth";

import {getAcc} from './eos';


var messages = [];
var from_acc_mess = [];
var form_acc_mess_map = new Map();
var from_acc_mess_bckno = [];
var to_acc_mess = [];
var to_acc_mess_map = new Map();
var to_acc_mess_bckno = [];
var time_c;
var min_c;
var sec_c;
var mapAsc;
var AMPM;
var check_acc_name;
var most_len = 0;

var keyvalue = 0;

export default class Chat extends Component {
  static navigationOptions = {
   
    header:null
  };
 
  constructor(props) {
    super(props);
    this.state = {
      from: '',
      to : 'abinavramesh',
      content: '',
      visiblity: 1,
      messages: [],
     


    };
  }

  componentDidMount()
  {
   getusername().then(res => {
  
     this.setState({from :res});
   });



   }

componentWillMount(){

  this.getWhisper();  

  getAcc('abinavramesh').then(res => console.log(res));
  getAcc('juliusantony').then(res => console.log(res));
}
   componentWillUnmount() 

 {

  i=0;

  for(j=0;j<most_len;j++)

  {

       this.state.messages.pop();

  }

}


  sendMessage = (data) => {


    eosjs.Whisper(this.state.from,this.state.to,data);
  }



  onSend(messages = []) {

    this.setState((previousState) => ({

      messages: GiftedChat.append(previousState.messages, messages),
      

    }));

  }

 



  getWhisper = () =>{

              fetch('http://murmurjungleapi.wandx.co/api/getWhispers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
   body: JSON.stringify({
    

          "from_account" : "juliusantony",
           "to_account" : "abinavramesh"
                  
})

    
}) .then((res) => res.json())
.then((resJson) => {
  
  
  var length = Object.values(resJson).length;
  most_len = length;

  for(var i=0;i<length;i++){

    from_acc_mess_bckno.push(Object.values(resJson)[i].block_number);

      var unix = Object.values(resJson)[i].createdAt;
      var time_stamp = this.Converted(unix);
      // console.log(time_stamp);

     

       time_c = (time_stamp[20]+time_stamp[21] == "AM") ? (time_stamp[11] + time_stamp[12]) : time_stamp[11];
       min_c = (time_stamp[20]+time_stamp[21] == "AM") ? (time_stamp[14] + time_stamp[15]) : (time_stamp[13] + time_stamp[14]);
       sec_c = (time_stamp[20]+time_stamp[21] == "AM") ? (time_stamp[17] + time_stamp[18]) : (time_stamp[16] + time_stamp[17]);
       AMPM = (time_stamp[20]+time_stamp[21] == "AM") ? "AM" : "PM";
        

        var form_acc = {

            key : keyvalue,
            from_account : Object.values(resJson)[i].from_account_name,
            to_account: Object.values(resJson)[i].to_account_name,
            message :  Object.values(resJson)[i].message,
            blockno :  Object.values(resJson)[i].block_number,
            date :  time_stamp[0] + time_stamp[1],
            month :  time_stamp[3] +  time_stamp[4],
            year :  time_stamp[6] +  time_stamp[7] +  time_stamp[8] +  time_stamp[9],
            time : time_c,
            min : min_c,
            second : sec_c,
            zone : AMPM,
            time : Object.values(resJson)[i].createdAt 

        }

        form_acc_mess_map.set(Object.values(resJson)[i].block_number,form_acc);
       


        keyvalue++;
  }
 
mapAsc = new Map([...form_acc_mess_map.entries()].sort());

from_acc_mess = [...mapAsc.values()];

//console.log(from_acc_mess);


    for(var ic =from_acc_mess.length -1; ic>=0;ic--){

        check_acc_name = (Object.values(from_acc_mess)[ic].from_account == "juliusantony") ? 1 : 2;

          messages.push({

              _id : Object.values(from_acc_mess)[ic].blockno,
              text : Object.values(from_acc_mess)[ic].message,
              createdAt : Object.values(from_acc_mess)[ic].time,

              user : {
                _id : check_acc_name,
                name : Object.values(from_acc_mess)[ic].from_account
              },

               sent: true,

               received: true


          })
    }

    //console.log(messages)

    this.setState({ messages : messages});

}).catch(err => console.log(err))

  }




 

Converted = (t) => {

  var a = new Date(t).getTime();
  var dd;

  var h;
var ampm;
var dt = new Date(a*1000);
var hr = "0" + dt.getHours();
var m = "0" + dt.getMinutes();
var s = "0" + dt.getSeconds();
var unix = new Date(a);
var year = unix.getFullYear();
var month = "0" + unix.getMonth();
var date = "0" + unix.getDate();

if (hr > 12) {
    h =  hr - 12;
    ampm = 'PM';
  } else if (hr === 12) {
    h =  12;
    ampm = 'PM';
  } else if (hr == 0) {
    h =  12;
    ampm = 'AM';

  }else if(hr < 12){

    h =  hr;
    ampm = 'AM';
  }

return date.substr(-2) + ':'+ month.substr(-2) + ':' + year + ':' + h + ':' + m.substr(-2) + ':' + s.substr(-2) + '-' + ampm;
}






  render() {

    return (

      <GiftedChat

       messages={this.state.messages}

       onSend={(messages) => {this.onSend(messages); this.sendMessage(messages[0].text)}}
       

       user={{

         _id: 1,

       }}

     />

    );

  }

}
