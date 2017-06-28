(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Calculator = require('./../js/calculator.js').calculatorModule;
$(document).ready(function(){
	$("form#calc").submit(function(event){
		event.preventDefault();
		var num1 = parseInt($("input#num1").val());
		var sign = $("select#sign").val();
		var num2 = parseInt($("input#num2").val());
		var aCalculate = new Calculator(num1,num2);
		var result = aCalculate.doMath(sign);
		$("div#results").text("");
		$("div#results").append(result);
		$("div#results").show();

		$("div#pingponged-results").fadeIn(2000,function(){
			$("div#pingponged-results").text("PingPongedResults");
			$("div#pingponged-results").append("<ul></ul>");
			aCalculate.pingPong(result);
		})
			
	

	})
})
},{"./../js/calculator.js":2}],2:[function(require,module,exports){
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
},{}]},{},[1]);
