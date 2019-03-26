const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const querystring = require('querystring');



const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req,res)=>{
	let reqUrl = url.parse(req.url,true);
	let pathname =  reqUrl.pathname;	

  	if(pathname=='/static'){//请求静态资源

  	}
  	else{
  		let paths = pathname.split('/');
  		let controller = paths[1] || 'Blog';
  		let action = paths[2] || 'index';
  		let args = paths.slice(3);

  		try{
  			let mode = require('./Controller/'+ controller);
  			console.log(mode);
  			mode[action] && mode[action].apply(null,[req,res].concat(args));
  		}
  		catch{
  			res.setHeader('Content-Type','text/html; charset=utf-8');
			res.end('server maybe error');
  		}

  	}





})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
