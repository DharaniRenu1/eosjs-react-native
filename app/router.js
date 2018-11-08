import React from "react";
import { Platform, StatusBar } from "react-native";
import {createStackNavigator,createMaterialTopTabNavigator,createSwitchNavigator} from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";
import Welcome from "./screens/Welcome";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import KeyPair from "./screens/KeyPair";
import FriendRef from "./screens/FriendRef";
import Share from "./screens/Share";
import Share1 from "./screens/Share1";
import User from "./screens/username";
import Search from "./screens/search";
import Account1 from "./screens/Account1";
import Account2 from "./screens/Account2";
import Settings from "./screens/Settings";
import Create from "./screens/create";
import Wishper from "./screens/wishper";
import Wish_search from "./screens/wish_search";
import Message from "./screens/Message";
import Comments from "./screens/comments";
import Follow from "./screens/Follow";
import Recommand from "./screens/Recommand";
import Chat from "./screens/chat";
import Constitution from "./screens/constitution"
import SelectAcc from "./screens/SelectAcc"
import Following from "./screens/following"
import Followers from "./screens/followers"

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = createStackNavigator({
  Welcome: Welcome,
  SignUp:SignUp,
  SelectAcc:SelectAcc,
  Constitution:Constitution,
  SignIn: SignIn,
  KeyPair:KeyPair,
  FriendRef:FriendRef,
  Share1:Share1, 
  Recommand:Recommand,
  SignIn: SignIn,

  });


export const SignedIn = createStackNavigator(
  {
   
    Home:Home,
    Search:Search,
    Wishper:Wishper, 
    Profile:Profile,
    Following:Following,
    Followers:Followers,
    Account2:Account2,
    Account1:Account1,
    Settings: Settings,
    Share:Share ,
    User:User,
    Create:Create, 
    Wish_search: Wish_search,
    Message: Message,
    Comments:Comments,
    Follow:Follow,
    Chat:Chat,

});
export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
   
      SignedIn: {
        screen: SignedIn,
      },
      SignedOut: {
        screen: SignedOut
      },
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};



