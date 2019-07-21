
// import './css/index.css';
import './css/index.less';

var oBox = document.getElementById('wrap'); 
var aLi = oBox.children;
for(let i=0;i<aLi.length;i++){
	if(i % 2){
		aLi[i].style.color = 'red'
	}
}

class Person {
	static sayHi(){
		console.log('say Hi....');
	}
}

Person.sayHi()