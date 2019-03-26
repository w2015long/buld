

class Blog{
	index(req,res,...args){
		res.setHeader('Content-Type','text/html;charset=utf-8');
		res.end('<a href="https://www.kuazhu.com">去学习</a>');
	}
}

module.exports = new Blog();