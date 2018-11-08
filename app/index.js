import React from "react";
import { createRootNavigator,AccountRouteNavigator } from "./router";
import { isSignedIn } from "./auth";
import { Recovery} from "./pauth";
import { View } from "react-native";
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
      Isrecovery: false,
      RecoverySign:false
    };
  }

  componentDidMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
       Recovery()
      .then(res => this.setState({ Isrecovery: res, RecoverySign: true }))
      .catch(err => alert("An error occurred"));
  }

  render() {
    const { checkedSignIn, signedIn , Isrecovery , RecoverySign } = this.state;


    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }
       if (!RecoverySign) {
      return null;
    }
    const Layout1 = AccountRouteNavigator(Isrecovery);
    const Layout = createRootNavigator(signedIn);

    
    return (
     
     <Layout />
     <Layout1/>
  
);
  }
}
