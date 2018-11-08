import React from "react";
import { View,Text,Image,StyleSheet, KeyboardAvoidingView } from "react-native";
import { createRootNavigator } from "./app/router";
import { isSignedIn } from "./app/auth";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));



      //  eos.postMurmur("amitmaurya12" , "test post eosjs", 1);
 
       // eos.generateRandomPrivKey()
       // .then(function (newPrivateKey) {
       //   let newPublicKey = eos.fromPrivToPub(newPrivateKey);
       //   if (eos.isPubKeyValid(newPublicKey) && eos.isPrivKeyValid(newPrivateKey)) {
       //     eos.murmurSignup("amitmaurya21" , newPublicKey);
       //   }
       // })
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
        return <Layout/>
  }
}
