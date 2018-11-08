import React from "react";
import { View, ScrollView, Image, TouchableOpacity,ToolbarAndroid,StyleSheet,TextInput } from "react-native";
import { Card ,Text } from "react-native-elements";
import { onSignOut } from "../auth";
import { CardItem, Left, Body, Right ,Form,Textarea} from 'native-base';
import {  Header,Container,Content,Item,Input,   Icon, Title,Button ,  Footer, FooterTab} from 'native-base';

export default class Recommand extends React.Component {
  static navigationOptions = {
   
    header:null
  };
  render() {
    return (

 <Container  style={{backgroundColor:"#ffffff"}} >
 <Header  style={{backgroundColor:"#3B21FF",height:65}}>
 <Left>
              <Title style={{marginTop:10,marginLeft:-60,fontSize:20,}}>EOS Constitution
</Title>
       </Left>  
        </Header>
      
      
        <Content >
          <Card style={{ height:420,width:350}} >
         <View style={{ height:350,width:350}} >
        
            <CardItem style={{ height:350,width:300}} >
             <ScrollView>
               <Text>                                   
          <Text style={{ color: "#000000",fontFamily:"TimesNewRomanPSMT",
          fontSize:18}} >
          This Constitution is a multi-party contract
           entered into by the Members by virtue 
           of their use of this blockchain.
           </Text>
           {'\n'}{'\n'}
          <Text style={{ color: "#000000",
          fontSize:18,fontWeight:'500'}} >Article I - No Initiation of Violence </Text>
          {'\n'}
        <Text style={{ color: "#000000",fontFamily:"TimesNewRomanPSMT",
          fontSize:16}} >Members shall not initiate violence or the threat of violence against another Member.
            </Text> 
                 {'\n'}{'\n'}
             <Text style={{ color: "#000000",
          fontSize:18,fontWeight:'500'}} >Article II - No Perjury </Text>
          {'\n'}
        <Text style={{ color: "#000000",fontFamily:"TimesNewRomanPSMT",
          fontSize:16}} >Members shall be liable for losses caused by false or misleading attestations and shall forfeit any profit gained thereby.
            </Text> 
                {'\n'}{'\n'} 
             <Text style={{ color: "#000000",
          fontSize:18,fontWeight:'500'}} >Article III – Rights </Text>
          {'\n'}
        <Text style={{ color: "#000000",fontFamily:"TimesNewRomanPSMT",
          fontSize:16}} >
          The Members grant the right of contract and of private property to each other, therefore no property shall change hands except with the consent of the owner, by a valid Arbitrator’s order, or via community referendum.
           This Constitution creates no positive rights for or between any Members.
            </Text>  
                {'\n'}{'\n'}
             <Text style={{ color: "#000000",
          fontSize:18,fontWeight:'500'}} >Article IV - No Vote Buying </Text>
          {'\n'}
        <Text style={{ color: "#000000",fontFamily:"TimesNewRomanPSMT",
          fontSize:16}} >No Member shall offer nor accept anything of value in exchange for a vote of any type,
           nor shall any Member unduly influence the vote of another.
            </Text>  
                {'\n'}{'\n'}
             <Text style={{ color: "#000000",
          fontSize:18,fontWeight:'500'}} >Article V - No Fiduciary </Text>
          {'\n'}
        <Text style={{ color: "#000000",fontFamily:"TimesNewRomanPSMT",
          fontSize:16}} >No Member nor SYS token holder shall have fiduciary responsibility to support the value of the SYS token. The Members do not authorize anyone to hold assets, borrow, nor contract on behalf of SYS token holders collectively. This blockchain has no owners, managers or fiduciaries; therefore, no Member shall have beneficial interest in more than 10% of the SYS token supply.
            </Text>  
                {'\n'}{'\n'}
             <Text style={{ color: "#000000",
          fontSize:18,fontWeight:'500'}} >Article VI – Restitution </Text>
          {'\n'}
        <Text style={{ color: "#000000",fontFamily:"TimesNewRomanPSMT",
          fontSize:16}} >Each Member agrees that penalties for breach of contract may include, but are not limited to, fines, loss of account, and other restitution.
            </Text> 
                {'\n'}{'\n'} 
             <Text style={{ color: "#000000",
          fontSize:18,fontWeight:'500'}} >Article VII - Open Source </Text>
          {'\n'}
        <Text style={{ color: "#000000",fontFamily:"TimesNewRomanPSMT",
          fontSize:16}} >Each Member who makes available a smart contract on this blockchain shall be a Developer. Each Developer shall offer their smart contracts via a free and open source license, and each smart contract shall be documented with a Ricardian Contract stating the intent of all parties and naming the Arbitration Forum that will resolve disputes arising from that contract.
            </Text>  
                {'\n'}{'\n'}
             <Text style={{ color: "#000000",
          fontSize:18,fontWeight:'500'}} >Article VIII – Language </Text>
          {'\n'}
        <Text style={{ color: "#000000",fontFamily:"TimesNewRomanPSMT",
          fontSize:16}} >Multi-lingual contracts must specify one prevailing language in case of dispute and the author of any translation shall be liable for losses due to their false, misleading, or ambiguous attested translations.
            </Text> 
                {'\n'}{'\n'} 
             <Text style={{ color: "#000000",
          fontSize:18,fontWeight:'500'}} >Article IX - Dispute Resolution </Text>
          {'\n'}
        <Text style={{ color: "#000000",fontFamily:"TimesNewRomanPSMT",
          fontSize:16}} >All disputes arising out of or in connection with this Constitution shall be finally settled under the Rules of Arbitration of the International Chamber of Commerce by one or more arbitrators appointed in accordance with the said Rules.
            </Text>  
                {'\n'}{'\n'}
             <Text style={{ color: "#000000",
          fontSize:18,fontWeight:'500'}} >Article X - Choice of Law </Text>
          {'\n'}
        <Text style={{ color: "#000000",fontFamily:"TimesNewRomanPSMT",
          fontSize:16}} >Choice of law for disputes shall be, in order of precedence, this Constitution and the Maxims of Equity.
            </Text>  
                {'\n'}{'\n'}
             <Text style={{ color: "#000000",
          fontSize:18,fontWeight:'500'}} >Article XI – Amending </Text>
          {'\n'}
        <Text style={{ color: "#000000",fontFamily:"TimesNewRomanPSMT",
          fontSize:16}} >This Constitution and its subordinate documents shall not be amended except by a vote of the token holders with no less than 15% vote participation among tokens and no fewer than 10% more Yes than No votes, sustained for 30 continuous days within a 120 day period.
            </Text>  
                {'\n'}{'\n'}
             <Text style={{ color: "#000000",
          fontSize:18,fontWeight:'500'}} >Article XII – Publishing</Text>
          {'\n'}
        <Text style={{ color: "#000000",fontFamily:"TimesNewRomanPSMT",
          fontSize:16}} >Members may only publish information to the Blockchain that is within their right to publish. Furthermore, Members voluntarily consent for all Members to permanently and irrevocably retain a copy, analyse, and distribute all broadcast transactions and derivative information.
          </Text>
    {'\n'}{'\n'}             <Text style={{ color: "#000000",
          fontSize:18,fontWeight:'500'}} >Article XIII - Informed Consent </Text>
          {'\n'}
        <Text style={{ color: "#000000",fontFamily:"TimesNewRomanPSMT",
          fontSize:16}} >All service providers who produce tools to facilitate the construction and signing of transactions on behalf of other Members shall present to said other Members the full Ricardian contract terms of this Constitution and other referenced contracts. Service providers shall be liable for losses resulting from failure to disclose the full Ricardian contract terms to users.
            </Text> 
                {'\n'}{'\n'} 
             <Text style={{ color: "#000000",
          fontSize:18,fontWeight:'500'}} >Article XIV – Severability </Text>
          {'\n'}
        <Text style={{ color: "#000000",fontFamily:"TimesNewRomanPSMT",
          fontSize:16}} >If any part of this Constitution is declared unenforceable or invalid, the remainder will continue to be valid and enforceable.
            </Text>  
                {'\n'}{'\n'}
             <Text style={{ color: "#000000",
          fontSize:18,fontWeight:'500'}} >Article XV - Termination of Agreement</Text>
          {'\n'}
        <Text style={{ color: "#000000",fontFamily:"TimesNewRomanPSMT",
          fontSize:16}} >A Member is automatically released from all revocable obligations under this Constitution 3 years after the last transaction signed by that Member is incorporated into the blockchain. After 3 years of inactivity an account may be put up for auction and the proceeds distributed to all Members according to the system contract provisions then in effect for such redistribution.
            </Text>  
                {'\n'}{'\n'}
             <Text style={{ color: "#000000",
          fontSize:18,fontWeight:'500'}} >Article XVI - Developer Liability</Text>
          {'\n'}
        <Text style={{ color: "#000000",fontFamily:"TimesNewRomanPSMT",
          fontSize:16}} >Members agree to hold software developers harmless for unintentional mistakes made in the expression of contractual intent, whether or not said mistakes were due to actual or perceived negligence.
            </Text> 
                {'\n'}{'\n'} 
             <Text style={{ color: "#000000",
          fontSize:18,fontWeight:'500'}} >Article XVII – Consideration </Text>
          {'\n'}
        <Text style={{ color: "#000000",fontFamily:"TimesNewRomanPSMT",
          fontSize:16}} >All rights and obligations under this Constitution are mutual and reciprocal and of equally significant value and cost to all parties.
            </Text> 
                {'\n'}{'\n'} 
             <Text style={{ color: "#000000",
          fontSize:18,fontWeight:'500'}} >Article XVIII – Acceptance </Text>
          {'\n'}
        <Text style={{ color: "#000000",fontFamily:"TimesNewRomanPSMT",
          fontSize:16}} >A contract is deemed accepted when a member signs a transaction which incorporates a TAPOS proof of a block whose implied state incorporates an ABI of said contract and said transaction is incorporated into the blockchain.
            </Text>  
                {'\n'}{'\n'}
             <Text style={{ color: "#000000",
          fontSize:18,fontWeight:'500'}} >Article XIX – Counterparts </Text>
          {'\n'}
        <Text style={{ color: "#000000",fontFamily:"TimesNewRomanPSMT",
          fontSize:16}} >This Constitution may be executed in any number of 
          counterparts, each of which when executed and delivered shall constitute a duplicate original, but all counterparts 
          together shall constitute a single agreement.

            </Text>  
           
          </Text>
 </ScrollView>
            </CardItem>

   

   
   </View>
</Card>
       <Body>
         <TouchableOpacity
         style={styles.button}  onPress={() =>this.props.navigation.navigate("FriendRef")}
        
       >
         <Text style={{   color:"white",
    fontSize:15,}} > I UNDERSTAND </Text>
       </TouchableOpacity>
        </Body>
        </Content>

      </Container>
      );
  }
}






  const styles = StyleSheet.create({
 
  button: {
    alignItems: 'center',
    backgroundColor: '#56A2FF',
    padding: 10,
    width:130,
    height:40,
  
    color:"white",
    fontSize:15,
    marginTop:25
 
      
  }
})

