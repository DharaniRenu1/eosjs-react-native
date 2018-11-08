import './shim';

import { onSetPvt, list_acc, onSetusername , getusername,getprivatekey} from "../auth";
import { AsyncStorage } from "react-native";
const eosjs2 = require('eosjs2');
import fetch from 'isomorphic-fetch';                          
const { TextDecoder, TextEncoder } = require('text-encoding');  

var UserName = '';
var defaultPrivateKey = ''

module.exports.transaction = (author,action,data) =>{
getusername().then(res => {
  UserName = res;
  getprivatekey().then(res_pk => {
    defaultPrivateKey = res_pk
    let rpc = new eosjs2.Rpc.JsonRpc('http://dev.cryptolions.io:38888',{fetch});
    let signatureProvider = new eosjs2.SignatureProvider([defaultPrivateKey]);
    let api = new eosjs2.Api({ rpc, signatureProvider,textDecoder: new TextDecoder, textEncoder: new TextEncoder});


    (async () => {

      try {
        const result = await api.transact({
          actions: [{
            account: 'murmurdappco',
            name: action,
            authorization: [{
              actor: UserName,
              permission: 'active',
            }],
            data: data
            ,
          }]
        }, {
          blocksBehind: 3,
          expireSeconds: 30,
        }).then(c => console.log(c)).catch(err => console.log(err));
        console.log(JSON.stringify(result, null, 2));
      } catch (e) {
        console.log('Caught exception: ' + e);
        if (e instanceof eosjs2.Rpc.RpcError)
          console.log(JSON.stringify(e.json, null, 2));
      }
    })();
  }).catch(err => {
    console.log(err)
    alert("An error occurred1")});
}).catch(err => {
    console.log(err)
    alert("An error occurred")});
}

