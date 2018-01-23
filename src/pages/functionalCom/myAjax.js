module.exports={
	myAjax : function(obj,callback){
		$.ajax({
		  	url: 'http://192.168.1.153:8080/'+obj.url,
		  	data: obj.data,
		  	dataType: obj.dataType,
		  	type: obj.type,
		  	success: function(data){
		  		if(data.success){
		  			callback(data)
		  		}else{
		  			alert(data.errMsg)
		  		}
		  		
		  	} 
		})
	}
}