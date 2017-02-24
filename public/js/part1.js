var ws = {};

    
$(document).ready(function(){
 
    connect_to_server();
    
    $("#blockdetails").val("");
    
    $("#submit").click(function(){
    
        var send = $("#select1 option:selected").val();
        var rece = $("#select2 option:selected" ).val();
        var valu = $("#amount").val();
        
        transfer(send, rece, valu);
     
       
     $("#transfer").html("Amount  "  + valu +" has transfered ");
     
        $("#amount").val("");
       
    });
    
    
     function transfer(send, rece, valu){
    
			var obj = 	{
							type: 'transfer',
							sender: send,
							receiver: rece,
                            value:valu,
							v: 1
						};
			ws.send(JSON.stringify(obj));
         
    }
    
    
    
    
    
    $('#balance').click(function(){
       var user = $("#select3 option:selected" ).val();
        get(user);
        display();
    });
    
    
    function display(){
      
     ws.addEventListener("message", function(e) {
    
        
    var msg = JSON.parse(e.data);
      
         
   if (msg.balance){
    
    // Append the message
    $("#bal").val(msg.balance);
  
     }
    });
        
    }
    
    function get(user){
       
			var obj = 	{
							type: 'get',
							user:user,
							v: 1
						};
			ws.send(JSON.stringify(obj));
        
    }
    
    $("#submit").click(function(){
    $("#chain8").css("background-color", "#7ec0ee");
    });
    
    
   ws.addEventListener("message", function(e) {
    
       
       console.log("Hello");
    var message = JSON.parse(e.data);
       
     console.log(message);
    console.log("data 1 is:"+message.msg);
    console.log("data 2 is:"+ message.blockstats);
    
     
    
       
    if (message.chainstats  || message.blockstats) 
   
    {
        console.log("data 3 is:"+ btoa(message.blockstats.transactions[0].payload) );
        
        
        //console.log("data 3 is:"+ message.blockstats.transactions[0].cert );
        
        
      
      console.log(message.chainstats);
     console.log(message.blockstats);
       
       var numBlocks = message.chainstats.height - message.blockstats.height;
       console.log(numBlocks);
       
       
        $("#chain1").val(message.chainstats.height - 8);
           $("#chain2").val(message.chainstats.height - 7);
          // $("#chain1").css("background-color", "#DCDCDC");
           //$("#chain2").css("background-color", "#DCDCDC");
         // console.log(  ($("#chain2").css("backgroundColor")));
       // console.log(  ($("#chain2").style("backgroundColor")));   
   // $("#chain2").css("backgroundColor") = $("#chain2").style.backgroundColor == rgb(255, 255, 255) ? 'red' : 'blue'; 
           $("#chain3").val(message.chainstats.height - 6);
           $("#chain4").val(message.chainstats.height - 5);
          // $("#chain3").css("background-color", "red");
          // $("#chain4").css("background-color", "blue");
           $("#chain5").val(message.chainstats.height - 4);
           $("#chain6").val(message.chainstats.height - 3);
          // $("#chain5").css("background-color", "red");
         //  $("#chain6").css("background-color", "blue");
           $("#chain7").val(message.chainstats.height - 2);
           $("#chain8").val(message.chainstats.height -1);
          // $("#chain7").css("background-color", "red");
         //  $("#chain8").css("background-color", "blue");
        
        
    
    
    
      
      
       
    $("#chain9").val("Height of blocks is " + message.chainstats.height);
    
        
        // $("#chain1").tooltip( {title:  atob(message.blockstats.transactions[0].payload)});
        
        //console.log(atob(message.blockstats.transactions[0].payload));
     
        
        
       
        
        
        
      /*  $("#chain1").tooltip( {title:
       $.get("https://fbe68bbb3e5b47d2bace3ac8c29de41e-vp1.us.blockchain.ibm.com:5004/chain/", function(data, status){
           // alert("Data: " + data + "\nStatus: " + status);
             alert(data.height);
            })
        }); */
        
        
       
    }
       
       

      
        
      // ws.close();
       
    });
    
    
    $("#chain1").click( function(){
     var valueIs = $("#chain1").val();
     valueIs ++;
     console.log("value to see "+ valueIs);
         
    $.ajax({
        type: "get",
        url: "https://fbe68bbb3e5b47d2bace3ac8c29de41e-vp1.us.blockchain.ibm.com:5004/chain/blocks/" + valueIs,
      //  data: 'page=' + btn_page,
        success: function (data) {
            var a = data; // This line shows error.
           var toDisplay = atob(data.transactions[0].payload);
            console.log(toDisplay);
            $("#blockdetails").val( toDisplay)
            
        }
    });
    
     });
         
   $("#chain2").click( function(){
     var valueIs = $("#chain2").val();
     valueIs ++;
     console.log("value to see "+ valueIs);
         
    $.ajax({
        type: "get",
        url: "https://fbe68bbb3e5b47d2bace3ac8c29de41e-vp1.us.blockchain.ibm.com:5004/chain/blocks/" + valueIs,
      //  data: 'page=' + btn_page,
        success: function (data) {
            var a = data; // This line shows error.
           var toDisplay = atob(data.transactions[0].payload);
            console.log(toDisplay);
            $("#blockdetails").val( toDisplay)
            
        }
    });
    
     });
         
    $("#chain3").click( function(){
     var valueIs = $("#chain3").val();
     valueIs ++;
     console.log("value to see "+ valueIs);
         
    $.ajax({
        type: "get",
        url: "https://fbe68bbb3e5b47d2bace3ac8c29de41e-vp1.us.blockchain.ibm.com:5004/chain/blocks/" + valueIs,
      //  data: 'page=' + btn_page,
        success: function (data) {
            var a = data; // This line shows error.
           var toDisplay = atob(data.transactions[0].payload);
            console.log(toDisplay);
            $("#blockdetails").val( toDisplay)
            
        }
    });
    
     });
    

   $("#chain4").click( function(){
     var valueIs = $("#chain4").val();
     valueIs ++;
     console.log("value to see "+ valueIs);
         
    $.ajax({
        type: "get",
        url: "https://fbe68bbb3e5b47d2bace3ac8c29de41e-vp1.us.blockchain.ibm.com:5004/chain/blocks/" + valueIs,
      //  data: 'page=' + btn_page,
        success: function (data) {
            var a = data; // This line shows error.
           var toDisplay = atob(data.transactions[0].payload);
            console.log(toDisplay);
            $("#blockdetails").val( toDisplay)
            
        }
    });
    
     });
    
        $("#chain5").click( function(){
     var valueIs = $("#chain5").val();
     valueIs ++;
     console.log("value to see "+ valueIs);
         
    $.ajax({
        type: "get",
        url: "https://fbe68bbb3e5b47d2bace3ac8c29de41e-vp1.us.blockchain.ibm.com:5004/chain/blocks/" + valueIs,
      //  data: 'page=' + btn_page,
        success: function (data) {
            var a = data; // This line shows error.
           var toDisplay = atob(data.transactions[0].payload);
            console.log(toDisplay);
            $("#blockdetails").val( toDisplay)
            
        }
    });
    
     });
    
        $("#chain6").click( function(){
     var valueIs = $("#chain6").val();
     valueIs ++;
     console.log("value to see "+ valueIs);
         
    $.ajax({
        type: "get",
        url: "https://fbe68bbb3e5b47d2bace3ac8c29de41e-vp1.us.blockchain.ibm.com:5004/chain/blocks/" + valueIs,
      //  data: 'page=' + btn_page,
        success: function (data) {
            var a = data; // This line shows error.
           var toDisplay = atob(data.transactions[0].payload);
            console.log(toDisplay);
            $("#blockdetails").val( toDisplay)
            
        }
    });
    
     });
    
         $("#chain7").click( function(){
     var valueIs = $("#chain7").val();
     valueIs ++;
     console.log("value to see "+ valueIs);
         
    $.ajax({
        type: "get",
        url: "https://fbe68bbb3e5b47d2bace3ac8c29de41e-vp1.us.blockchain.ibm.com:5004/chain/blocks/" + valueIs,
      //  data: 'page=' + btn_page,
        success: function (data) {
            var a = data; // This line shows error.
           var toDisplay = atob(data.transactions[0].payload);
            console.log(toDisplay);
            $("#blockdetails").val( toDisplay)
            
        }
    });
    
     });
       /*  $("#chain8").click( function(){
     var valueIs = $("#chain8").val();
    valueIs ++;
    console.log("value to see "+ valueIs);
        
     $.get("https://fbe68bbb3e5b47d2bace3ac8c29de41e-vp1.us.blockchain.ibm.com:5004/chain/blocks/" + valueIs ,function(data,status){        
        var toDisplay = atob(data.transactions[0].payload);
         console.log(toDisplay);
         $("#chain8").tooltip( { title: toDisplay
        
        })
         
     });
     
}); */
    
    
  
     $("#chain8").click( function(){
     var valueIs = $("#chain8").val();
     valueIs ++;
     console.log("value to see "+ valueIs);
         
    $.ajax({
        type: "get",
        url: "https://fbe68bbb3e5b47d2bace3ac8c29de41e-vp1.us.blockchain.ibm.com:5004/chain/blocks/" + valueIs,
      //  data: 'page=' + btn_page,
        success: function (data) {
            var a = data; // This line shows error.
           var toDisplay = atob(data.transactions[0].payload);
            console.log(toDisplay);
            $("#blockdetails").val( toDisplay)
            
        }
    });
    
     });
    
    /*
 $("#chain1").tooltip(
     
     $("#balance").click( function(){
     var valueIs = $("#chain1").val()
    }),
     
     
     { title:(
        
                              
     
     
        $.get("https://fbe68bbb3e5b47d2bace3ac8c29de41e-vp1.us.blockchain.ibm.com:5004/chain/blocks/240" 
          ,function(data,status){
            
        return data.transactions[0].payload;
            
        }))
        
    }); */
        
   /*$("#balance").click( function(){
    console.log("value is" + $("#chain1").val())
    });*/
    
    
    //$("#chain1").mouseover(function(){
     //    alert("Welcome to TutorialsPoint…");
    //});
  
  
 
});
    
// =================================================================================
// Socket Stuff
// =================================================================================
function connect_to_server(){
	var connected = false;

    // Redirect https requests to http so the server can handle them
    if(this.location.href.indexOf("https://") > -1) {
        this.location.href = this.location.href.replace("https://", "http://");
    }

	connect();

	function connect(){
		var wsUri = 'ws://' + document.location.hostname + ':' + document.location.port;
		console.log('Connecting to websocket', wsUri);
		
		ws = new WebSocket(wsUri);
		ws.onopen = function(evt) { onOpen(evt); };
		ws.onclose = function(evt) { onClose(evt); };
		ws.onmessage = function(evt) { onMessage(evt); };
		ws.onerror = function(evt) { onError(evt); };
	}
	
	function onOpen(evt){
		console.log('WS CONNECTED');
		connected = true;
		ws.send(JSON.stringify({type: 'get', v:1}));
		ws.send(JSON.stringify({type: 'chainstats', v:1}));
	}

	function onClose(evt){
		console.log('WS DISCONNECTED', evt);
		connected = false;
		setTimeout(function(){ connect(); }, 5000);					//try again one more time, server restarts are quick
	}

	function onMessage(msg){
		try{
			 var msgObj = JSON.parse(msg.data);
            
		}
		catch(e){
			console.log('ERROR', e);
		}
	}

	function onError(evt){
		console.log('ERROR ', evt);
		
	}
}



    