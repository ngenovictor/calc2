function Calculator(num1,num2){
	this.num1 = num1;
	this.num2 = num2;
};

Calculator.prototype.add = function() {
	return this.num1+this.num2;
};
Calculator.prototype.subtract = function() {
	return this.num1-this.num2
};
Calculator.prototype.multiply = function() {
	return this.num1*this.num2;
};
Calculator.prototype.divide = function() {
	return this.num1/this.num2
};
Calculator.prototype.doMath = function(sign){
	if (sign==="add"){
		return this.add();
	}else if(sign==="subtract"){
		return this.subtract()
	}else if(sign==="multiply"){
		return this.multiply();
	} else if(sign=="divide"){
		return this.divide();
	}else{
		alert("We might have an error somewhere");
	}
};

Calculator.prototype.pingPong = function(num3) {
	for(var i = 1;i<=num3; i++){
		if(i %3===0 && i%5===0){
			$("div#pingponged-results ul").append("<li>pingpong</li>");
		}else if(i%3===0){
			$("div#pingponged-results ul").append("<li>ping</li>");
		}else if(i%5===0){
			$("div#pingponged-results ul").append("<li>pong</li>");
		}else{
			$("div#pingponged-results ul").append("<li>"+i+"</li>");
		}
	}	
};

exports.calculatorModule = Calculator;