import './shim.js' 

import Eos from 'eosjs';

import {getusername,getprivatekey} from "../auth";

 var {ecc} = Eos.modules;

var UserName = '';
var defaultPrivateKey = ''
var eos;
var config;


   
//post call for Murmur
    module.exports.postMurmur = (acc,post,dummy_url,visibility) => {

        

        return new Promise((resolve,reject) => {

          getusername().then(urn =>{
            UserName = urn;
            console.log(UserName);
              getprivatekey().then(upk => {
                defaultPrivateKey = upk;
                console.log(defaultPrivateKey);
    
                 config = {
                    chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
                    httpEndpoint: 'http://dev03.cryptolions.io:8890',
                    keyProvider: [upk],
                    authorization:  UserName + '@active', //@active for activeKey, @owner for Owner key
                    sign: true,   // sign the transaction with a private key. Leaving a transaction unsigned avoids the need to provide a private key.
                    broadcast: true,   //post the transaction to the blockchain. Use false to obtain a fully signed transaction
                    // verbose: false // verbose logging such as API activity
                  };
    
                  eos = Eos(config);
                  eos.transaction('murmurdappco',contract =>{

                    contract.murmur(acc,post,dummy_url,visibility,{authorization: [acc]})
              },config).then(c => {resolve(true);}).catch(err => {reject(false);})
    
                 }).then(c => console.log(c)).catch(err => console.log(err))
        }).then(c => console.log(c)).catch(err => console.log(err))



        })
    }


    module.exports.Whisper = (fromacc,toacc,from_pub_key,to_pub_key,message) => {

        getusername().then(urn =>{
            UserName = urn;
            console.log(UserName);
              getprivatekey().then(upk => {
                defaultPrivateKey = upk;
                console.log(defaultPrivateKey);
    
                 config = {
                    chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
                    httpEndpoint: 'http://dev03.cryptolions.io:8890',
                    keyProvider: [upk],
                    authorization:  UserName + '@active', //@active for activeKey, @owner for Owner key
                    sign: true,   // sign the transaction with a private key. Leaving a transaction unsigned avoids the need to provide a private key.
                    broadcast: true,   //post the transaction to the blockchain. Use false to obtain a fully signed transaction
                    // verbose: false // verbose logging such as API activity
                  };
    
                  eos = Eos(config);
                  eos.transaction('murmurdappco',contract => {
                    contract.whisper(fromacc,toacc,from_pub_key,to_pub_key,message,{authorization: [fromacc]})
               },config).then(c => console.log(c)).catch(err => console.log(err))
    
                 }).then(c => console.log(c)).catch(err => console.log(err))
        }).then(c => console.log(c)).catch(err => console.log(err))

       
    }

    //post call for Follow

    module.exports.Follow = (fromacc,toacc) => {

        getusername().then(urn =>{
            UserName = urn;
            console.log(UserName);
              getprivatekey().then(upk => {
                defaultPrivateKey = upk;
                console.log(defaultPrivateKey);
    
                 config = {
                    chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
                    httpEndpoint: 'http://dev03.cryptolions.io:8890',
                    keyProvider: [upk],
                    authorization:  UserName + '@active', //@active for activeKey, @owner for Owner key
                    sign: true,   // sign the transaction with a private key. Leaving a transaction unsigned avoids the need to provide a private key.
                    broadcast: true,   //post the transaction to the blockchain. Use false to obtain a fully signed transaction
                    // verbose: false // verbose logging such as API activity
                  };
    
                  eos = Eos(config);
                  eos.transaction('murmurdappco',contract => {
                    contract.follow(fromacc,toacc,{authorization: [fromacc]})
               },config).then(c => console.log(c)).catch(err => console.log(err))
    
                 }).then(c => console.log(c)).catch(err => console.log(err))
        }).then(c => console.log(c)).catch(err => console.log(err))

    }

    //Post call for Snoop

    module.exports.Snoop = (fromacc,murmur_id,visibility) => {

        getusername().then(urn =>{
            UserName = urn;
            console.log(UserName);
              getprivatekey().then(upk => {
                defaultPrivateKey = upk;
                console.log(defaultPrivateKey);
    
                 config = {
                    chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
                    httpEndpoint: 'http://dev03.cryptolions.io:8890',
                    keyProvider: [upk],
                    authorization:  UserName + '@active', //@active for activeKey, @owner for Owner key
                    sign: true,   // sign the transaction with a private key. Leaving a transaction unsigned avoids the need to provide a private key.
                    broadcast: true,   //post the transaction to the blockchain. Use false to obtain a fully signed transaction
                    // verbose: false // verbose logging such as API activity
                  };
    
                  eos = Eos(config);
                  eos.transaction('murmurdappco',contract => {
             
                    contract.snoop(fromacc,murmur_id,visibility,{authorization: [fromacc]})
              },config).then(c => console.log(c)).catch(err => console.log(err))


                 }).then(c => console.log(c)).catch(err => console.log(err))
        }).then(c => console.log(c)).catch(err => console.log(err))
        

        
    }

    //Post call for Yell

    module.exports.Yell = (fromacc,murmur_id,extra_comment,visibility) => {

        getusername().then(urn =>{
            UserName = urn;
            console.log(UserName);
              getprivatekey().then(upk => {
                defaultPrivateKey = upk;
                console.log(defaultPrivateKey);
    
                 config = {
                    chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
                    httpEndpoint: 'http://dev03.cryptolions.io:8890',
                    keyProvider: [upk],
                    authorization:  UserName + '@active', //@active for activeKey, @owner for Owner key
                    sign: true,   // sign the transaction with a private key. Leaving a transaction unsigned avoids the need to provide a private key.
                    broadcast: true,   //post the transaction to the blockchain. Use false to obtain a fully signed transaction
                    // verbose: false // verbose logging such as API activity
                  };
    
                  eos = Eos(config);
                  eos.transaction('murmurdappco',contract => {

                    contract.yell(fromacc,murmur_id,extra_comment,visibility,{authorization: [fromacc]})
              },config).then(c => console.log(c)).catch(err => console.log(err))
              
                 }).then(c => console.log(c)).catch(err => console.log(err))
        }).then(c => console.log(c)).catch(err => console.log(err))
        


       

    }

    //Post call for Comments

    module.exports.Comment = (formacc,murmur_id,comment) => {

        getusername().then(urn =>{
            UserName = urn;
            console.log(UserName);
              getprivatekey().then(upk => {
                defaultPrivateKey = upk;
                console.log(defaultPrivateKey);
    
                 config = {
                    chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
                    httpEndpoint: 'http://dev03.cryptolions.io:8890',
                    keyProvider: [upk],
                    authorization:  UserName + '@active', //@active for activeKey, @owner for Owner key
                    sign: true,   // sign the transaction with a private key. Leaving a transaction unsigned avoids the need to provide a private key.
                    broadcast: true,   //post the transaction to the blockchain. Use false to obtain a fully signed transaction
                    // verbose: false // verbose logging such as API activity
                  };
    
                  eos = Eos(config);

                  
                  eos.transaction('murmurdappco',contract => {

                    contract.comment(formacc,murmur_id,comment,{authorization: [formacc]})
        
                },config).then(c => console.log(c)).catch(err => console.log(err))


    
                 }).then(c => console.log(c)).catch(err => console.log(err))
        }).then(c => console.log(c)).catch(err => console.log(err))


        
    }

    //getAccount Public key details

    
    export var getAcc = (peer_account_name) => {

       return new Promise((resolve,reject) => {

           getusername().then(urn =>{
            UserName = urn;
            console.log(UserName);
              getprivatekey().then(upk => {
                defaultPrivateKey = upk;
                console.log(defaultPrivateKey);
    
                 config = {
                    chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
                    httpEndpoint: 'http://dev03.cryptolions.io:8890',
                    keyProvider: [upk],
                    authorization:  UserName + '@active', //@active for activeKey, @owner for Owner key
                    sign: true,   // sign the transaction with a private key. Leaving a transaction unsigned avoids the need to provide a private key.
                    broadcast: true,   //post the transaction to the blockchain. Use false to obtain a fully signed transaction
                    // verbose: false // verbose logging such as API activity
                  };
    
                  eos = Eos(config);


                      eos.getAccount(peer_account_name).then(res => {
                    
                                  resolve(Object.values(res)[12][0].required_auth.keys[0].key);
                        }).catch(err => {console.log(err);reject(err);});
                    })
    })

         })

}

//encrypting the message

export var encrypted_mess = (sender_pri_key,reciever_pub_key,message_to_enc) => {

     return new Promise((resolve,reject) => {

         
          var c = ecc.Aes.encrypt(sender_pri_key, reciever_pub_key,message_to_enc);
          enc_msg = c.message
          enc_nonce = c.nonce;
          enc_checksum = c.checksum;

        let emsg = enc_msg.toString('utf8');

        
        var d = JSON.stringify({

              "nonce" : enc_nonce,
              "message" : emsg,
              "checksum" : enc_checksum
        });
        console.log(enc_nonce);

       //resolve(d)
     })

      //ecc.Aes.encrypt(sender_pri_key, reciever_pub_key,message_to_enc)

}


    
   



