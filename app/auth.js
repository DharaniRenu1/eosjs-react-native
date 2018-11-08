
import { AsyncStorage } from "react-native";
import './shim.js'

import Eos from 'eosjs'
import mnGen from 'mngen';

import {get_info, isValidPrivate, getKeyAccounts} from './EOS_example.js'

export const USER_KEY='murmur';
export var private_key = '';
export var list_acc = '';
export var UserName = '';

export var getUsername = '';
export var getPrivatekey = '';


  var eos = Eos(config = {
      keyProvider: "5J9UnE6rZ4EixYMoqsz1MVv3oUt5EXamitwozKRDb7AbkkCmhro", 
      httpEndpoint: 'http://dev.cryptolions.io:38888',
      chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
      broadcast: true,
      debug: true, 
      sign: true
    });



  

export const onSetPvt = (pvt) =>{ 
  if (isValidPrivate(pvt) == true)
    {
      private_key = pvt;
        AsyncStorage.setItem("private_key", private_key);

      return true;
    }
    else {
      return false;
    }
}

export const onSetlist = (pvt) =>{
  list_acc = pvt;
  console.log(list_acc);
  
} 

export const onSetusername = (name) =>{
  UserName = name;
  AsyncStorage.setItem("UserName",UserName );
  console.log(UserName);
  
  acc_name = UserName+"@active"

  eos = Eos(config = {
    keyProvider: private_key, 
    httpEndpoint: 'http://dev.cryptolions.io:38888',
    chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
    authorization: acc_name,
    broadcast: true,
    debug: true, 
    sign: true
  });

} 

export const onSignIn = () => AsyncStorage.setItem(USER_KEY, "true");

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);



export var getusername = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem("UserName")
      .then(res => {
        if (res !== null) {

          getUsername = res;
          resolve(res);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};
 export var getprivatekey = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem("private_key")
      .then(res => {
        if (res !== null) {
          resolve(res);
          getPrivatekey = res;
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};
export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};


export const israndomKey = () => {
  return new Promise((resolve, reject) => {
    var mnem = mnGen.list(1, 12, ' ').toString();
    console.log("Mnemonic: ", mnem);

    PriKey = Eos.modules.ecc.PrivateKey.fromSeed(mnem).toString()
    console.log("PrivateKey: ",PriKey);

    PubKey = Eos.modules.ecc.privateToPublic(PriKey)
    console.log("PublicKey: ",PubKey);

    res = {"mnemonic": mnem, "PrivateKey": PriKey, "PublicKey": PubKey}
    console.log(res)
    resolve(res);
  });
};



export const iscreateAccount = (name, pub) => {
  // alert(name+" "+pub);
  return new Promise((resolve, reject) => {
    eos.transaction("murmursignup", myaccount => {

      account_name = name+'-'+pub;
      console.log("data ", account_name);

        myaccount.getaccount(account_name , { authorization: ['amitmaurya12@active']})
      })
      .then(res => {
        console.log(res)
        resolve(res);
      })
      .catch(err => reject(err));
  });
};


const conf = {
  chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
  httpEndpoint: 'http://dev03.cryptolions.io:8890',
  keyProvider: ['5J9UnE6rZ4EixYMoqsz1MVv3oUt5EXamitwozKRDb7AbkkCmhro'],
  authorization: 'amitmaurya12@active', //@active for activeKey, @owner for Owner key
  sign: true,   // sign the transaction with a private key. Leaving a transaction unsigned avoids the need to provide a private key.
  broadcast: true,   //post the transaction to the blockchain. Use false to obtain a fully signed transaction
  // verbose: false // verbose logging such as API activity
};

export const iscreateAcc = async (accountName, publicKey = '') => {
  let transaction = await eos.transaction('murmursignup', contract => {
    let data = accountName + "-" + publicKey;
    console.log("data ", data);
    contract.getaccount(data);
  }, conf)

  console.log("murmurSignup ", transaction);
}
