//处理POST、GET以及其他请求
var http = require('http');
var  fs = require('fs');
var url = require('url');
var querystring = require('querystring');

var hostname = '127.0.0.1';
var port = 3000;

var server = http.createServer(function(req,res){

	var urlStr = req.url;
	console.log(urlStr);
	if(urlStr == '/favicon.ico'){
		res.end('/favicon.ico');
	}
	var filePath = './' + urlStr;
	//请求路径带参数?
	if(urlStr.search(/\?/) != -1){
		filePath = "./"+urlStr.slice(0,urlStr.search(/\?/));
	}	

	fs.readFile(filePath,function(err,data){
		if(!err){//根据前台数据做处理
			res.end(data);
			// setTimeout(function(){
			// 	res.end(data);
			// },2000)
			
		}else{
			res.statusCode = 404;
			res.end('not found....');
		}
	})		


})

server.listen(port,hostname,function(){
	console.log('Server runing at http://'+hostname+':'+port+'/');
})