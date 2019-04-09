

const mongoose = require('mongoose');
const userModel = require('./Model/user.js');

mongoose.connect('mongodb://localhost/liyu', {useNewUrlParser: true});


const db = mongoose.connection;
db.on('error', err=>{
	if(err) throw err;
});
db.once('open', ()=>{
  
	userModel.insertMany({name:'Tom',age:18,major:'Art'})
	.then(docs=>{
		console.log(docs);
	})
	.catch(err=>{
		console.log('insertMany is error::',err);
	})



});