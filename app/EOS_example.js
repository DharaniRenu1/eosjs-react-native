// import './shim.js'

// import Eos from 'eosjs'
// import mnGen from 'mngen';

// var PriKey = '';
// var PubKey = '';

// export function get_net(){
//   config = {
//     keyProvider: "5Htwu3g12J63VSghA8oFUrCvhtRAxj656dtqdwY3Tz2yzRjhZhE", 
// 	httpEndpoint: 'http://dev.cryptolions.io:38888',
// 	chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
// 	broadcast: true,
// 	debug: true, 
// 	sign: true
//   }
//   local_net = Eos(config);
//   return local_net
// }

// export function get_info(){
// 	let net = get_net();
// 	return net.getInfo({}).then(info => {
// 		return info;
// 	});
// }

// export function randomKey(){

// 	var mnem = mnGen.list(1, 12, ' ').toString();
// 	console.log("Mnemonic: ", mnem);

// 	PriKey = Eos.modules.ecc.PrivateKey.fromSeed(mnem).toString()
// 	console.log("PrivateKey: ",PriKey);

// 	PubKey = Eos.modules.ecc.privateToPublic(PriKey)
// 	console.log("PublicKey: ",PubKey);

// 	res = {"mnemonic": mnem, "PrivateKey": PriKey, "PublicKey": PubKey}

// 	// console.log(res)

// 	return res;

// 	// return Eos.modules.ecc.randomKey().then(Pri => {
// 	// 	PriKey = Pri;
// 	// 	console.log("PrivateKey: ",PriKey);

// 	// 	PubKey = Eos.modules.ecc.privateToPublic(Pri)
// 	// 	console.log("PublicKey: ",PubKey);

// 	// 	return "Key generated"
// 	// });
// }

// export function getKeyAccounts(){
// 	let net = get_net();
// 	return net.getKeyAccounts("EOS82AkFEUo59euBLbfeYYKk22xJ85tZtqSHgeidKcZdfdnLZSQUC").then(inf => {
// 		return inf;
// 	});
// }


// export function mnemonic(){
// 	var mnem = mnGen.list(1, 12, ' ').toString();
// 	console.log("Mnemonic: ", mnem);
// 	return mnem;
// }


// export function createAccounts(name, pub){

// 	// alert(name+" "+pub);
// 	let net = get_net();
// 	return net.transaction("murmursignup", myaccount => {

// 		account_name = name+'-'+pub;
// 		console.log(account_name);

//       myaccount.getaccount(account_name , { authorization: ['hiihiihiihii']})

//       }).then((da) => {
// 		alert("Account creaed successfully");
// 		console,log(da);
//       })
// }






import './shim.js'

import eos from 'eosjs'

const KEY = "5KaAyF8rG7Z5dyvtrzmDh4RTd2YoHeiRaf2WfSA1FYVLFpunduj";
const RPC_API_URL = "http://dev.cryptolions.io:38888";
const NAME = "murmsignhelp"

//export function get_net(){
  config = {
    keyProvider: KEY, // WIF string or array of keys..
	httpEndpoint: RPC_API_URL,
	chainid :'038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca',
	sign:true,
	broadcast:true,
	debug : true,
	authorization : "murmsignhelp@active"
  }

  EOS = eos(config);
  //return local_net
//}


export function get_info(){
	return EOS.getInfo({}).then(info => {
		return info;
	});
}

export function get_Pkey(){
	return eos.modules.ecc.randomKey().then(info => {
		return info;
	});
}

export function private_public(_key){
	return eos.modules.ecc.privateToPublic(_key);
}

export function isValidPrivate(_key){
	return eos.modules.ecc.isValidPrivate(_key);
}

export function getKeyAccounts(_key){
	let key2 = private_public(_key);
		return EOS.getKeyAccounts(key2);
}

export function getAcc(name){
	get_Pkey().then(res => {
	// let net = get_net();
	let key2 = private_public(res);
	//console.log(net);
	
	EOS.transaction("murmursignup", myaccount => {
		account_name = name+'-'+key2;
		console.log(account_name);
		
		myaccount.getaccount(account_name , { authorization: ['murmsignhelp']})		
   }).then(function(res){
	   console.log(res)
	   return res;
   })
		
	});
}