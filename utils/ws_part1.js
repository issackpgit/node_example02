// ==================================
// Part 1 - incoming messages, look for type
// ==================================
var ibc = {};
var chaincode = {};
var async = require('async');

module.exports.setup = function(sdk, cc){
	ibc = sdk;
	chaincode = cc;
};

module.exports.process_msg = function(ws, data){
	if(data.v === 1){																						
        if(data.type == 'transfer'){
			console.log('Transfering from' + data.sender + 'to' + data.receiver );
			
           if(data.sender && data.receiver && data.value){
				chaincode.invoke.invoke([data.sender, data.receiver, data.value], cb_invoked);
			}
		}
        
    
        
		else if(data.type == 'get'){
			console.log('get balance ');
            console.log(data.user);
            console.log("Hello there");
            
            
			chaincode.query.query([data.user], cb_got_index);
            
		}
	
		
		else if(data.type == 'chainstats'){
			console.log('chainstats msg');
			ibc.chain_stats(cb_chainstats);
		}
	}

	
   function cb_got_index(e, a){
       
       
       
       	if(e != null) console.log('Error in getting balance', e);
				else{
					try{
				        var json = JSON.parse(a);
                       // console.log(json);
                        
                        
						sendMsg({msg: 'Balance', e: e, balance: a});
					}
					catch(e){
						console.log('Error index msg error:', e);
					}
				}
   }
   
   
    
	function cb_invoked(e, a){
		console.log('response: ', a);
	}
	
	//call back for getting the blockchain stats, lets get the block stats now
	function cb_chainstats(e, chain_stats){
		if(chain_stats && chain_stats.height){
			chain_stats.height = chain_stats.height - 1;								//its 1 higher than actual height
			var list = [];
			for(var i = chain_stats.height; i >= 1; i--){								//create a list of heights we need
				list.push(i);
				if(list.length >= 8) break;
			}
			list.reverse();																//flip it so order is correct in UI
			async.eachLimit(list, 1, function(block_height, cb) {						//iter through each one, and send it
				ibc.block_stats(block_height, function(e, stats){
					if(e == null){
						stats.height = block_height;
						sendMsg({msg: 'chainstats', e: e, chainstats: chain_stats, blockstats: stats});
                      
                        
					}
					cb(null);
				});
			}, function() {
			});
		}
	}
	
	//send a message, socket might be closed...
	function sendMsg(json){
		if(ws){
			try{
				ws.send(JSON.stringify(json));
			}
			catch(e){
				console.log('[ws error] could not send msg', e);
			}
		}
	}
};