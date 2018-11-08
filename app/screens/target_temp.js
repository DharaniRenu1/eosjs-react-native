import React, { Component } from 'react';

import { View, StyleSheet } from 'react-native';



import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0



import "prop-types"; // 15.6.2





export default class App extends Component {

  state = {

    messages: [],

  };



  componentWillMount() {

    this.setState({ messages:  [

      {

        _id: Math.round(Math.random() * 1000000),

        text: 'Ohhhhhhh!',

        createdAt: new Date(),

        user: {

          _id: 2,

          name: 'React Native',

        },

        sent: true,

        received: true

      },

      {

        _id: Math.round(Math.random() * 1000000),

        text: 'Super Bro',

        createdAt: new Date(),

        user: {

          _id: 1,

          name: 'React Native',

        },

        sent: true,

        received: true

      },

      {

        _id: Math.round(Math.random() * 1000000),

        text: '',

        createdAt: new Date(),

        user: {

          _id: 2,

          name: 'React Native',

        },

        image: 'http://www.pokerpost.fr/wp-content/uploads/2017/12/iStock-604371970-1.jpg',

        sent: true,

        received: true,

      },

      {

        _id: Math.round(Math.random() * 1000000),

        text: 'Send me a picture!',

        createdAt: new Date(),

        user: {

          _id: 1,

          name: 'Developer',

        },

      },

      {

        _id: Math.round(Math.random() * 1000000),

        text: 'Yes, and I use Gifted Chat!',

        createdAt: new Date(),

        user: {

          _id: 2,

          name: 'React Native',

        },

        sent: true,

        received: true

      },

      {

        _id: Math.round(Math.random() * 1000000),

        text: 'Are you building a chat app?',

        createdAt: new Date(),

        user: {

          _id: 1,

          name: 'Developer',

        },

      },

      {

        _id: Math.round(Math.random() * 1000000),

        text: "You are officially rocking GiftedChat.",

        createdAt: new Date(),

        system: true,

      },

    ]});

  }



  onSend(messages = []) {

    this.setState((previousState) => ({

      messages: GiftedChat.append(previousState.messages, messages),

    }));

  }



  render() {

    return (

      <GiftedChat

       messages={this.state.messages}

       onSend={(messages) => this.onSend(messages)}

       user={{

         _id: 1,

       }}

     />

    );

  }

}